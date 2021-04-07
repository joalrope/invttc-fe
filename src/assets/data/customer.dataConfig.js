
export const template = ['code', 'name', 'address', 'email', 'phone', 'isClient', 'contact']

export const columns = [
  { name: 'id',           title: 'id',        type: 'string',   visible: false, editable: false,  class: 'text-left'    },
  { name: 'code',         title: 'RIF',       type: 'string',   visible: true,  editable: false,  class: 'text-left'    },
  { name: 'name',         title: 'Nombre',    type: 'string',   visible: true,  editable: false,  class: 'text-left'    },
  { name: 'address',      title: 'Dirección', type: 'string',   visible: true,  editable: false,  class: 'text-center'  },
  { name: 'email',        title: 'Correo',    type: 'string',   visible: true,  editable: false,  class: 'text-right'   },
  { name: 'phone',        title: 'Teléfono',  type: 'string',   visible: true,  editable: false,  class: 'text-right'   },
  { name: 'contact',      title: 'Contacto',  type: 'string',   visible: true,  editable: false,  class: 'text-right'   },
  { name: 'isCliente',    title: 'Cliente',   type: 'boolean',  visible: true,  editable: false,  class: 'text-left'    },
  { name: 'contact',      title: 'Contacto',  type: 'string',   visible: true,  editable: false,  class: 'text-right'   },
  { name: 'contactName',  title: 'Nombre',    type: 'string',   visible: true,  editable: false,  class: 'text-right'   },
  { name: 'contactPhone', title: 'Teléfono',  type: 'string',   visible: true,  editable: false,  class: 'text-right',  },
  { name: 'contactEmail', title: 'Correo',    type: 'string',   visible: true,  editable: false,  class: 'text-right',  },
  { name: 'limitCredit',  title: 'Crédito',   type: 'number',   visible: true,  editable: false,  class: 'text-right',  }
];
