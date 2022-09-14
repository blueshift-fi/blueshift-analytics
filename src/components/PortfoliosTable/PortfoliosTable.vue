<template>
  <BaseTable
    :rows="list"
    :columns="getPortfoliosColumns()"
    :is-loading="isLoading"
    :skeleton-rows="10"
    :skeleton-cols="4"
    selection="multiple"
    :selected-rows-label="() => ''"
    :visible-columns="getVisibleColumn(getPortfoliosColumns())"
  >
    <template #[getTemplateFullName(PortfoliosTableColumnNames.NAME)]="props">
      <td class="text-wrap text-left">
        <router-link :to="{ name: RouterNames.PORTFOLIO_PAGE, params: { id: props.row.name }}">
          {{ props.row.name }}
          <TokenGroup :tokens="props.row.tokens"/>
        </router-link>
      </td>
    </template>

    <template #[getTemplateFullName(PortfoliosTableColumnNames.VOLUME)]="{ row }">
      <td class="text-wrap text-left">
        <div class="flex column">
          <div class="q-mb-xs">
            {{
              getDataForCell(
                getConvertedNumber(row.volume24hUSD ? { number: row.volume24hUSD, currency: 'USD' } : undefined)
              )
            }}
            <span class="text-grey-7">(24h)</span>
          </div>
          <div>
            {{
              getDataForCell(
                getConvertedNumber(row.volume30dUSD ? { number: row.volume30dUSD, currency: 'USD' } : undefined)
              )
            }}
            <span class="text-grey-7">(30d)</span>
          </div>
        </div>
      </td>
    </template>

    <template #[getTemplateFullName(PortfoliosTableColumnNames.LP_TOKEN_PRICE_CHANGE)]="{ row }">
      <td class="text-wrap text-left">
        <div class="flex column">
          <div class="q-mb-xs">
            {{
              getDataForCell(
                getConvertedNumber(row.lpToken?.price24hUSD ? { number: row.volume24hUSD, currency: 'USD' } : undefined)
              )
            }}
            <span class="text-grey-7">(24h)</span>
          </div>
          <div>
            {{
              getDataForCell(
                getConvertedNumber(row.lpToken?.price30dUSD? { number: row.volume30dUSD, currency: 'USD' } : undefined)
              )
            }}
            <span class="text-grey-7">(30d)</span>
          </div>
        </div>
      </td>
    </template>
  </BaseTable>
</template>

<script src="./PortfoliosTable.ts" lang="ts"/>
<style src="./PortfoliosTable.scss" lang="scss"/>
