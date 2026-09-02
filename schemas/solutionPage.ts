import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'solutionPage',
  title: 'Solution Page',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Page Slug',
      type: 'string',
      description: 'enterprise, government, education, or partners',
      options: {
        list: [
          {title: 'Enterprise', value: 'enterprise'},
          {title: 'Government', value: 'government'},
          {title: 'Education', value: 'education'},
          {title: 'Partners', value: 'partners'},
        ]
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroLabel',
      title: 'Hero Label',
      type: 'string',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
    }),
    defineField({
      name: 'heroHighlight',
      title: 'Hero Highlighted Text',
      type: 'string',
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
      name: 'benefits',
      title: 'Key Benefits',
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
      name: 'useCases',
      title: 'Use Cases',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      title: 'slug',
    },
    prepare({title}) {
      return {
        title: `Solution: ${title || 'Untitled'}`,
        subtitle: 'Solution page content',
      }
    },
  },
})
