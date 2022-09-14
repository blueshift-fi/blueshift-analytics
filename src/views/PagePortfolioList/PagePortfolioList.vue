<template>
  <div class="h3 q-mb-md q-mt-md">All Portfolios</div>
  <PortfoliosTable
    :list="list"
    :isLoading="loading"
  />
</template>

<script src="./PagePortfolioList.ts" lang="ts" />
<style src="./PagePortfolioList.scss" lang="scss" />
