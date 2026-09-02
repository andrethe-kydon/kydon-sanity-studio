import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Main headline (e.g., "The Operating System for the")',
      initialValue: 'The Operating System for the',
    }),
    defineField({
      name: 'highlightedText',
      title: 'Highlighted Text',
      type: 'string',
      description: 'Colored/highlighted part of headline',
      initialValue: 'AI-Ready Workforce',
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 3,
      description: 'Description below the headline',
      initialValue: 'The Agentic AI Learning stack that delivers skills and elevates performance outcomes for enterprises',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'Main image displayed in the hero section (optional - will show abstract visual if not set)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
      initialValue: 'Contact Us',
    }),
    defineField({
      name: 'primaryButtonLink',
      title: 'Primary Button Link',
      type: 'string',
      initialValue: '/contact',
    }),
    defineField({
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
      initialValue: 'Explore the Intelligence Stack',
    }),
    defineField({
      name: 'secondaryButtonLink',
      title: 'Secondary Button Link',
      type: 'string',
      initialValue: '/platform',
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'object',
      fields: [
        {name: 'users', title: 'Users Count', type: 'string', initialValue: '100K+'},
        {name: 'customers', title: 'Customers Count', type: 'string', initialValue: '100+'},
        {name: 'countries', title: 'Countries Count', type: 'string', initialValue: '10'},
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Hero Section',
        subtitle: 'Homepage hero content',
      }
    },
  },
})
