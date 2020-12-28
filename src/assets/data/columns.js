

const columns = [
  { name: "id",           type: "noShow", title: "id",            width: "10%",  aling: "left"   },
  { name: "code",         type: "string", title: "Código",        width: "1%",  aling: "left"   },
  { name: "category",     type: "string", title: "Categoría",     width: "1%",  aling: "left"   },
  { name: "title",        type: "string", title: "Decripción",    width: "1%",  aling: "left"   },
  { name: "info",         type: "string", title: "Detalles",      width: "1%",  aling: "center" },
  { name: "replacement",  type: "string", title: "Equivalencias", width: "1%",  aling: "left"   },
  { name: "measurement",  type: "string", title: "Medidas",       width: "1%",  aling: "left"   },
  { name: "status",       type: "string", title: "Condición",     width: "1%",  aling: "left"   },
  { name: "trademark",    type: "string", title: "Marca",         width: "1%",  aling: "center" },
  { name: "locqty",       type: "string", title: "Existencia",    width: "1%",  aling: "center" },
  { name: "costPrice",    type: "number", title: "Precio Costo",  width: "1%",  aling: "right"  },
  { name: "salePrice",    type: "number", title: "Precio Venta",  width: "1%",  aling: "right"  },
  { name: "location",     type: "string", title: "Locación",      width: "1%",  aling: "left"   },
  { name: "qty",          type: "number", title: "Cantidad",      width: "1%",  aling: "right"  },
];


export const colData = (key) => columns.find( col => col.name === key );