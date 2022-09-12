<template>
  <div class="h3 q-mb-md q-mt-md">Blueshift Overview</div>
  <div class="row">
    <div class="col-12 col-md-6 q-mb-sm-md q-mb-md-none">
      <Chart title="TVL" :data="data" class="q-mr-md-sm"/>
    </div>
    <div class="col-12 col-md-6">
      <Chart title="Volume 24h" :data="data" class="q-ml-md-sm"/>
    </div>
  </div>
  <div class="h3 q-mb-md q-mt-md">Top Tokens</div>
  <TokensTable
    class="title-margin"
    :list="topTokens"
    :isLoading="isLoadingTopTokens"
  />
  <div class="h3 q-mb-md q-mt-md">Top Portfolios</div>
  <PortfoliosTable
    class="title-margin"
    :list="topPortfolios"
    :isLoading="isLoadingTopPortfolios"
  />
  <div class="h3 q-mb-md q-mt-md">Top Transactions</div>
  <TransactionsTable
    :list="topTransactions"
    :isLoading="isLoadingTopTransactions"
  />
</template>

<script src="./PageMain.ts" lang="ts"/>
<style src="./PageMain.scss" lang="scss"/>
