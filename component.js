import { ref } from 'vue'


const _sfc_main_ = {
  setup(__props, { expose: __expose }) {
  __expose();

const name = ref('comp')

const __returned__ = { name, ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", null, "components: " + _toDisplayString(_ctx.name), 1 /* TEXT */))
}
_sfc_main_.render = render
export default _sfc_main_