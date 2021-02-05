
const auth = ['storer-chief', 'admin', 'owner']

const columns = [
  { name: "id",           visible: false, type: "string", title: "id",            class: "celldata", width: "10%", aling: "left"   },
  { name: "code",         visible: true,  type: "string", title: "Código",        class: "celldata", width: "1%",  aling: "left"   },
  { name: "category",     visible: true,  type: "string", title: "Categoría",     class: "celldata", width: "1%",  aling: "left"   },
  { name: "title",        visible: true,  type: "string", title: "Decripción",    class: "celldata", width: "1%",  aling: "left"   },
  { name: "info",         visible: true,  type: "string", title: "Detalles",      class: "celldata", width: "1%",  aling: "center" },
  { name: "replacement",  visible: true,  type: "string", title: "Equivalencias", class: "celldata", width: "1%",  aling: "left"   },
  { name: "measurement",  visible: true,  type: "string", title: "Medidas",       class: "celldata", width: "1%",  aling: "left"   },
  { name: "status",       visible: true,  type: "string", title: "Condición",     class: "celldata", width: "1%",  aling: "left"   },
  { name: "trademark",    visible: true,  type: "string", title: "Marca",         class: "pointer",  width: "1%",  aling: "center" },
  { name: "locqty",       visible: true,  type: "string", title: "Existencia",    class: "celldata", width: "1%",  aling: "center" },
  { name: "costPrice",    visible: auth,  type: "number", title: "Precio Costo",  class: "celldata", width: "1%",  aling: "right"  },
  { name: "salePrice",    visible: true,  type: "number", title: "Precio Venta",  class: "celldata", width: "1%",  aling: "right"  },
  { name: "location",     visible: true,  type: "string", title: "Locación",      class: "celldata", width: "1%",  aling: "left"   },
  { name: "qty",          visible: true,  type: "number", title: "Cantidad",      class: "celldata", width: "1%",  aling: "right"  },
  { name: "total",        visible: true,  type: "number", title: "Total",         class: "celldata", width: "1%",  aling: "right"  },
];


export const colData = (key) => {
 try {
   return columns.find( col => col.name === key );
 } catch (e) {
   return e
 }
}