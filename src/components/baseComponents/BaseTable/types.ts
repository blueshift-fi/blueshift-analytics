export type TableColumn = {
  name: string,
  label: string,
  field?: any,
  align?: string,
  sortable?: boolean,
  style?: string,
  required?: boolean,
  sort?: any,
  filterFunction?: (...args: any[]) => any[],
  isDate?: boolean,
  filedToData?: string[],
  addFieldToData?: string[],
  tooltip?: string
  hidden?: {
    xs?: boolean
    sm?: boolean
    md?: boolean
  }
};

export type Paginator = {
  sortBy?: string | boolean | number,
  descending?: boolean,
  page: number,
  rowsPerPage: number,
  rowsNumber: number
}
