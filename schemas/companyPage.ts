import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'companyPage',
  title: 'Company Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Building the future of',
    }),
    defineField({
      name: 'heroHighlight',
      title: 'Hero Highlighted Text',
      type: 'string',
      initialValue: 'workforce learning',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'missionTitle',
      title: 'Mission Section Title',
      type: 'string',
      initialValue: 'Our Mission',
    }),
    defineField({
      name: 'missionDescription',
      title: 'Mission Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'visionTitle',
      title: 'Vision Section Title',
      type: 'string',
      initialValue: 'Our Vision',
    }),
    defineField({
      name: 'visionDescription',
      title: 'Vision Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'stats',
      title: 'Company Stats',
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
      name: 'teamSectionTitle',
      title: 'Team Section Title',
      type: 'string',
      initialValue: 'Leadership Team',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Company Page',
        subtitle: 'About Kydon content',
      }
    },
  },
})
