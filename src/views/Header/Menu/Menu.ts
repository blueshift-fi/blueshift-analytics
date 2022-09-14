import { defineComponent } from 'vue';
import { getMenuItems } from '@/app.options/menu';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';
import ExternalLink from '@/components/customComponents/ExternalLink/ExternalLink.vue';
import { EXTERNAL_LINKS } from '@/constants/EXTERNAL_LINKS';
import { useUtils } from '@/composables/useUtils';

export default defineComponent({
  name: 'Menu',

  components: {
    BaseButton,
    ExternalLink,
  },

  setup() {
    const { openExternalLink } = useUtils();
    return {
      getMenuItems,
      EXTERNAL_LINKS,
      openExternalLink
    };
  },
});
