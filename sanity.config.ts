import {visionTool} from '@sanity/vision'
import {defineConfig, isDev} from 'sanity'
import {deskTool} from 'sanity/desk'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {schemaTypes} from './schemas'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'gray-anteater',

  projectId: '1fod7t86',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
