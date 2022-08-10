import { createApp } from 'vue'
//import App from './App.vue'
//import indexVue from './components/indexVue.vue'
//import HelloWorld from './components/HelloWorld.vue'
//import graph from './components/graphVue.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ELIcons from '@element-plus/icons-vue'
//import HelloWorld from "@/components/HelloWorld";

//import router from "@/router";


import App from './App.vue'
import router from './router'









const app=createApp(App)
// 全局导入plus图标
for (let iconName in ELIcons) {
    app.component(iconName, ELIcons[iconName])
}


app.use(router).use(ElementPlus).mount('#app')

