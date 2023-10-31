import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
//import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'moga-charity',
  title: 'moga charity',

  projectId: 'he2jr0to',
  dataset: 'production',
  basePath: '/sanity',

  plugins: [
    deskTool(),
    //visionTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },


})
