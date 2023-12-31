import { Plugin } from "vue"
import { applyPolyfills, defineCustomElements } from "stencil-zero/loader"

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements()
    })
  },
}
