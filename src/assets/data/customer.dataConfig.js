
export const template = ['code', 'name', 'address', 'email', 'phone', 'isCustomer', 'contact']

export const columns = [
  { name: 'id',           title: 'id',        type: 'string',   visible: false, editable: false,  class: 'text-left'    },
  { name: 'code',         title: 'RIF',       type: 'string',   visible: true,  editable: false,  class: 'text-left'    },
  { name: 'name',         title: 'Nombre',    type: 'string',   visible: true,  editable: false,  class: 'text-left'    },
  { name: 'address',      title: 'Dirección', type: 'string',   visible: true,  editable: false,  class: 'text-left'  },
  { name: 'email',        title: 'Correo',    type: 'string',   visible: true,  editable: false,  class: 'text-left'   },
  { name: 'phone',        title: 'Teléfono',  type: 'string',   visible: true,  editable: false,  class: 'text-left'   },
  { name: 'contact',      title: 'Contacto',  type: 'string',   visible: true,  editable: false,  class: 'text-left'   },
  { name: 'isCustomer',   title: 'Cliente',   type: 'boolean',  visible: false, editable: false,  class: 'text-left'    },
  { name: 'contact',      title: 'Contacto',  type: 'string',   visible: true,  editable: false,  class: 'text-left'   },
  { name: 'contactName',  title: 'Nombre',    type: 'string',   visible: true,  editable: false,  class: 'text-left'   },
  { name: 'contactPhone', title: 'Teléfono',  type: 'string',   visible: true,  editable: false,  class: 'text-left',  },
  { name: 'contactEmail', title: 'Correo',    type: 'string',   visible: true,  editable: false,  class: 'text-left',  },
  { name: 'limitCredit',  title: 'Crédito',   type: 'number',   visible: true,  editable: false,  class: 'text-left',  }
];
