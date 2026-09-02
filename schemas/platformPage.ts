import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'platformPage',
  title: 'Platform Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'aiStatement', title: 'AI Core Statement' },
    { name: 'videoDemo', title: 'Video Demo Section' },
    { name: 'learningPaths', title: 'Learning Paths' },
    { name: 'features', title: 'Features' },
    { name: 'comparison', title: 'AI vs Traditional' },
    { name: 'stats', title: 'Statistics' },
    { name: 'cta', title: 'Call to Action' },
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'heroLabel',
      title: 'Hero Label',
      type: 'string',
      initialValue: 'Learning Success Platform',
      group: 'hero',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'The Complete',
      group: 'hero',
    }),
    defineField({
      name: 'heroHighlight',
      title: 'Hero Highlighted Text',
      type: 'string',
      initialValue: 'Learning Success',
      group: 'hero',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      initialValue: 'AI-powered modular learning components that precisely address your needs. Deploy rapidly, configure seamlessly, and transform how your organization learns.',
      group: 'hero',
    }),
    
    // AI Core Statement
    defineField({
      name: 'aiStatementTitle',
      title: 'AI Statement Title',
      type: 'string',
      initialValue: 'AI Is Not An Add-On. It\'s The Core Of Our Product.',
      group: 'aiStatement',
    }),
    defineField({
      name: 'aiStatementSubtitle',
      title: 'AI Statement Subtitle',
      type: 'text',
      rows: 2,
      initialValue: 'Elevate the team\'s role from simply providing content to actively driving strategic business outcomes.',
      group: 'aiStatement',
    }),
    
    // Video Demo Section
    defineField({
      name: 'videoDemoLabel',
      title: 'Video Section Label',
      type: 'string',
      initialValue: 'See It In Action',
      group: 'videoDemo',
    }),
    defineField({
      name: 'videoDemoTitle',
      title: 'Video Section Title',
      type: 'string',
      initialValue: 'Build Intelligent Agents in Minutes',
      group: 'videoDemo',
    }),
    defineField({
      name: 'videoDemoDescription',
      title: 'Video Section Description',
      type: 'text',
      rows: 2,
      initialValue: 'Watch how our low-code agent builder empowers you to create custom AI learning agents with drag-and-drop simplicity—no programming experience required.',
      group: 'videoDemo',
    }),
    defineField({
      name: 'demoVideo',
      title: 'Demo Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      group: 'videoDemo',
    }),
    defineField({
      name: 'videoPoster',
      title: 'Video Poster Image',
      type: 'image',
      group: 'videoDemo',
    }),
    
    // Learning Paths
    defineField({
      name: 'learningPaths',
      title: 'Learning Paths',
      type: 'array',
      group: 'learningPaths',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', title: 'Title', type: 'string'},
          {name: 'description', title: 'Description', type: 'text'},
          {name: 'iconType', title: 'Icon Type', type: 'string', options: {
            list: [
              {title: 'School (Academic)', value: 'school'},
              {title: 'Building (Enterprise)', value: 'building'},
              {title: 'Bot (AI-Powered)', value: 'bot'},
            ]
          }},
          {name: 'gradientColor', title: 'Gradient Color', type: 'string', options: {
            list: [
              {title: 'Blue', value: 'blue'},
              {title: 'Orange (Primary)', value: 'primary'},
              {title: 'Purple', value: 'purple'},
            ]
          }},
          {name: 'features', title: 'Features', type: 'array', of: [{type: 'string'}]},
        ],
      }],
    }),
    
    // Features
    defineField({
      name: 'features',
      title: 'Platform Features',
      type: 'array',
      group: 'features',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', title: 'Title', type: 'string'},
          {name: 'description', title: 'Description', type: 'text'},
          {name: 'iconType', title: 'Icon Type', type: 'string', options: {
            list: [
              {title: 'Brain (AI)', value: 'brain'},
              {title: 'Users (Collaborative)', value: 'users'},
              {title: 'Shield (Security)', value: 'shield'},
              {title: 'Globe (Multi-language)', value: 'globe'},
              {title: 'Smartphone (Mobile)', value: 'smartphone'},
              {title: 'Bar Chart (Analytics)', value: 'barchart'},
              {title: 'Book (Course Library)', value: 'book'},
              {title: 'Award (Certification)', value: 'award'},
            ]
          }},
        ],
      }],
    }),
    
    // Comparison Data
    defineField({
      name: 'comparisonData',
      title: 'AI vs Traditional Comparison',
      type: 'array',
      group: 'comparison',
      of: [{
        type: 'object',
        fields: [
          {name: 'category', title: 'Category', type: 'string'},
          {name: 'traditional', title: 'Traditional Approach', type: 'text'},
          {name: 'aiPowered', title: 'AI-Powered Approach', type: 'text'},
        ],
      }],
    }),
    
    // Integrations
    defineField({
      name: 'integrations',
      title: 'Integrations',
      type: 'array',
      of: [{type: 'string'}],
      group: 'features',
    }),
    
    // Statistics
    defineField({
      name: 'statistics',
      title: 'Statistics',
      type: 'array',
      group: 'stats',
      of: [{
        type: 'object',
        fields: [
          {name: 'value', title: 'Value', type: 'string'},
          {name: 'label', title: 'Label', type: 'string'},
        ],
      }],
    }),
    
    // CTA Section
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Get Started',
      group: 'cta',
    }),
    defineField({
      name: 'ctaSectionTitle',
      title: 'CTA Section Title',
      type: 'string',
      initialValue: 'Ready to Modernize Your Learning Strategy?',
      group: 'cta',
    }),
    defineField({
      name: 'ctaSectionDescription',
      title: 'CTA Section Description',
      type: 'text',
      initialValue: 'Join hundreds of organizations that have transformed their workforce development with our AI-powered platform.',
      group: 'cta',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Platform Page',
        subtitle: 'Learning Success Platform content',
      }
    },
  },
})
