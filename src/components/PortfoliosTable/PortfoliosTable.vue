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
          <TokenGroup :tokens="__mock" />
        </router-link>
      </td>
    </template>
    <template #[getTemplateFullName(PortfoliosTableColumnNames.VOLUME)]="props">
      <td class="text-wrap text-left">
        {{ getDataForCell(props.row.volumeUSD) }} <span class="text-grey-7">(24h)</span>
      </td>
    </template>
  </BaseTable>
</template>

<script src="./PortfoliosTable.ts" lang="ts" />
<style src="./PortfoliosTable.scss" lang="scss" />
