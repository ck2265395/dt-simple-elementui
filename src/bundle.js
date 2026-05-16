// 打包入口文件
// fontawesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import icons and add them to the Library */
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

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

const componentArr = [Icon, Button, Card, Dialog, Pager, Collapse, CollapseItem, Tooltip, Dropdown]

// 注册自定义组件
const install = (app) => {
  componentArr.forEach((component) => {
    app.component(component.name, component)
  })
  // 注册font-awesome-icon组件 第三方的需要单独注册
  app.component('font-awesome-icon', FontAwesomeIcon)
  
}

// 按需导出
export { install, Icon, Button, Card, Dialog, Pager, Collapse, CollapseItem, Tooltip, Dropdown }

// 全部导出
export default {
  install
}