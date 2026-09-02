import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'verticalsPage',
  title: 'Verticals Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Industry-Specific Learning Solutions',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      initialValue: 'Tailored AI learning platforms designed for the unique needs of your industry.',
    }),
    defineField({
      name: 'statistics',
      title: 'Statistics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'value', title: 'Value', type: 'string'},
          {name: 'label', title: 'Label', type: 'string'},
        ],
      }],
    }),
    defineField({
      name: 'verticals',
      title: 'Verticals',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', title: 'Title', type: 'string'},
          {name: 'description', title: 'Description', type: 'text'},
          {name: 'iconType', title: 'Icon Type', type: 'string', options: {
            list: [
              {title: 'Building (Enterprise)', value: 'building'},
              {title: 'Landmark (Government)', value: 'landmark'},
              {title: 'Graduation Cap (Education)', value: 'graduation'},
              {title: 'Users (Partners)', value: 'users'},
            ]
          }},
          {name: 'features', title: 'Key Features', type: 'array', of: [{type: 'string'}]},
          {name: 'link', title: 'Link URL', type: 'string'},
        ],
      }],
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      initialValue: 'Not Sure Which Solution Fits?',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      initialValue: 'Our team can help you identify the perfect learning solution for your organization.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Verticals Page',
        subtitle: 'Industry verticals content',
      }
    },
  },
})
