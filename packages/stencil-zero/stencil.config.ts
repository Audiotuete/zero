import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'stencil-zero',
  globalStyle: 'src/global/global.css',
  devServer: {
    openBrowser: false,
  },
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
};
