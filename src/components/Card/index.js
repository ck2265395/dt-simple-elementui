import Card from './Card.vue';

//按需引入，单独提供
Card.install = (app) => {
  app.component(Card.name, Card)
}

export default Card;