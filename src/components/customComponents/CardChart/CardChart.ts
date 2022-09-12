import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useLayout } from '@/composables/useLayout';
import IconControl from '@/components/customComponents/IconControl/IconControl.vue';

export default defineComponent({
  name: 'CardChart',

  components: { IconControl },

  props: {
    hasTypeController: {
      type: Boolean,
      default: true
    },
    notScalable: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const expanded = ref();
    const $q = useQuasar();
    const { setChartViewDif } = useLayout();
    const toggleView = () => {
      expanded.value = !expanded.value;
      setChartViewDif();
    };
    const modeView = () => {
      if ($q.screen.lt.md || props.notScalable) {
        return 'card-expanded col-12';
      }
      return expanded.value ? 'card-expanded col-12 order-first' : 'card-collapsed col-12';
    };

    return {
      expanded,
      toggleView,
      modeView,
    };
  },
});
