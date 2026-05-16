import Tooltip from './Tooltip.vue';

//按需引入，单独提供
Tooltip.install = (app) => {
  app.component(Tooltip.name, Tooltip)
}

export default Tooltip;