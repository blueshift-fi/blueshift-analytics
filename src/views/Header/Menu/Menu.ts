import { defineComponent } from 'vue';
import { getMenuItems } from '@/app.options/menu';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';


export default defineComponent({
  name: 'Menu',

  components: {
    BaseButton
  },

  setup() {


    return {
      getMenuItems
    };
  }
});
