import { defineComponent } from 'vue';
import TokenIcon from '@/components/customComponents/TokenIcon/TokenIcon.vue';
import { RouterNames } from '@/router/router.names';

export default defineComponent({
  name: 'TokenFullName',
  components: {
    TokenIcon
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    symbol: {
      type: String
    },
    addressId: {
      type: String,
      required: true
    },
    logoSize: {
      type: String
    },
    id: {
      type: Number,
      required: true
    },
    isBase: {
      type: Boolean,
    }
  },

  setup() {

    return{
      RouterNames
    };
  }
});
