import { defineComponent, PropType, ref } from 'vue';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';
import { MappedListItem } from '@/app.options/periodControllers';

export default defineComponent({
  name: 'ButtonsGroup',

  components: {
    BaseButton
  },

  props: {
    list: {
      //TODO ??
      type: Array as PropType<MappedListItem<unknown>[]>,
      required: true
    },
    value: {
      type: Object as PropType<unknown>
    },
    isLoading: {
      type: Boolean
    }
  },

  emits: ['change'],

  setup(props, { emit }) {
    const activeValue = ref(props.value);

    const changeValue = (period: MappedListItem<unknown>) => {
      activeValue.value = period;
      emit('change', period);
    };

    return {
      activeValue,
      changeValue,
    };
  }
});
