<template>
  <Updater>
    <div class="content-wrapper">
      <Header/>
      <div class="content">
        <router-view/>
      </div>
      <Footer/>
    </div>
  </Updater>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/views/Header/Header.vue';
import Footer from '@/views/Footer/Footer.vue';
import { useQuasar } from 'quasar';
import Updater from '@/components/Updater/Updater.vue';

export default defineComponent({
  name: 'App',

  components: {
    Footer,
    Header,
    Updater,
  },

  setup() {
    const $q = useQuasar();
    // $q.screen.setSizes({ sm: 767, md: 1000, lg: 1599, xl: 1919 });

    return {
      $q
    };
  },
});
</script>

<style lang="scss"></style>
