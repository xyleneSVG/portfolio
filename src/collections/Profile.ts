import type { CollectionConfig } from 'payload'

export const Profile: CollectionConfig = {
  slug: 'profile',
  admin: {
    defaultColumns: ['profileUser.nameUser', 'profileUser.divisionUser'],
  },
  fields: [
    {
        name: 'profileUser',
        type: 'group',
        label: 'Profile User',
        fields: [
            {
                name: 'nameUser',
                type: 'text',
                required: true,
                label: 'User Name',
                admin: {
                description: 'Nama lengkap pengguna',
                },
            },
            {
                name: 'imageUser',
                type: 'upload',
                relationTo: 'media',
                required: false,
                label: 'Profile Image',
                admin: {
                description: 'Upload foto profil di sini',
                },
            },
            {
                name: 'divisionUser',
                type: 'text',
                required: true,
                label: 'User Division',
                admin: {
                description: 'Divisi pengguna, misalnya: Frontend Developer, Backend Developer, dsb.',
                },
            },
            {
                name: 'greetingUser',
                type: 'text',
                required: true,
                label: 'User Greeting',
                admin: {
                description: 'Kata pengantar pada halaman utama, misalnya: "Hello, I\'m [Nama] dari [Divisi]"',
                },
            },
            {
                name: 'currentStatus',
                type: 'select',
                required: true,
                label: 'Current Status',
                options: [
                    {
                        label: 'Learning',
                        value: 'learning',
                    },
                    {
                        label: 'Working',
                        value: 'working',
                    },
                ],
                admin: {
                    description: 'Pilih status saat ini: Learning (sekolah) atau Working (bekerja)',
                },
            },
            {
                name: 'learningInstitution',
                type: 'textarea',
                required: false,
                label: 'Learning Institution',
                admin: {
                    condition: (_, siblingData) => siblingData.currentStatus === 'learning',
                    description: 'Deskripsi jika status saat ini adalah Learning (sekolah)',
                },
            },
            {
                name: 'workingInstitution',
                type: 'textarea',
                required: false,
                label: 'Working Institution',
                admin: {
                    condition: (_, siblingData) => siblingData.currentStatus === 'working',
                    description: 'Deskripsi jika status saat ini adalah Working (bekerja)',
                },
            },
        ]
    },
    {
        name: 'socialMedia',
        type: 'group',
        label: 'Social Media Links',
        fields: [
          {
            name: 'github',
            type: 'text',
            required: true,
            label: 'GitHub URL',
            admin: {
                description: 'Masukkan URL GitHub Anda',
            },
          },
          {
            name: 'linkedin',
            type: 'text',
            required: true,
            label: 'LinkedIn URL',
            admin: {
                description: 'Masukkan URL LinkedIn Anda',
            },
          },
          {
            name: 'email',
            type: 'text',
            required: true,
            label: 'Email Link',
            admin: {
                description: 'Masukkan email dalam format mailto:, contoh: mailto:email@example.com',
            },
          },
        ],
    },
  ],
}
