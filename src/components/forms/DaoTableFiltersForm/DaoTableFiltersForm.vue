<!--<template>-->
<!--  <BaseForm-->
<!--    :handleSubmit="submitForm"-->
<!--    class-name="dao-table-filter-form q-col-gutter-sm wrap flex-sm-nowrap row"-->
<!--    id="filter-form"-->
<!--  >-->
<!--    <div class="col-6 col-sm-auto">-->
<!--      <BaseDropDownMenu-->
<!--        :disabled="isLoadingDaoList || isLoadingDic"-->
<!--        label="filter"-->
<!--        icon="eva-funnel-outline"-->
<!--        header="Filter"-->
<!--        class="w-full"-->
<!--      >-->
<!--        <div-->
<!--          class="q-px-3 q-pb-2 caption text-gradient self-end q-pt-none cursor-pointer  "-->
<!--          @click="resetFilters()"-->
<!--        >-->
<!--          Reset all-->
<!--        </div>-->
<!--        <div class="form-area">-->
<!--          <div-->
<!--            class="dd-menu-list-item"-->
<!--            :class="{ active: values[FilterFormFields.IS_VISIBLE_STATUS] }"-->
<!--          >-->
<!--            <BaseCheckbox-->
<!--              :name="FilterFormFields.IS_VISIBLE_STATUS"-->
<!--              :label="getFilterFieldOptions(FilterFormFields.IS_VISIBLE_STATUS).label"-->
<!--              :value="true"-->
<!--            />-->
<!--          </div>-->
<!--          <div-->
<!--            class="dd-menu-list-item-collapse"-->
<!--            v-if="values[FilterFormFields.IS_VISIBLE_STATUS]"-->
<!--          >-->
<!--            <BaseSelect-->
<!--              :name="FilterFormFields.STATUS"-->
<!--              :label="getFilterFieldOptions(FilterFormFields.STATUS).placeholder"-->
<!--              :options="[-->
<!--              { label: 'active', value: true },-->
<!--              { label: 'inactive', value: false },-->
<!--            ]"-->
<!--              emit-value-->
<!--            />-->
<!--          </div>-->
<!--          <div-->
<!--            class="dd-menu-list-item"-->
<!--            :class="{ active: values[FilterFormFields.IS_VISIBLE_BLOCKCHAIN] }"-->
<!--          >-->
<!--            <BaseCheckbox-->
<!--              :name="FilterFormFields.IS_VISIBLE_BLOCKCHAIN"-->
<!--              :label="getFilterFieldOptions(FilterFormFields.IS_VISIBLE_BLOCKCHAIN).label"-->
<!--              :value="true"-->
<!--            />-->
<!--          </div>-->
<!--          <div-->
<!--            class="dd-menu-list-item-collapse"-->
<!--            v-if="values[FilterFormFields.IS_VISIBLE_BLOCKCHAIN]"-->
<!--          >-->
<!--            <BaseSelect-->
<!--              :name="FilterFormFields.BLOCKCHAIN"-->
<!--              :label="getFilterFieldOptions(FilterFormFields.IS_VISIBLE_BLOCKCHAIN).label"-->
<!--              :options="blockchainOptions.cryptoPlatformTypeList?.map(item => item.typeName)"-->
<!--              multiple-->
<!--              use-chips-->
<!--            />-->
<!--            &lt;!&ndash;    TODO пока нет данных не работает &ndash;&gt;-->
<!--            &lt;!&ndash;    <BaseSelect&ndash;&gt;-->
<!--            &lt;!&ndash;      :name="FilterFormFields.TECHNOLOGY"&ndash;&gt;-->
<!--            &lt;!&ndash;      label="tech"&ndash;&gt;-->
<!--            &lt;!&ndash;      :app.options="['tech1', 'tech2', 'tech3', 'tech4']"&ndash;&gt;-->
<!--            &lt;!&ndash;    />&ndash;&gt;-->
<!--          </div>-->
<!--          &lt;!&ndash;        <div&ndash;&gt;-->
<!--          &lt;!&ndash;          class="dd-menu-list-item"&ndash;&gt;-->
<!--          &lt;!&ndash;          :class="{ active: values[FilterFormFields.IS_VISIBLE_PLATFORM] }"&ndash;&gt;-->
<!--          &lt;!&ndash;        >&ndash;&gt;-->
<!--          &lt;!&ndash;          <BaseCheckbox&ndash;&gt;-->
<!--          &lt;!&ndash;            :name="FilterFormFields.IS_VISIBLE_PLATFORM"&ndash;&gt;-->
<!--          &lt;!&ndash;            :label="getFilterFieldOptions(FilterFormFields.IS_VISIBLE_PLATFORM).label"&ndash;&gt;-->
<!--          &lt;!&ndash;            :value="true"&ndash;&gt;-->
<!--          &lt;!&ndash;          />&ndash;&gt;-->
<!--          &lt;!&ndash;        </div>&ndash;&gt;-->
<!--          &lt;!&ndash;        <div&ndash;&gt;-->
<!--          &lt;!&ndash;          class="dd-menu-list-item-collapse"&ndash;&gt;-->
<!--          &lt;!&ndash;          v-if="values[FilterFormFields.IS_VISIBLE_PLATFORM]"&ndash;&gt;-->
<!--          &lt;!&ndash;        >&ndash;&gt;-->
<!--          &lt;!&ndash;          <BaseSelect&ndash;&gt;-->
<!--          &lt;!&ndash;            :name="FilterFormFields.PLATFORM"&ndash;&gt;-->
<!--          &lt;!&ndash;            :label="getFilterFieldOptions(FilterFormFields.PLATFORM).placeholder"&ndash;&gt;-->
<!--          &lt;!&ndash;            :app.options="['pl1', 'pl2', 'pl3', 'pl4']"&ndash;&gt;-->
<!--          &lt;!&ndash;          />&ndash;&gt;-->
<!--          &lt;!&ndash;        </div>&ndash;&gt;-->
<!--          <div-->
<!--            class="dd-menu-list-item"-->
<!--            :class="{ active: values[FilterFormFields.IS_VISIBLE_TOKEN_HOLDERS] }"-->
<!--          >-->
<!--            <BaseCheckbox-->
<!--              :name="FilterFormFields.IS_VISIBLE_TOKEN_HOLDERS"-->
<!--              :label="getFilterFieldOptions(FilterFormFields.IS_VISIBLE_TOKEN_HOLDERS).label"-->
<!--              :value="true"-->
<!--            />-->
<!--          </div>-->
<!--          <div-->
<!--            class="dd-menu-list-item-collapse"-->
<!--            v-if="values[FilterFormFields.IS_VISIBLE_TOKEN_HOLDERS]"-->
<!--          >-->
<!--            <BaseInputText-->
<!--              :name="FilterFormFields.TOKEN_HOLDERS_COUNT_MIN"-->
<!--              :type="InputTypes.NUMBER"-->
<!--              :placeholder="getFilterFieldOptions(FilterFormFields.TOKEN_HOLDERS_COUNT_MIN).placeholder"-->
<!--              class="no-error"-->
<!--            />-->
<!--            <BaseInputText-->
<!--              :name="FilterFormFields.TOKEN_HOLDERS_COUNT_MAX"-->
<!--              :type="InputTypes.NUMBER"-->
<!--              :placeholder="getFilterFieldOptions(FilterFormFields.TOKEN_HOLDERS_COUNT_MAX).placeholder"-->
<!--              class="no-error q-mt-2"-->
<!--            />-->
<!--          </div>-->
<!--          <div-->
<!--            class="dd-menu-list-item"-->
<!--            :class="{ active: values[FilterFormFields.IS_VISIBLE_MARKET_CAP] }"-->
<!--          >-->
<!--            <BaseCheckbox-->
<!--              :name="FilterFormFields.IS_VISIBLE_MARKET_CAP"-->
<!--              :label="getFilterFieldOptions(FilterFormFields.IS_VISIBLE_MARKET_CAP).label"-->
<!--              :value="true"-->
<!--            />-->
<!--          </div>-->
<!--          <div-->
<!--            class="dd-menu-list-item-collapse"-->
<!--            v-if="values[FilterFormFields.IS_VISIBLE_MARKET_CAP]"-->
<!--          >-->
<!--            <BaseInputText-->
<!--              :name="FilterFormFields.TOTAL_MARKET_CAP_MIN"-->
<!--              :type="InputTypes.NUMBER"-->
<!--              :placeholder="getFilterFieldOptions(FilterFormFields.TOTAL_MARKET_CAP_MIN).placeholder"-->
<!--              class="no-error"-->
<!--            />-->
<!--            <BaseInputText-->
<!--              :name="FilterFormFields.TOTAL_MARKET_CAP_MAX"-->
<!--              :type="InputTypes.NUMBER"-->
<!--              :placeholder="getFilterFieldOptions(FilterFormFields.TOTAL_MARKET_CAP_MAX).placeholder"-->
<!--              class="no-error q-mt-2"-->
<!--            />-->
<!--          </div>-->
<!--          &lt;!&ndash;        <div&ndash;&gt;-->
<!--          &lt;!&ndash;          class="dd-menu-list-item"&ndash;&gt;-->
<!--          &lt;!&ndash;          :class="{ active: values[FilterFormFields.IS_VISIBLE_DAO_TYPE] }"&ndash;&gt;-->
<!--          &lt;!&ndash;        >&ndash;&gt;-->
<!--          &lt;!&ndash;          <BaseCheckbox&ndash;&gt;-->
<!--          &lt;!&ndash;            :name="FilterFormFields.IS_VISIBLE_DAO_TYPE"&ndash;&gt;-->
<!--          &lt;!&ndash;            :label="getFilterFieldOptions(FilterFormFields.IS_VISIBLE_DAO_TYPE).label"&ndash;&gt;-->
<!--          &lt;!&ndash;            :value="true"&ndash;&gt;-->
<!--          &lt;!&ndash;          />&ndash;&gt;-->
<!--          &lt;!&ndash;        </div>&ndash;&gt;-->
<!--          &lt;!&ndash;        <div&ndash;&gt;-->
<!--          &lt;!&ndash;          class="dd-menu-list-item-collapse"&ndash;&gt;-->
<!--          &lt;!&ndash;          v-if="values[FilterFormFields.IS_VISIBLE_DAO_TYPE]"&ndash;&gt;-->
<!--          &lt;!&ndash;        >&ndash;&gt;-->
<!--          &lt;!&ndash;          <BaseSelect&ndash;&gt;-->
<!--          &lt;!&ndash;            :name="FilterFormFields.DAO_TYPE"&ndash;&gt;-->
<!--          &lt;!&ndash;            :label="getFilterFieldOptions(FilterFormFields.DAO_TYPE).placeholder"&ndash;&gt;-->
<!--          &lt;!&ndash;            :app.options="['type1', 'type2', 'type3']"&ndash;&gt;-->
<!--          &lt;!&ndash;            multiple&ndash;&gt;-->
<!--          &lt;!&ndash;            use-chips&ndash;&gt;-->
<!--          &lt;!&ndash;          />&ndash;&gt;-->
<!--          &lt;!&ndash;        </div>&ndash;&gt;-->
<!--        </div>-->
<!--      </BaseDropDownMenu>-->
<!--    </div>-->
<!--    <div class="col-6 col-sm-auto q-ml-sm-auto">-->
<!--    <ActiveColumnsFilter class="w-full" />-->
<!--    </div>-->
<!--    <div class="col-12 col-sm-auto order-sm-first">-->
<!--    <BaseInputText-->
<!--      debounce="300"-->
<!--      :name="FilterFormFields.DAO_NAME"-->
<!--      :placeholder="getFilterFieldOptions(FilterFormFields.DAO_NAME).placeholder"-->
<!--      searchInput-->
<!--    />-->
<!--    </div>-->
<!--  </BaseForm>-->
<!--</template>-->

<!--<script src="./DaoTableFiltersForm.ts" lang="ts" />-->
<!--<style src="./DaoTableFiltersForm.scss" lang="scss" />-->
