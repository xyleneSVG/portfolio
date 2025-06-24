import type { CollectionConfig } from 'payload'
import { put } from '@vercel/blob'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  fields: [
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    {
      name: 'filename',
      type: 'text',
      required: true,
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req, operation }) => {
        if (operation === 'create' && req.file) {
          const file = req.file

          // Kirim ke Vercel Blob
          const blob = await put(file.name, file.data, {
            access: 'public',
          })

          // Update data
          data.url = blob.url
          data.filename = file.name
        }

        return data
      }
    ]
  }
}
