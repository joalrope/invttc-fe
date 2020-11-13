import pages from '../../components/pages';

const arAll = 'all';    // Todos

const arInve = ['storer', 'storer-chief', 'admin', 'developer' ];           // Inventario
const arProd = ['storer', 'storer-chief', 'admin', 'developer' ];           // Productos
const arQuot = ['storer', 'storer-chief', 'seller', 'admin', 'developer' ]; // Cotizacion
const arSell = ['storer', 'storer-chief', 'admin', 'developer' ];           // Ventas
const arRepo = ['admin', 'owner', 'developer' ];                            // Reportes
const arDash = ['admin', 'owner', 'developer' ];                            // Panel


export const items = [
        {id: 10,    title: 'Inicio',        to: '/',                roles: arAll,   component: pages.HomePage       },
        {id: 20,    title: 'Equipos',       to: '/equipments',      roles: arAll,   component: pages.EquipmentPage  },
        {id: 30,    title: 'Contacto',      to: '/contact',         roles: arAll,   component: pages.ContactPage    },
        {id: 40,    title: 'Nosotros',      to: '/about',           roles: arAll,   component: pages.AboutPage      },
        {id: 50,    title: '',              to: '/login',           roles: arAll,   component: pages.LoginPage      },
        {id: 60,    title: '',              to: '/register',        roles: arAll,   component: pages.RegisterPage   },
        {id: 70,    title: '',              to: '/forgot',          roles: arAll,   component: pages.ForgotPage     },
        {id: 80,    title: 'Inventario',    to: '/app/inventory',   roles: arInve,  component: pages.InventoryPage  },
        {id: 90,    title: 'Cargar',        to: '/app/prods-in',    roles: arProd,  component: pages.ProductsPage   },
        {id: 100,    title: 'Descargar',     to: '/app/prods-out',   roles: arProd,  component: pages.ProductsPage   },
        {id: 110,   title: 'Cotización',    to: '/app/quote',       roles: arQuot,  component: pages.QuotePage      },
        {id: 120,   title: 'Ventas',        to: '/app/sales',       roles: arSell,  component: pages.SalesPage      },
        {id: 130,   title: 'Reportes',      to: '/app/reports',     roles: arRepo,  component: pages.ReportPage     },
        {id: 140,   title: 'Panel',         to: '/app/dashboard',   roles: arDash,  component: pages.DashboardPage  }
]
