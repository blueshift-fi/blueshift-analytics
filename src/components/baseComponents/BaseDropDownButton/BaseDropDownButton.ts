import { defineComponent, ref } from 'vue';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';

export default defineComponent({
  name: 'BaseDropDownButton',
  components: { BaseButton },

  props: {
    label: {
      type: String
    },
    type: {
      type: String,
      default: 'button'
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: 'button-base'
    },
    contentClass: {
      type: String,
      default: 'ui-select-options'
    },
    to: {
      type: String
    },
    header: {
      type: String
    },
    icon: {
      type: String,
      default: 'eva-arrow-ios-downward-outline'
    }
  },

  emits: ['click'],

  setup(_, { emit, slots }) {
    const click = () => emit('click');
    const isVisible = ref(false);
    const close = () => ( isVisible.value = false );

    return {
      click,
      slots,
      close,
      isVisible,
    };
  }
});
