<template>
  <BaseTable
    :rows="list"
    :columns="getTransactionsColumns()"
    :is-loading="isLoading"
    :skeleton-rows="10"
    :skeleton-cols="4"
    selection="multiple"
    :selected-rows-label="() => ''"
    :visible-columns="getVisibleColumn(getTransactionsColumns())"
  >
  </BaseTable>
</template>

<script src="./TransactionsTable.ts" lang="ts" />
<style src="./TransactionsTable.scss" lang="scss" />
