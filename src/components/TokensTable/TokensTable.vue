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
    <template #[getTemplateFullName(TokensTableColumnNames.NAME)]="props">
      <td class="text-wrap text-left">
        <TokenFullName
          :name="props.row.name"
          :symbol="props.row.symbol"
          :logo="props.row.logo"
          :id="props.row.id"
        />
      </td>
    </template>
  </BaseTable>
</template>

<script src="./TokensTable.ts" lang="ts" />
<style src="./TokensTable.scss" lang="scss" />
