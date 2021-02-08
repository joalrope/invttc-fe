
const columns = [
  { name: "code",         title: "Código",        type: "string", class: "celldata", aling: "left",   editable: false },
  { name: "title",        title: "Decripción",    type: "string", class: "celldata", aling: "left",   editable: false },
  { name: "trademark",    title: "Marca",         type: "string", class: "pointer",  aling: "center", editable: false },
  { name: "salePrice",    title: "Precio Venta",  type: "number", class: "celldata", aling: "right",  editable: false },
  { name: "qty",          title: "Cantidad",      type: "number", class: "celldata", aling: "right",  editable: true  }
  // { name: "total",        title: "Total",         type: "number", class: "celldata", aling: "right",  editable: false }
];


export const getProdForSateData = (key) => {
 try {
   return columns.find( col => col.name === key );
 } catch (e) {
   return e
 }
}