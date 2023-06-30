import { renderToString  } from 'vue/server-renderer'
import { createSSRApp, toDisplayString, createElementBlock, ref } from 'vue'
import Page from './bound.js'
import Component from './component.js'

const compositionComponent = (component) => {
    return {
        setup(props, expose){
            const context = component.setup(props, expose)
            return component.render.bind(null, context)
        }
    }
}

const app = createSSRApp(compositionComponent(Page))

app.component('Component', compositionComponent(Component))

const html = await renderToString(app)

console.log('html', html);