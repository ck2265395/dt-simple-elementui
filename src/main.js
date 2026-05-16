import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入样式文件
import './styles/index.scss'
import Icon from './components/Icon/Icon.vue'
import Button from './components/Button/Button.vue'
import Card from './components/Card/Card.vue'
import Dialog from './components/Dialog/Dialog.vue'
import Pager from './components/Pager/Pager.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'

// fontawesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import icons and add them to the Library */
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const app = createApp(App)

//注册fontawesome组件
app.component('font-awesome-icon', FontAwesomeIcon)

//注册自定义组件
app.component('DT-Icon', Icon)
app.component('DT-Button', Button)
app.component('DT-Card', Card)
app.component('DT-Dialog', Dialog)
app.component('DT-Pager', Pager)
app.component('DT-Collapse', Collapse)
app.component('DT-CollapseItem', CollapseItem)
app.component('DT-Tooltip', Tooltip)
app.component('DT-Dropdown', Dropdown)



app.use(router)

app.mount('#app')

