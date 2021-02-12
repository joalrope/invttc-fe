
export const columns = [
  { name: "code",         title: "Código",        type: "string", class: "celldata", aling: "text-left",   editable: false },
  { name: "title",        title: "Decripción",    type: "string", class: "celldata", aling: "text-left",   editable: false },
  { name: "trademark",    title: "Marca",         type: "string", class: "pointer",  aling: "text-center", editable: false },
  { name: "salePrice",    title: "Precio Venta",  type: "number", class: "celldata", aling: "text-right",  editable: false },
  { name: "qty",          title: "Cantidad",      type: "number", class: "celldata", aling: "text-right",  editable: true  },
  { name: "total",        title: "Total Item",    type: "number", class: "celldata", aling: "text-right",  editable: false },
  { name: "subTotal",     title: "SUB-TOTAL",     type: "string", class: "celldata", aling: "text-right",  editable: false },
  { name: "saleTotal",    title: "TOTAL VENTA",   type: "string", class: "celldata", aling: "text-right",  editable: false }
];
