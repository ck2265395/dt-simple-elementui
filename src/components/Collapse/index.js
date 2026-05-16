import Collapse from './Collapse.vue';
import CollapseItem from './CollapseItem.vue';

//按需引入，单独提供
Collapse.install = (app) => {
  app.component(Collapse.name, Collapse)
  app.component(CollapseItem.name, CollapseItem)
}

export default Collapse;