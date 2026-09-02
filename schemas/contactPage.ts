import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'hubspot', title: 'HubSpot Form' },
  ],
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Contact',
      group: 'content',
    }),
    defineField({
      name: 'heroHighlight',
      title: 'Hero Highlighted Text',
      type: 'string',
      initialValue: 'Us',
      description: 'This text will be highlighted/colored',
      group: 'content',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'content',
    }),
    defineField({
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
      initialValue: 'Send us a message',
      group: 'content',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'officeAddress',
      title: 'Office Address',
      type: 'text',
      rows: 3,
      group: 'content',
    }),
    defineField({
      name: 'hubspotPortalId',
      title: 'HubSpot Portal ID',
      type: 'string',
      description: 'Your HubSpot portal ID (found in HubSpot settings or form embed code). Example: 12345678',
      group: 'hubspot',
    }),
    defineField({
      name: 'hubspotFormId',
      title: 'HubSpot Form ID',
      type: 'string',
      description: 'Your HubSpot form ID (found in the form embed code). Example: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
      group: 'hubspot',
    }),
    defineField({
      name: 'hubspotEmbedCode',
      title: 'HubSpot Embed Code (Alternative)',
      type: 'text',
      rows: 10,
      description: 'Alternatively, paste the full HubSpot form embed code here. Only use this if Portal ID and Form ID do not work.',
      group: 'hubspot',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Page',
        subtitle: 'Contact information & HubSpot form',
      }
    },
  },
})
