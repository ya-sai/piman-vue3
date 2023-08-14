import { createApp } from 'vue'
import App from './App.vue'
import componentsPlugin from './components/main'

import './assets/style.scss'

const app = createApp(App)

app.use(componentsPlugin)
app.mount('#app')
