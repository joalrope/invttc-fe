
const auth = ['storer-chief', 'admin', 'owner']

const columns = [
  { name: "id",           visible: false, type: "string", title: "id",            width: "10%", aling: "left"   },
  { name: "code",         visible: true,  type: "string", title: "Código",        width: "1%",  aling: "left"   },
  { name: "category",     visible: true,  type: "string", title: "Categoría",     width: "1%",  aling: "left"   },
  { name: "title",        visible: true,  type: "string", title: "Decripción",    width: "1%",  aling: "left"   },
  { name: "info",         visible: true,  type: "string", title: "Detalles",      width: "1%",  aling: "center" },
  { name: "replacement",  visible: true,  type: "string", title: "Equivalencias", width: "1%",  aling: "left"   },
  { name: "measurement",  visible: true,  type: "string", title: "Medidas",       width: "1%",  aling: "left"   },
  { name: "status",       visible: true,  type: "string", title: "Condición",     width: "1%",  aling: "left"   },
  { name: "trademark",    visible: true,  type: "string", title: "Marca",         width: "1%",  aling: "center" },
  { name: "locqty",       visible: true,  type: "string", title: "Existencia",    width: "1%",  aling: "center" },
  { name: "costPrice",    visible: auth,  type: "number", title: "Precio Costo",  width: "1%",  aling: "right"  },
  { name: "salePrice",    visible: true,  type: "number", title: "Precio Venta",  width: "1%",  aling: "right"  },
  { name: "location",     visible: true,  type: "string", title: "Locación",      width: "1%",  aling: "left"   },
  { name: "qty",          visible: true,  type: "number", title: "Cantidad",      width: "1%",  aling: "right"  },
];


export const colData = (key) => {
 try {
   return columns.find( col => col.name === key );
 } catch (e) {
   return e
 }
}