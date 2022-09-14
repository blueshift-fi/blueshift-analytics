import { defineComponent } from 'vue';
import Copyright from '@/components/Copyright/Copyright.vue';
import SocialNetworks from '@/components/SocialNetworks/SocialNetworks.vue';
import FooterMenu from '@/views/Footer/FooterMenu/FooterMenu.vue';
import InfoPanel from '@/views/Footer/InfoPanel/InfoPanel.vue';

export default defineComponent({
  name: 'Footer',

  components: {
    Copyright,
    SocialNetworks,
    FooterMenu,
    InfoPanel
  }
});
