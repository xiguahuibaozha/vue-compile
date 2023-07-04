import { parse, compileScript, compileTemplate, rewriteDefault, compileStyle } from 'vue/compiler-sfc'
import fs from 'fs'
import * as swc from '@swc/core'

const fileName = 'index'

const file = fs.readFileSync('./'+fileName+'.vue', 'utf8')

const { descriptor, error } = parse(file)

// const r = await swc.parse(descriptor.scriptSetup.content)
// console.log('r', r);

// 这个 id 是 scopeId，用于 css scope，保证唯一即可
const id = Date.now().toString();
const scopeId = `data-v-${id}`;

// 编译script
// 编译 script 的目的有如下几个：
// 处理 script setup 的代码， script setup 的代码是不能直接运行的，需要进行转换。
// 合并 script 和 script setup 的代码。
// 处理 CSS 变量注入
const script = compileScript(descriptor, {id: scopeId})
console.log('script', script);

// Object.values(script.imports).forEach(item => {
//     if(/\.vue$/.test(item.source)){

//     }
// })

// 编译 template
// 编译 template，目的是将 template 转成 render 函数
let template = compileTemplate({
    source: descriptor.template.content,
    filename: "main.vue",// 用于错误提示
    id: scopeId
})
// 将代码编译
// template = await swc.transform(template)

// 编译 style
// 一个 Vue 文件，可能有多个 style 标签
// sass , less 需要交给其他预处理器以及后处理器，进行处理
for (const styleBlock of descriptor.styles) {
    const styleCode = compileStyle({
        source: styleBlock.content,
        id,		// style 的 scope id，
        filename: "main.vue",
        scoped: styleBlock.scoped,
    });
}

// rewriteDefault：重写default
// 将 scriptSetup 与 render组合
const codeList = []

codeList.push(rewriteDefault(script.content, '_sfc_main_'))
codeList.push(template.code)
codeList.push('_sfc_main_.render = render')
codeList.push('export default _sfc_main_')

const code = codeList.join('\n')

fs.writeFile('./'+fileName+'.js', code, (err) => {
    console.log('err', err);
})