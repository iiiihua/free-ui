import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'
const history = createWebHashHistory()
export const router = createRouter({history: history, routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc, children: [
                {path: "/doc/", component: DocDemo},
                {path: '/doc/switch' , component: SwitchDemo},
                {path: '/doc/button' , component: ButtonDemo},
                {path: '/doc/dialog' , component: DialogDemo},
                {path: '/doc/tabs' , component: TabsDemo}
            ]}
    ]})
