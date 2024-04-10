import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'
import ShowStat from './components/ShowStat.vue'
import Form from './components/Form.vue'
import About from './components/About.vue'
import Play from './components/Music.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[{path:'/about', name: 'about', component:About},
        {path: '/', name:'form', component:Form}
    ]
        
    
})


const app = createApp(App)
app.component('showstate', ShowStat)
//app.component('inputform', Form)
app.component('playmusic', Play)
app.use(router)
app.mount('#app')
