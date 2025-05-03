import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('student').title('Student'),
      S.documentTypeListItem('conductor').title('Conductor'),
      S.documentTypeListItem('route').title('Route'),
      S.documentTypeListItem('bus').title('Bus'),
      S.documentTypeListItem('booking').title('Booking'),
      S.documentTypeListItem('notification').title('Notification'),
      S.documentTypeListItem('trip').title('trip'),
    ])
