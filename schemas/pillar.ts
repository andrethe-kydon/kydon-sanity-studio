import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pillar',
  title: 'Pillar (Intelligence Stack Layer)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Layer Label',
      type: 'string',
      description: 'e.g., "Orchestration Layer", "Delivery & Signal Layer", "Intelligence Layer"',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Layers', value: 'layers'},
          {title: 'Graduation Cap', value: 'graduation-cap'},
          {title: 'CPU', value: 'cpu'},
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      description: 'Product status badge displayed on the card',
      options: {
        list: [
          {title: 'Live', value: 'live'},
          {title: 'Coming Soon', value: 'coming-soon'},
          {title: 'Beta', value: 'beta'},
        ],
      },
      initialValue: 'live',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'URL path (e.g., /platform, /ai-university)',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of key features (bullet points)',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'label',
      status: 'status',
    },
    prepare({ title, subtitle, status }) {
      const statusLabel = status === 'coming-soon' ? ' (Coming Soon)' : status === 'beta' ? ' (Beta)' : ''
      return {
        title: `${title}${statusLabel}`,
        subtitle,
      }
    },
  },
})
