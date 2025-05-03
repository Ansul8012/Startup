import { type SchemaTypeDefinition } from 'sanity'
import student from './student'
import conductor from './conductor'
import bus from './bus'
import route from './route'
import notification from './notification'
import booking from './booking'
import trip from './trip'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [student,conductor,bus,route,notification,booking,trip],
}
