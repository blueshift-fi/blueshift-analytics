import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'TokenIcon',
  props: {
    size: {
      type: [String, Number],
      default: '',
    },
    addressId: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const imgSize = props.size ? `${props.size}px` : '24px';

    const source = computed(() => {
      return `/images/tokens/${props.addressId.toLowerCase()}.svg`;
    });

    const onErrorLoad = (e: any) => {
      e.target.src = '/images/tokens/no-icon.svg';
    };

    return {
      source,
      onErrorLoad,
      imgSize,
    };
  },
});
