import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import axios from 'axios';


export const server = {
  submitIntake: defineAction({
    input: z.object({
      record_id: z.string().default(crypto.randomUUID()),
      name: z.string(),
    }),
    handler: async (input) => {
      const url = import.meta.env.REDCAP_API_URL
      const token = import.meta.env.REDCAP_API_TOKEN
      if (!url || !token) {
        return { detail: 'REDCap API URL or token is not set in environment variables' }
      }

      console.log(input)

      const payload = {
        token: token,
        format: 'json',
        return_format: 'json',
        type: 'flat',
        forceAutoNumber: true,
        content: 'record',
        data: JSON.stringify(input)
      }

      try {
        const response = await axios.postForm(url, payload)
        const data = response.data

        console.log(data)

        return `success!`
        
      } catch (error) {
        console.error(error)
        return 'Failed to retrieve project info from REDCap' 
      }
    }
  })
}