import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'
import 'amfe-flexible'
//初始化样式
//import './common/stylus/index.styl'
Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/css/border.css'

import http from '@/utils/http'

Vue.prototype.$http = http;
Vue.use(utils)


import {
    Tabbar, TabbarItem, NavBar, Tab, Tabs, Grid, GridItem, Divider, DropdownMenu, Toast,
    DropdownItem, Switch, Button, List, Cell, CellGroup, PullRefresh, Row, Col, Field, ActionSheet, Icon, Image
} from "vant";
import 'vant/lib/index.css'

Vue.use(Tabbar).use(TabbarItem).use(NavBar).use(Tab).use(Tabs).use(Grid).use(GridItem).use(Divider).use(DropdownMenu)
    .use(DropdownItem).use(Switch).use(Button).use(List).use(Cell).use(CellGroup).use(PullRefresh).use(Row).use(Col)
    .use(Field).use(ActionSheet).use(Icon).use(Image).use(Toast);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
