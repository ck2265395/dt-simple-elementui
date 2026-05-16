import Dialog from './Dialog.vue';

//按需引入，单独提供
Dialog.install = (app) => {
  app.component(Dialog.name, Dialog)
}

export default Dialog;