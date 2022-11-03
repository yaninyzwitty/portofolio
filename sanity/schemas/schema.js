import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import experience from './experience'
import skill from './skill'
import pageInfo from './pageInfo'
import social from './social'
import project from './project'

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
   skill,
   pageInfo,
   experience,
   social,
   project,
  ]),
})
