
export const columns = [
  { name: 'id',           title: 'id',                  type: 'string', visible: false, editable: false,  class: 'text-left'                            },
  { name: 'item',         title: 'Item',                type: 'string', visible: true,  editable: false,  class: 'text-center'                          },
  { name: 'code',         title: 'Código',              type: 'string', visible: true,  editable: false,  class: 'text-left'                            },
  { name: 'title',        title: 'Decripción',          type: 'string', visible: true,  editable: true,   class: 'text-left'                            },
  { name: 'trademark',    title: 'Marca',               type: 'string', visible: true,  editable: false,  class: 'text-center'                          },
  { name: 'salePrice',    title: 'Precio Venta',        type: 'number', visible: true,  editable: false,  class: 'bold text-right'                      },
  { name: 'location',     title: 'Locación',            type: 'string', visible: false, editable: false,  class: 'text-left'                            },
  { name: 'qty',          title: 'Cantidad',            type: 'number', visible: true,  editable: true,   class: 'td-input-qty bold text-right pointer' },
  { name: 'qtyAvailable', title: 'Cantidad Disponible', type: 'number', visible: false, editable: false,  class: 'text-right'                           },
  { name: 'total',        title: 'Total Item',          type: 'number', visible: true,  editable: false,  class: 'bold text-right',                     },
  { name: 'subTotal',     title: 'SUB-TOTAL',           type: 'string', visible: true,  editable: false,  class: 'text-right',                          },
  { name: 'saleTotal',    title: 'TOTAL VENTA',         type: 'string', visible: true,  editable: false,  class: 'text-right',                          }
];


export const template = ['item','code', 'title', 'trademark', 'qty', 'qtyAvailable', 'salePrice', 'total'] 