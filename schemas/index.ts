import insight from './insight'
import jobPosition from './jobPosition'
import contactPage from './contactPage'
import trackingSettings from './trackingSettings'
import siteSettings from './siteSettings'
import teamMember from './teamMember'
import clientLogo from './clientLogo'

export const schemaTypes = [
  // Read by the 2026 site
  insight,
  jobPosition,
  contactPage,
  trackingSettings,

  // Kept so contact details, the leadership team and client logos can be
  // reconnected to the site without building new document types
  siteSettings,
  teamMember,
  clientLogo,
]
