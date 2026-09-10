import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'aiWorkforceFactoryPage',
  title: 'AI Workforce Factory Page',
  type: 'document',

  // Groups are a deliberate departure from the other page schemas — this page has
  // ~40 fields versus aiUniversityPage's 9, and a flat list that long is painful
  // to edit. Groups render as tabs across the top of the document in the Studio.
  groups: [
    {name: 'hero', title: 'Hero', default: true},
    {name: 'stats', title: 'Stats'},
    {name: 'why', title: 'Why'},
    {name: 'pipeline', title: 'Pipeline'},
    {name: 'vision', title: 'National Vision'},
    {name: 'ecosystem', title: 'Ecosystem'},
    {name: 'voices', title: 'Voices'},
    {name: 'audiences', title: 'Audiences'},
    {name: 'cta', title: 'Final CTA'},
  ],

  fields: [
    // ─────────────────────────────────────────── HERO
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      group: 'hero',
      initialValue: "Kydon Group · A National AI Workforce Initiative",
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
      initialValue: "Building the workforce Singapore's AI economy actually needs.",
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 4,
      group: 'hero',
    }),
    defineField({
      name: 'heroPrimaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
      group: 'hero',
      initialValue: 'Explore the training programme',
    }),
    defineField({
      name: 'heroPrimaryButtonLink',
      title: 'Primary Button Link',
      type: 'string',
      group: 'hero',
      initialValue: 'https://www.futureedgeinstitute.com/',
      description: 'External URLs open in a new tab. Internal paths start with / (e.g. /contact).',
    }),
    defineField({
      name: 'heroSecondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
      group: 'hero',
      initialValue: 'Partner with us',
    }),
    defineField({
      name: 'heroSecondaryButtonLink',
      title: 'Secondary Button Link',
      type: 'string',
      group: 'hero',
      initialValue: '/contact',
    }),
    defineField({
      name: 'heroIllustration',
      title: 'Hero Illustration',
      type: 'image',
      group: 'hero',
      options: {hotspot: true},
      description: 'Suggested 1200 × 1400px.',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for screen readers and SEO.',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),

    // ─────────────────────────────────────────── STATS
    defineField({
      name: 'stats',
      title: 'Stat Strip',
      type: 'array',
      group: 'stats',
      description: 'Three stats display best. Every figure must be verifiable against a primary source.',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'value', title: 'Value', type: 'string', description: 'e.g. "100,000" or "S$1B+"'},
            {name: 'description', title: 'Description', type: 'text', rows: 3},
            {name: 'source', title: 'Source (internal note)', type: 'string', description: 'Not shown on the site. Record where this figure came from.'},
          ],
          preview: {
            select: {title: 'value', subtitle: 'description'},
          },
        },
      ],
    }),

    // ─────────────────────────────────────────── WHY
    defineField({
      name: 'whyEyebrow',
      title: 'Eyebrow',
      type: 'string',
      group: 'why',
      initialValue: 'Why we built this',
    }),
    defineField({
      name: 'whyHeading',
      title: 'Heading',
      type: 'string',
      group: 'why',
      initialValue: "There's no shortage of AI. There's a shortage of people who can run it.",
    }),
    defineField({
      name: 'whyIntro',
      title: 'Intro Paragraph',
      type: 'text',
      rows: 3,
      group: 'why',
    }),
    defineField({
      name: 'whyCards',
      title: 'Gap Cards',
      type: 'array',
      group: 'why',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text', rows: 3},
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Message (AI talk)', value: 'message-square'},
                  {title: 'Circle Slash (priced out)', value: 'circle-slash'},
                  {title: 'Building (no bridge)', value: 'building-2'},
                  {title: 'Users (people)', value: 'users'},
                  {title: 'Target (gap)', value: 'target'},
                ],
              },
            },
          ],
          preview: {select: {title: 'title', subtitle: 'description'}},
        },
      ],
    }),
    defineField({
      name: 'whyClosingLine',
      title: 'Closing Line',
      type: 'text',
      rows: 2,
      group: 'why',
    }),

    // ─────────────────────────────────────────── PIPELINE
    defineField({
      name: 'pipelineEyebrow',
      title: 'Eyebrow',
      type: 'string',
      group: 'pipeline',
      initialValue: "What we're building",
    }),
    defineField({
      name: 'pipelineHeading',
      title: 'Heading',
      type: 'string',
      group: 'pipeline',
      initialValue: 'One pipeline: train, deploy, hire.',
    }),
    defineField({
      name: 'pipelineSteps',
      title: 'Pipeline Steps',
      type: 'array',
      group: 'pipeline',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'number', title: 'Step Number', type: 'string', description: 'e.g. "01"'},
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text', rows: 4},
            {
              name: 'illustration',
              title: 'Illustration',
              type: 'image',
              options: {hotspot: true},
              fields: [
                {name: 'alt', title: 'Alt Text', type: 'string', validation: (Rule: any) => Rule.required()},
              ],
            },
          ],
          preview: {select: {title: 'title', subtitle: 'number', media: 'illustration'}},
        },
      ],
    }),

    // ─────────────────────────────────────────── NATIONAL VISION
    defineField({
      name: 'visionEyebrow',
      title: 'Eyebrow',
      type: 'string',
      group: 'vision',
      initialValue: 'A national ambition',
    }),
    defineField({
      name: 'visionQuote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      group: 'vision',
    }),
    defineField({
      name: 'visionAttribution',
      title: 'Attribution',
      type: 'string',
      group: 'vision',
      description: 'e.g. "Prime Minister Lawrence Wong · Budget 2026 debate wrap-up speech, 26 Feb 2026"',
    }),
    defineField({
      name: 'visionApproved',
      title: 'Cleared for publication',
      type: 'boolean',
      group: 'vision',
      initialValue: false,
      description:
        'Leave OFF until the quote has been verified against the official transcript and its use cleared. The section will not render while this is off.',
    }),

    // ─────────────────────────────────────────── ECOSYSTEM
    defineField({
      name: 'ecosystemEyebrow',
      title: 'Eyebrow',
      type: 'string',
      group: 'ecosystem',
      initialValue: "Built with Singapore's ecosystem",
    }),
    defineField({
      name: 'ecosystemHeading',
      title: 'Heading',
      type: 'string',
      group: 'ecosystem',
      initialValue: "Not something we're doing alone.",
    }),
    defineField({
      name: 'ecosystemBody',
      title: 'Body Paragraph',
      type: 'text',
      rows: 3,
      group: 'ecosystem',
    }),
    defineField({
      name: 'ecosystemPartners',
      title: 'Ecosystem Partners',
      type: 'array',
      group: 'ecosystem',
      description:
        'Add as many as needed — drag to reorder. Do not switch a partner on until written brand permission has been received.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Organisation Name',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {hotspot: true},
              description: 'SVG or transparent PNG, roughly 300px wide.',
              fields: [{name: 'alt', title: 'Alt Text', type: 'string'}],
            },
            {name: 'url', title: 'Website (optional)', type: 'url'},
            {
              name: 'approved',
              title: 'Permission received',
              type: 'boolean',
              initialValue: false,
              description: 'The logo will not appear on the site while this is off.',
            },
          ],
          preview: {
            select: {title: 'name', media: 'logo', approved: 'approved'},
            prepare({title, media, approved}: any) {
              return {
                title,
                subtitle: approved ? 'Approved' : 'Not approved — hidden',
                media,
              }
            },
          },
        },
      ],
    }),

    // ─────────────────────────────────────────── VOICES
    defineField({
      name: 'voicesEyebrow',
      title: 'Eyebrow',
      type: 'string',
      group: 'voices',
      initialValue: 'In their words',
    }),
    defineField({
      name: 'voicesHeading',
      title: 'Heading',
      type: 'string',
      group: 'voices',
      initialValue: 'Why the people building this believe in it.',
    }),
    defineField({
      name: 'voicesQuotes',
      title: 'Testimonials',
      type: 'array',
      group: 'voices',
      description:
        'Add as many as needed — drag to reorder. An attributed quote must not be switched on without that person or organisation approving the exact wording.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'quote',
              title: 'Quote',
              type: 'text',
              rows: 6,
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'role',
              title: 'Role & Organisation',
              type: 'string',
              description: 'e.g. "Founder & CEO, Kydon Group"',
            },
            {
              name: 'photo',
              title: 'Photo',
              type: 'image',
              options: {hotspot: true},
              description: 'Square, roughly 400 × 400px. Displays as a circle.',
              fields: [{name: 'alt', title: 'Alt Text', type: 'string'}],
            },
            {
              name: 'approved',
              title: 'Cleared for publication',
              type: 'boolean',
              initialValue: false,
              description: 'The testimonial will not appear on the site while this is off.',
            },
          ],
          preview: {
            select: {title: 'name', subtitle: 'role', media: 'photo', approved: 'approved'},
            prepare({title, subtitle, media, approved}: any) {
              return {
                title,
                subtitle: approved ? subtitle : `${subtitle || ''} — NOT APPROVED, hidden`,
                media,
              }
            },
          },
        },
      ],
    }),

    // ─────────────────────────────────────────── AUDIENCES
    defineField({
      name: 'audiencesEyebrow',
      title: 'Eyebrow',
      type: 'string',
      group: 'audiences',
      initialValue: "Who it's for",
    }),
    defineField({
      name: 'audiencesHeading',
      title: 'Heading',
      type: 'string',
      group: 'audiences',
      initialValue: 'Three groups, one factory.',
    }),
    defineField({
      name: 'audienceCards',
      title: 'Audience Cards',
      type: 'array',
      group: 'audiences',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text', rows: 4},
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'User (talent)', value: 'user'},
                  {title: 'Building (SMEs & enterprises)', value: 'building'},
                  {title: 'Landmark (government & partners)', value: 'landmark'},
                  {title: 'Users (groups)', value: 'users'},
                  {title: 'Handshake (partnership)', value: 'handshake'},
                ],
              },
            },
            {name: 'linkLabel', title: 'Link Label', type: 'string'},
            {
              name: 'linkUrl',
              title: 'Link URL',
              type: 'string',
              description: 'External URLs open in a new tab. Internal paths start with /.',
            },
          ],
          preview: {select: {title: 'title', subtitle: 'description'}},
        },
      ],
    }),

    // ─────────────────────────────────────────── FINAL CTA
    defineField({
      name: 'ctaHeading',
      title: 'Heading',
      type: 'string',
      group: 'cta',
      initialValue: "The factory is open. Let's put it to work.",
    }),
    defineField({
      name: 'ctaPrimaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
      group: 'cta',
      initialValue: 'Explore training at FEI',
    }),
    defineField({
      name: 'ctaPrimaryButtonLink',
      title: 'Primary Button Link',
      type: 'string',
      group: 'cta',
      initialValue: 'https://www.futureedgeinstitute.com/',
    }),
    defineField({
      name: 'ctaSecondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
      group: 'cta',
      initialValue: 'Talk to us',
    }),
    defineField({
      name: 'ctaSecondaryButtonLink',
      title: 'Secondary Button Link',
      type: 'string',
      group: 'cta',
      initialValue: '/contact',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'AI Workforce Factory Page',
        subtitle: 'AI Workforce Factory content',
      }
    },
  },
})
