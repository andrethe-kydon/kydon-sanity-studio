import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'jobPosition',
  title: 'Job Position',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Engineering', value: 'engineering' },
          { title: 'Product', value: 'product' },
          { title: 'Design', value: 'design' },
          { title: 'Sales', value: 'sales' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Operations', value: 'operations' },
          { title: 'Human Resources', value: 'hr' },
          { title: 'Finance', value: 'finance' },
          { title: 'Learning & Development', value: 'learning' },
          { title: 'Customer Success', value: 'customer-success' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., Singapore, Remote, Hybrid',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'full-time' },
          { title: 'Part-time', value: 'part-time' },
          { title: 'Contract', value: 'contract' },
          { title: 'Internship', value: 'internship' },
        ],
      },
      initialValue: 'full-time',
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'responsibilities',
      title: 'Key Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'niceToHave',
      title: 'Nice to Have',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'applyUrl',
      title: 'Application URL',
      type: 'url',
      description: 'External link to apply (e.g., LinkedIn, careers portal)',
    }),
    defineField({
      name: 'applyEmail',
      title: 'Application Email',
      type: 'string',
      description: 'Email address to send applications (used if no URL provided)',
    }),
    defineField({
      name: 'isActive',
      title: 'Active Listing',
      type: 'boolean',
      description: 'Uncheck to hide this position from the website',
      initialValue: true,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Newest First',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      department: 'department',
      location: 'location',
      isActive: 'isActive',
    },
    prepare({ title, department, location, isActive }) {
      return {
        title: `${isActive ? '' : '(Inactive) '}${title}`,
        subtitle: `${department} • ${location}`,
      }
    },
  },
})
