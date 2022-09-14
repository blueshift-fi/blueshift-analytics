<template>
  <footer id="footer" class="flex">
    <div class="footer-content column q-py-xl">
      <template v-if="!$q.screen.xs">
        <div class="row no-wrap justify-between items-start q-mb-xl">
          <FooterMenu class="col"/>
          <InfoPanel  class="col q-ml-xl"/>
        </div>
        <div class="row items-center w-full q-mt-xl">
          <div class="col"></div>
          <div class="col"><Copyright /></div>
          <div class="col"><SocialNetworks /></div>
        </div>
      </template>
      <div class="flex justify-center" v-else>
        <Copyright />
      </div>
    </div>
  </footer>
</template>

<script src="./Footer.ts" lang="ts" />
<style src="./Footer.scss" lang="scss" scoped />
