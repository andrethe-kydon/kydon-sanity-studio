import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'aiUniversityPage',
  title: 'AI University Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroLabel',
      title: 'Hero Label',
      type: 'string',
      initialValue: 'Delivery & Signal Layer',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Role-based reskilling for the',
    }),
    defineField({
      name: 'heroHighlight',
      title: 'Hero Highlighted Text',
      type: 'string',
      initialValue: 'AI economy',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
      initialValue: 'Talk to Us',
    }),
    defineField({
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
      initialValue: 'Explore Tracks',
    }),
    defineField({
      name: 'tracksSectionTitle',
      title: 'Tracks Section Title',
      type: 'string',
      initialValue: 'AI Tracks for Every Role',
    }),
    defineField({
      name: 'tracksSectionDescription',
      title: 'Tracks Section Description',
      type: 'text',
    }),
    defineField({
      name: 'tracks',
      title: 'AI Tracks',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', title: 'Title', type: 'string'},
          {name: 'description', title: 'Description', type: 'string'},
          {name: 'icon', title: 'Icon', type: 'string', options: {
            list: [
              {title: 'Dollar Sign (Sales)', value: 'dollar-sign'},
              {title: 'Headphones (CX)', value: 'headphones'},
              {title: 'Code (Developers)', value: 'code'},
              {title: 'Settings (Operations)', value: 'settings'},
              {title: 'Crown (Leaders)', value: 'crown'},
              {title: 'Book (Teachers)', value: 'book'},
            ]
          }},
          {name: 'color', title: 'Color Gradient', type: 'string', options: {
            list: [
              {title: 'Green', value: 'from-green-500 to-emerald-600'},
              {title: 'Blue', value: 'from-blue-500 to-cyan-600'},
              {title: 'Purple', value: 'from-purple-500 to-violet-600'},
              {title: 'Orange', value: 'from-orange-500 to-amber-600'},
              {title: 'Primary', value: 'from-primary to-primary-dark'},
              {title: 'Pink', value: 'from-pink-500 to-rose-600'},
            ]
          }},
        ],
      }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'AI University Page',
        subtitle: 'AI University content',
      }
    },
  },
})
