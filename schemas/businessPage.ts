import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'businessPage',
  title: 'Business Unit Page',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Page Slug',
      type: 'string',
      description: 'kydon-learning-systems, zillearn, or zillearn-bina-riya',
      options: {
        list: [
          {title: 'Kydon Learning Systems', value: 'kydon-learning-systems'},
          {title: 'ZilLearn', value: 'zillearn'},
          {title: 'ZilLearn Bina Riya', value: 'zillearn-bina-riya'},
        ]
      },
      validation: (Rule) => Rule.required(),
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
      name: 'aboutTitle',
      title: 'About Section Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutDescription',
      title: 'About Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'services',
      title: 'Services/Offerings',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', title: 'Title', type: 'string'},
          {name: 'description', title: 'Description', type: 'text'},
        ],
      }],
    }),
  ],
  preview: {
    select: {
      title: 'slug',
    },
    prepare({title}) {
      return {
        title: `Business: ${title || 'Untitled'}`,
        subtitle: 'Business unit page content',
      }
    },
  },
})
