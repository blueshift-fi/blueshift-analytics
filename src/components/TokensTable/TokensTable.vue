<template>
  <BaseTable
    :rows="list"
    :columns="getTokensColumns()"
    :is-loading="isLoading"
    :skeleton-rows="10"
    :skeleton-cols="4"
    selection="multiple"
    :selected-rows-label="() => ''"
    :visible-columns="getVisibleColumn(getTokensColumns())"
  >
    <template #[getTemplateFullName(TokensTableColumnNames.NAME)]="{ row }">
      <td class="text-wrap text-left">
        <TokenFullName
          :name="row.name"
          :symbol="row.symbol"
          :address-id="row.addressId"
          :id="row.id"
        />
      </td>
    </template>

    <template #[getTemplateFullName(TokensTableColumnNames.PRICE_CHANGE)]="{ row }">
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

    <template #[getTemplateFullName(TokensTableColumnNames.VOLUME)]="{ row }">
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
  </BaseTable>
</template>

<script src="./TokensTable.ts" lang="ts" />
<style src="./TokensTable.scss" lang="scss" />
