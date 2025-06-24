import type { CollectionConfig } from 'payload'

export const Project: CollectionConfig = {
  slug: 'project',
  admin: {
    group: 'Projects User',
  },
  fields: [
    {
      name: 'projectTitle',
      type: 'text',
      required: true,
      label: 'Project Title',
      admin: {
        description: 'Judul dari proyek',
      },
    },
    {
      name: 'projectDescription',
      type: 'textarea',
      required: true,
      label: 'Project Description',
      admin: {
        description: 'Deskripsi singkat mengenai proyek ini',
      },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Project Thumbnail',
      admin: {
        description: 'Upload gambar thumbnail untuk proyek',
      },
    },
    {
      name: 'hasSourceCode',
      type: 'checkbox',
      label: 'Has Source Code?',
    },
    {
      name: 'sourceCodeLink',
      type: 'text',
      required: false,
      label: 'Source Code Link',
      admin: {
        condition: (_, siblingData) => siblingData.hasSourceCode === true,
        description: 'Link ke source code (GitHub atau lainnya)',
      },
    },
    {
      name: 'hasLiveDemo',
      type: 'checkbox',
      label: 'Has Live Demo?',
    },
    {
      name: 'liveDemoLink',
      type: 'text',
      required: false,
      label: 'Live Demo Link',
      admin: {
        condition: (_, siblingData) => siblingData.hasLiveDemo === true,
        description: 'Link ke live demo dari proyek',
      },
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      labels: {
        singular: 'Tag',
        plural: 'Tags',
      },
      required: false,
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
          label: 'Tag',
        },
      ],
      admin: {
        description: 'Tambahkan satu atau lebih tag untuk proyek ini',
      },
    },
  ],
}
