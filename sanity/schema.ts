import { type SchemaTypeDefinition } from 'sanity'

import CaseStudy from './schemas/case-study'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [CaseStudy],
}
