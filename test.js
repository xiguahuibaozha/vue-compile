import { createSSRApp } from 'vue'
import { renderToString  } from 'vue/server-renderer'
import express from 'express'
const app = express()

// 导入你的 Vue 组件
const App = await import('./component.js')

app.get('*', async (req, res) => {
  const app = createSSRApp(App)
  const appContent = await renderToString(app)

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Vue 3 SSR</title>
      </head>
      <body>
        ${appContent}
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/')
})