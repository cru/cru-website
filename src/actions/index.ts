import { ActionError, defineAction } from 'astro:actions'
import axios from 'axios'

export const server = {
  submitIntakeForm: defineAction({
    accept: 'form',
    handler: async (formData) => {
      const url = import.meta.env.REDCAP_API_URL
      const token = import.meta.env.REDCAP_API_TOKEN
      if (!url || !token) {
        return { detail: 'REDCap API URL or token is not set in environment variables' }
      }

      const data: Record<string, any> = {
        record_id: crypto.randomUUID(),
      }
      const files: Record<string, File> = {}
      for (const [key, value] of formData.entries()) {
        if (value instanceof File && value.size > 0) {
          files[key] = value
        } else {
          data[key] = value
        }
      }

      // Process your data and files
      // console.log('Data:', data)
      console.log('Files:', files)

      try {
        const dataPayload = {
          token: token,
          format: 'json',
          type: 'flat',
          forceAutoNumber: true,
          returnContent: 'ids',
          content: 'record',
          data: JSON.stringify([data]),
        }
        const dataRes = await axios.postForm(url, dataPayload)
        console.log('Record created:', dataRes.data)

        for (const [fieldName, file] of Object.entries(files)) {
          if (file instanceof File && file.size > 0) {
            // Create FormData for file upload
            const fileFormData = new FormData()
            fileFormData.append('token', token)
            fileFormData.append('content', 'file')
            fileFormData.append('action', 'import')
            fileFormData.append('record', dataRes.data[0])
            fileFormData.append('field', fieldName)
            fileFormData.append('file', file)

            console.log(`Uploading file for field: ${fieldName}`)

            try {
              const fileRes = await axios.post(url, fileFormData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
                maxContentLength: Infinity,
                maxBodyLength: Infinity,
              })
              console.log(`File uploaded for ${fieldName}:`, fileRes.data)
            } catch (fileError) {
              console.error(`Error uploading file for ${fieldName}:`, fileError)
              continue
            }
          }
        }

        return `success!`
      } catch (error) {
        console.error('REDCap error:', error)
        throw new ActionError({
          message: 'Failed to post intake to REDCap',
          code: 'INTERNAL_SERVER_ERROR',
        })
      }
    },
  }),
}
