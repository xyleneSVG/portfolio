import type { CollectionConfig } from 'payload';
import { put } from '@vercel/blob';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: false, // ⛔ Kita disable storage lokal karena kita mau ke Vercel Blob
  fields: [
    {
      name: 'url',
      type: 'text',
      required: true,
      admin: {
        readOnly: true, // Biar user gak bisa ngetik manual
      },
    },
    {
      name: 'filename',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req, operation }) => {
        if ((operation === 'create' || operation === 'update') && req.file) {
          const file = req.file;

          // 🚀 Kirim ke Vercel Blob
          const blob = await put(file.name, file.data, {
            access: 'public',
          });

          // 🚀 Simpan URL dan nama file
          data.url = blob.url;
          data.filename = file.name;
        }

        return data;
      },
    ],
  },
};
