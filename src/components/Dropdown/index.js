import Dropdown from './Dropdown.vue';
import Tooltip from '../Tooltip/Tooltip.vue';

//按需引入，单独提供
Dropdown.install = (app) => {
  app.component(Dropdown.name, Dropdown)
  app.component(Tooltip.name, Tooltip)
}

export default Dropdown;