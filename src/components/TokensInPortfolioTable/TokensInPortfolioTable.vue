<template>
  <BaseTable
    :rows="list"
    :columns="getTokensInPortfolioColumns()"
    :is-loading="isLoading"
    :skeleton-rows="10"
    :skeleton-cols="4"
    selection="multiple"
    :selected-rows-label="() => ''"
    :visible-columns="getVisibleColumn(getTokensInPortfolioColumns())"
    hide-pagination
  >
    <template #[getTemplateFullName(TokensInPortfolioTableColumnNames.NAME)]="props">
      <td class="text-wrap text-left">
        <TokenFullName
          :name="props.row.name"
          :address-id="props.row.addressId"
          :id="props.row.id"
          :isBase="props.row.id === baseToken.id"
        />
      </td>
    </template>
  </BaseTable>
</template>

<script src="./TokensInPortfolioTable.ts" lang="ts" />
<style src="./TokensInPortfolioTable.scss" lang="scss" />
