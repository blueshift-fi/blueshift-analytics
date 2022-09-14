import { computed, defineComponent } from 'vue';
import Logo from '@/components/Logo/Logo.vue';
import Menu from '@/views/Header/Menu/Menu.vue';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';
import { useUtils } from '@/composables/useUtils';
import HeaderMobileMenu from '@/views/Header/HeaderMobileMenu/HeaderMobileMenu.vue';
import NetworkSelect from '@/views/Header/NetworkSelect/NetworkSelect.vue';
import { EXTERNAL_LINKS } from '@/constants/EXTERNAL_LINKS';

export default defineComponent({
  name: 'Header',

  components: {
    Logo,
    Menu,
    BaseButton,
    HeaderMobileMenu,
    NetworkSelect
  },

  setup() {
    const { openExternalLink } = useUtils();

    const baseTokenInfo = computed(() => ({ price: '0,49', symbol: 'ADA' }));

    const goToApp = () => {
      openExternalLink(EXTERNAL_LINKS.BLUESHIFT_APP);
    };

    return {
      goToApp,
      baseTokenInfo
    };
  },
});
