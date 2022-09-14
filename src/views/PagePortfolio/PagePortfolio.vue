<template v-if="portfolio">
  <div class="row q-mb-md">
    <div class="flex items-start col-xs-12 col-sm-8 q-mb-xs-md q-mb-sm-none">
      <TokenIcon class="q-mr-md" :size="32" :address-id="portfolio?.baseToken?.addressId"/>
      <div>
        <div class="h1">{{ portfolio?.name }}</div>
        <TokenGroup :tokens="portfolio.tokens"/>
      </div>
    </div>
    <div class="flex no-wrap justify-between justify-sm-end col-xs-12 col-sm-4 buttons-wrapper">
      <BaseButton label="Trade" :class-name="`button-base q-mr-sm ${$q.screen.name === 'xs' && 'full'}`"/>
      <BaseButton label="Add liquidity" :class-name="`button-primary ${$q.screen.name === 'xs' && 'full'}`"/>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-md-3">
      <q-card bordered class="bg-grey-10 info-card q-mr-md-md q-mb-md q-mb-md-none">
        <q-card-section>
          <div class="flex column">
            <q-card class="bg-cyan-14 q-mb-md">
              <q-card-section>
                <div class="text-grey-7 q-mb-sm">LP token price</div>
                <div class="value">
                  {{ getConvertedNumber({ number: portfolio?.lpTokenPrice || 359 }) }}
                  {{ portfolio?.lpToken?.symbol }}
                </div>
                <div class="text-grey-7">
                  {{ getConvertedNumber({ number: portfolio?.lpTokenPriceUSD || 359, currency: 'USD' }) }}
                </div>
              </q-card-section>
            </q-card>
            <div class="text-grey-7 q-mb-sm">TVL</div>
            <div class="value q-mb-md">
              {{ getConvertedNumber({ number: portfolio?.tvlUSD, currency: 'USD' }) }}
            </div>
            <div class="text-grey-7 q-mb-sm">Volume 24h</div>
            <div class="value q-mb-md">
              {{ getConvertedNumber({ number: portfolio?.volume24hUSD, currency: 'USD', fractionDigits: 4 }) }}
            </div>
            <div class="text-grey-7 q-mb-sm">Fees 24h</div>
            <div class="value q-mb-md">
              {{ getConvertedNumber({ number: portfolio?.fees24hUSD, currency: 'USD', fractionDigits: 4 }) }}
            </div>
            <div class="text-grey-7 q-mb-sm">Link to Explorer</div>
            <div class="q-mb-md">
              <ExternalLink label="etherscan.io" :url="`https://etherscan.io/address/${portfolio?.addressId}`" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-9">
      <PortfolioChart
        v-if="portfolio.addressId"
        :portfolioAddress="portfolio.addressId"
      />
    </div>
  </div>

  <div class="h3 q-mb-md q-mt-md">Tokens in portfolio</div>
  <TokensInPortfolioTable
    :list="portfolio?.tokens"
    :isLoading="loading"
    :base-token="portfolio?.baseToken"
  />

  <div class="h3 q-mb-md q-mt-md">Transactions</div>
  <TransactionsTable
    :list="[]"
  />
</template>

<script src="./PagePortfolio.ts" lang="ts"/>
<style src="./PagePortfolio.scss" lang="scss"/>
