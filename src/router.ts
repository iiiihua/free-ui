import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import IconDemo from './components/IconDemo.vue';
import LinkFontDemo from './components/LinkFontDemo.vue';
import AlertDemo from './components/AlertDemo.vue';
import ColorDemo from './components/ColorDemo.vue';
import {h} from 'vue';
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'

const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
    history: history, routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc, children: [
                {path: '/doc/', redirect: '/doc/intro'},
                {path: '/doc/intro', component: md(intro)},
                {path: '/doc/get-started', component: md(getStarted)},
                {path: '/doc/install', component: md(install)},
                {path: '/doc/switch', component: SwitchDemo},
                {path: '/doc/button', component: ButtonDemo},
                {path: '/doc/dialog', component: DialogDemo},
                {path: '/doc/tabs', component: TabsDemo},
                {path: '/doc/icon', component: IconDemo},
                {path: '/doc/linkfont', component: LinkFontDemo},
                {path: '/doc/alert', component: AlertDemo},
                {path: '/doc/color', component: ColorDemo}
            ]
        }
    ]
});
