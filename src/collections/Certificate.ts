import type { CollectionConfig } from 'payload'

export const Certificate: CollectionConfig = {
  slug: 'certificate',
  admin: {
    group: 'Certificate User',
  },
  fields: [
    {
      name: 'certificateTitle',
      type: 'text',
      required: true,
      label: 'Certificate Title',
      admin: {
        description: 'Judul dari sertifikat',
      },
    },
    {
      name: 'certificateOrganizer',
      type: 'text',
      required: true,
      label: 'Certificate Organizer',
      admin: {
        description: 'Penyelenggara sertifikat',
      },
    },
    {
        name: 'certificateType',
        type: 'select',
        label: 'Tipe Sertifikat',
        options: [
            { label: 'Training', value: 'training' },
            { label: 'Competition', value: 'competition' },
        ],
        defaultValue: "training",
    },
    {
      name: 'idCredential',
      type: 'text',
      required: true,
      label: 'ID Credential',
      admin: {
        condition: (_, siblingData) => siblingData.certificateType === "training",
        description: 'ID unik untuk sertifikat (jika tidak ada, isi "-")',
      },
    },
    {
      name: 'certificateOrganizer',
      type: 'text',
      required: true,
      label: 'Certificate Organizer',
      admin: {
        description: 'Penyelenggara sertifikat',
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
      name: 'category',
      type: 'relationship',
      relationTo: 'categoryProject',
      required: true,
      label: 'Project Category',
      admin: {
        description: 'Pilih kategori proyek ini',
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
