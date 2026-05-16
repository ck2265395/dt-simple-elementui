import Pager from './Pager.vue';

//按需引入，单独提供
Pager.install = (app) => {
  app.component(Pager.name, Pager)
}

export default Pager;