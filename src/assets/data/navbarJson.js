import pages from '../../components/pages';

const arHome = ['basic', 'frelance', 'storer', 'storer-chief', 'seller', 'admin', 'store-manager', 'owner', 'developer' ];    // Inicio
const arEqui = ['basic', 'frelance', 'storer', 'storer-chief', 'seller', 'admin', 'store-manager', 'owner', 'developer' ];    // Equipos
const arCont = ['basic', 'frelance', 'storer', 'storer-chief', 'seller', 'admin', 'store-manager', 'owner', 'developer' ];    // Contacto
const arAbou = ['basic', 'frelance', 'storer', 'storer-chief', 'seller', 'admin', 'store-manager', 'owner', 'developer' ];    // INosotros
const arInve = ['storer', 'storer-chief', 'admin', 'developer' ];    // Inventario
const arProd = ['storer', 'storer-chief', 'admin', 'developer' ];    // Productos
const arQuot = ['storer', 'storer-chief', 'seller', 'admin', 'developer' ];    // Cotizacion
const arSell = ['storer', 'storer-chief', 'admin', 'developer' ];    // Ventas


export const items = [
        {id: 10,  title: 'Inicio',     to: '/',               parent: 0,  roles: arHome,    component: pages.HomePage       },
        {id: 20,  title: 'Equipos',    to: '/equipments',     parent: 0,  roles: arEqui,    component: pages.EquipmentPage  },
        {id: 30,  title: 'Contacto',   to: '/contact',        parent: 0,  roles: arCont,    component: pages.ContactPage    },
        {id: 40,  title: 'Nosotros',   to: '/about',          parent: 0,  roles: arAbou,    component: pages.AboutPage      },
        {id: 100, title: 'Inventario', to: '/app/inventory',  parent: 0,  roles: arInve,    component: pages.InventoryPage  },
        {id: 110, title: 'Cargar',     to: '/app/prods-in',   parent: 0,  roles: arProd,    component: pages.ProductsPage   },
        {id: 120, title: 'Descargar',  to: '/app/prods-out',  parent: 0,  roles: arProd,    component: pages.ProductsPage   },
        {id: 130, title: 'Cotización', to: '/app/quote',      parent: 0,  roles: arQuot,    component: pages.QuotePage      },
        {id: 140, title: 'Ventas',     to: '/app/sales',      parent: 0,  roles: arSell,    component: pages.SalesPage      },
        {id: 220, title: 'Ingresar',   to: '/login',          parent: 0,  roles: 'all',     component: pages.LoginPage      },
        {id: 230, title: 'registrarse',to: '/register',       parent: 0,  roles: 'all',     component: pages.RegisterPage   }
]
