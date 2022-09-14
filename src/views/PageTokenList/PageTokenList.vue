<template>
  <div class="h3 q-mb-md q-mt-md">All Tokens</div>
  <TokensTable
    :list="list"
    :isLoading="loading"
  />
</template>

<script src="./PageTokenList.ts" lang="ts" />
<style src="./PageTokenList.scss" lang="scss" />
