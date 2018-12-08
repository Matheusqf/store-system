// @flow

import { FILTER_TYPES } from '../../../utils/filter';

const filterSalesWithDebit = (sales: Array<Object>): Array<Object> => sales.filter(sale => sale.inDebit > 0);

const filterConfig = [{
  placeholder: 'Informe o Nome do Vendedor',
  type: FILTER_TYPES.TEXT,
  filterTitle: 'Vendedor',
  dataField: 'salesman',
}, {
  placeholder: 'Informe o Nome do Cliente',
  type: FILTER_TYPES.TEXT,
  filterTitle: 'Cliente',
  dataField: 'customerName',
}, {
  placeholder: 'Informe o Código da Venda',
  type: FILTER_TYPES.TEXT,
  filterTitle: 'Código',
  dataField: 'code',
}, {
  placeholder: 'Vendas que estão em Débito',
  type: FILTER_TYPES.FUNCTIONAL,
  filterTitle: 'Em Débito',
  dataField: 'debit',
  behavior: filterSalesWithDebit,
}, {
  placeholder: 'Informe a Data em questão',
  type: FILTER_TYPES.DATE.ID,
  filterTitle: 'Antes do Dia...',
  dataField: FILTER_TYPES.DATE.WHEN.BEFORE,
  field: 'createdAt',
}, {
  placeholder: 'Informe a Data em questão',
  type: FILTER_TYPES.DATE.ID,
  filterTitle: 'No Dia...',
  dataField: FILTER_TYPES.DATE.WHEN.SAME,
  field: 'createdAt',
}, {
  placeholder: 'Informe a Data em questão',
  type: FILTER_TYPES.DATE.ID,
  filterTitle: 'Depois do Dia...',
  dataField: FILTER_TYPES.DATE.WHEN.AFTER,
  field: 'createdAt',
}];

export default filterConfig;
