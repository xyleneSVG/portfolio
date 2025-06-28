import type { CollectionConfig } from 'payload'

export const CategoryProject: CollectionConfig = {
  slug: 'categoryProject',
  admin: {
    useAsTitle: 'name',
    group: 'Projects User',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Category Name',
      admin: {
        description: 'Nama kategori proyek (misal: Frontend, Fullstack, Mobile)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
      label: 'Description',
      admin: {
        description: 'Deskripsi tambahan untuk kategori ini (optional)',
      },
    },
  ],
}
