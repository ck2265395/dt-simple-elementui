import Button from './Button.vue';

//按需引入，单独提供
Button.install = (app) => {
  app.component(Button.name, Button)
}

export default Button;
