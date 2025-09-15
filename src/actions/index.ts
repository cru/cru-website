import { defineAction } from 'astro:actions';
import axios from 'axios';
import { intakeSchema } from '../lib/schemas';


export const server = {
  submitIntake: defineAction({
    input: intakeSchema.refine((data) => {
      data.record_id = crypto.randomUUID();
      return data;
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
        type: 'flat',
        forceAutoNumber: true,
        content: 'record',
        data: JSON.stringify([input])
      }

      try {
        const response = await axios.postForm(url, payload)
        const data = response.data

        console.log(data)

        return `success!`
        
      } catch (error) {
        console.error(error.response.data)
        return 'Failed to post intake to REDCap' 
      }
    }
  })
}