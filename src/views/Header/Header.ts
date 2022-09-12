import { computed, defineComponent } from 'vue';
import Logo from '@/components/Logo/Logo.vue';
import BaseDropDownButton from '@/components/baseComponents/BaseDropDownButton/BaseDropDownButton.vue';
import { mappedSupportedNetworks, NetworkInfo } from '@/app.options/networks';
import { useStore } from '@/store';
import { RootGettersType } from '@/store/names/getters.names';
import { RootMutationsType } from '@/store/names/mutations.names';
import Menu from '@/views/Header/Menu/Menu.vue';

export default defineComponent({
  name: 'Header',

  components: {
    Logo,
    BaseDropDownButton,
    Menu,
  },

  setup() {
    const { getters, commit } = useStore();

    const activeNetwork = computed(() => <NetworkInfo>getters[RootGettersType.GET_ACTIVE_NETWORK]);

    const changeActiveNetwork = (network: NetworkInfo) => {
      commit(RootMutationsType.SET_ACTIVE_NETWORK, network);
    };

    return {
      changeActiveNetwork,
      activeNetwork,
      mappedSupportedNetworks
    };
  }
});
