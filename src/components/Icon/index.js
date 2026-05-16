import Icon from './Icon.vue';

//按需引入，单独提供
Icon.install = (app) => {
  app.component(Icon.name, Icon)
}

export default Icon;