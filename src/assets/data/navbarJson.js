import pages from '../../components/pages';

export const items = [
        {id: 10,  title: 'Inicio',     to: '/',               parent: 0,  role: 'basic',        component: pages.HomePage       },
        {id: 20,  title: 'Equipos',    to: '/equipments',     parent: 0,  role: 'basic',        component: pages.EquipmentPage  },
        {id: 30,  title: 'Contacto',   to: '/contact',        parent: 0,  role: 'basic',        component: pages.ContactPage    },
        {id: 40,  title: 'Nosotros',   to: '/about',          parent: 0,  role: 'basic',        component: pages.AboutPage      },
        {id: 50,  title: 'Inicio',     to: '/app',            parent: 0,  role: 'freelance',    component: pages.HomePage       },
        {id: 60,  title: 'Alquiler',   to: '/app/equipments', parent: 0,  role: 'freelance',    component: pages.EquipmentPage  },
        {id: 70,  title: 'Contacto',   to: '/app/contact',    parent: 0,  role: 'freelance',    component: pages.ContactPage    },
        {id: 80,  title: 'Nosotros',   to: '/app/about',      parent: 0,  role: 'freelance',    component: pages.AboutPage      },
        {id: 90,  title: 'Cotización', to: '/app/quote',      parent: 0,  role: 'freelance',    component: pages.QuotePage      },
        {id: 100, title: 'Inventario', to: '/app/inventory',  parent: 0,  role: 'storer',       component: pages.InventoryPage  },
        {id: 110, title: 'Cargar',     to: '/app/prods-in',   parent: 0,  role: 'storer',       component: pages.ProductsPage   },
        {id: 120, title: 'Descargar',  to: '/app/prods-out',  parent: 0,  role: 'storer',       component: pages.ProductsPage   },
        {id: 130, title: 'Cotización', to: '/app/quote',      parent: 0,  role: 'storer',       component: pages.QuotePage      },
        {id: 140, title: 'Ventas',     to: '/app/sales',      parent: 0,  role: 'seller',       component: pages.SalesPage      },
        {id: 150, title: 'Cotización', to: '/app/quote',      parent: 0,  role: 'seller',       component: pages.QuotePage      },
        {id: 160, title: 'Inventario', to: '/app/inventory',  parent: 0,  role: 'admin',        component: pages.InventoryPage  },
        {id: 170, title: 'Cargar',     to: '/app/prods-in',   parent: 14, role: 'admin',        component: pages.ProductsPage   },
        {id: 180, title: 'Descargar',  to: '/app/prods-out',  parent: 14, role: 'admin',        component: pages.ProductsPage   },
        {id: 195, title: 'Ventas',     to: '/app/sales',      parent: 0,  role: 'admin',        component: pages.SalesPage      },
        {id: 200, title: 'Cotización', to: '/app/quote',      parent: 0,  role: 'admin',        component: pages.QuotePage      },
        {id: 210, title: 'Reportes',   to: '/app/reports',    parent: 0,  role: 'admin',        component: pages.ReportPage     },
        {id: 220, title: 'Ingresar',   to: '/login',          parent: 0,  role: 'all',          component: pages.LoginPage      },
        {id: 230, title: 'registrarse',to: '/register',       parent: 0,  role: 'all',          component: pages.RegisterPage   }
]
