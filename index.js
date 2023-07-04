import { ref } from 'vue'
import Component from './component.vue'


const _sfc_main_ = {
  setup(__props, { expose: __expose }) {
  __expose();

const person = ref({
    name: '张三'
})

const btnClick = () => {
    person.name = '李四'
}

const __returned__ = { person, btnClick, ref, Component }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, createVNode as _createVNode, createTextVNode as _createTextVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = { class: "d" }

export function render(_ctx, _cache) {
  const _component_Component = _resolveComponent("Component")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createTextVNode(_toDisplayString(_ctx.person) + " ", 1 /* TEXT */),
    _createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.btnClick && _ctx.btnClick(...args)))
    }, "李四"),
    _createVNode(_component_Component)
  ]))
}
_sfc_main_.render = render
export default _sfc_main_