import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'aiLearningEnginePage',
  title: 'AI Learning Engine Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroLabel',
      title: 'Hero Label',
      type: 'string',
      initialValue: 'Intelligence Layer',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'The intelligence core powering',
    }),
    defineField({
      name: 'heroHighlight',
      title: 'Hero Highlighted Text',
      type: 'string',
      initialValue: 'next-gen learning',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Contact Us',
    }),
    defineField({
      name: 'capabilities',
      title: 'Engine Capabilities',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', title: 'Title', type: 'string'},
          {name: 'description', title: 'Description', type: 'text'},
        ],
      }],
    }),
    defineField({
      name: 'licensingTitle',
      title: 'Licensing Section Title',
      type: 'string',
    }),
    defineField({
      name: 'licensingDescription',
      title: 'Licensing Section Description',
      type: 'text',
    }),
    defineField({
      name: 'licensingOptions',
      title: 'Licensing Options',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'AI Learning Engine Page',
        subtitle: 'AI Learning Engine content',
      }
    },
  },
})
