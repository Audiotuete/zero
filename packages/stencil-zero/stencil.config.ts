import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { postcss } from '@stencil-community/postcss'
import autoprefixer from 'autoprefixer'

import { vueOutputTarget } from '@stencil/vue-output-target'

export const config: Config = {
  namespace: 'stencil-zero',
  devServer: {
    openBrowser: false,
  },
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    vueOutputTarget({
      componentCorePackage: 'stencil-zero',
      proxiesFile: '../vue-zero/lib/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],

  testing: {
    browserHeadless: 'new',
  },
}
