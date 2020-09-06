import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'
import ComeIndex from './components/ComeIndex.vue'
import UseFree from './components/UseFree.vue'
import IconDemo from './components/IconDemo.vue'
import LinkFontDemo from './components/LinkFontDemo.vue'
import AlertDemo from './components/AlertDemo.vue'
import ColorDemo from './components/ColorDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history, routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc, children: [
                {path: "/doc/", component: DocDemo},
                {path: '/doc/switch', component: SwitchDemo},
                {path: '/doc/button', component: ButtonDemo},
                {path: '/doc/dialog', component: DialogDemo},
                {path: '/doc/tabs', component: TabsDemo},
                {path: '/doc/comeindex',component: ComeIndex},
                {path: '/doc/usefree', component: UseFree},
                {path: '/doc/icon', component: IconDemo},
                {path: '/doc/linkfont', component: LinkFontDemo},
                {path: '/doc/alert', component: AlertDemo},
                {path: '/doc/color', component: ColorDemo}
            ]
        }
    ]
})
