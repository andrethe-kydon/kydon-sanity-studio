import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'trackingSettings',
  title: 'Tracking & Analytics',
  type: 'document',
  groups: [
    {name: 'gtm', title: 'Google Tag Manager'},
    {name: 'ga', title: 'Google Analytics'},
    {name: 'facebook', title: 'Facebook / Meta Pixel'},
    {name: 'custom', title: 'Custom Scripts'},
  ],
  fields: [
    // Google Tag Manager
    defineField({
      name: 'gtmEnabled',
      title: 'Enable Google Tag Manager',
      type: 'boolean',
      initialValue: false,
      group: 'gtm',
    }),
    defineField({
      name: 'gtmId',
      title: 'GTM Container ID',
      type: 'string',
      description: 'Your Google Tag Manager container ID (e.g., GTM-XXXXXXX)',
      group: 'gtm',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const doc = context?.document as Record<string, unknown> | undefined
          if (doc?.gtmEnabled && !value) {
            return 'GTM ID is required when GTM is enabled'
          }
          if (value && !/^GTM-[A-Z0-9]+$/.test(value)) {
            return 'Please enter a valid GTM ID (e.g., GTM-XXXXXXX)'
          }
          return true
        }),
    }),

    // Google Analytics
    defineField({
      name: 'gaEnabled',
      title: 'Enable Google Analytics',
      type: 'boolean',
      initialValue: false,
      group: 'ga',
    }),
    defineField({
      name: 'gaMeasurementId',
      title: 'GA4 Measurement ID',
      type: 'string',
      description: 'Your Google Analytics 4 Measurement ID (e.g., G-XXXXXXXXXX)',
      group: 'ga',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const doc = context?.document as Record<string, unknown> | undefined
          if (doc?.gaEnabled && !value) {
            return 'Measurement ID is required when GA is enabled'
          }
          if (value && !/^G-[A-Z0-9]+$/.test(value)) {
            return 'Please enter a valid GA4 Measurement ID (e.g., G-XXXXXXXXXX)'
          }
          return true
        }),
    }),

    // Facebook / Meta Pixel
    defineField({
      name: 'fbPixelEnabled',
      title: 'Enable Facebook / Meta Pixel',
      type: 'boolean',
      initialValue: false,
      group: 'facebook',
    }),
    defineField({
      name: 'fbPixelId',
      title: 'Facebook Pixel ID',
      type: 'string',
      description: 'Your Facebook / Meta Pixel ID (numeric, e.g., 1234567890)',
      group: 'facebook',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const doc = context?.document as Record<string, unknown> | undefined
          if (doc?.fbPixelEnabled && !value) {
            return 'Pixel ID is required when Facebook Pixel is enabled'
          }
          if (value && !/^\d+$/.test(value)) {
            return 'Please enter a valid Facebook Pixel ID (numbers only)'
          }
          return true
        }),
    }),

    // Custom Head Scripts
    defineField({
      name: 'customHeadScripts',
      title: 'Custom Head Scripts',
      type: 'text',
      rows: 10,
      description: 'Any additional tracking or analytics scripts to inject in the <head> section. Paste the full <script> tag(s) here.',
      group: 'custom',
    }),

    // Custom Body Scripts
    defineField({
      name: 'customBodyScripts',
      title: 'Custom Body Scripts (after <body>)',
      type: 'text',
      rows: 10,
      description: 'Any additional scripts to inject right after the opening <body> tag (e.g., GTM noscript fallback). Paste the full code here.',
      group: 'custom',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Tracking & Analytics',
        subtitle: 'GTM, Google Analytics, Facebook Pixel',
      }
    },
  },
})
