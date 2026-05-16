import { defineComponent } from "vue";
export default defineComponent({
  props: {
    vnode: {
      type: [String, Object],
      required: true,
    }
  },
  setup(props) {
    return () => {
      return props.vnode;
    };
  }
});