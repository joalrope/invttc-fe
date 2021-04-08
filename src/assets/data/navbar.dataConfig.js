import { HomePage } from '../../components/pages/HomePage';
import { EquipmentPage } from '../../components/pages/EquipmentPage';
import { ContactPage } from '../../components/pages/ContactPage';
import { AboutPage } from '../../components/pages/AboutPage';
import { LoginPage } from '../../components/auth/LoginPage';
import { RegisterPage } from '../../components/auth/RegisterPage';
import { ForgotPage } from '../../components/auth/ForgotPage';
import { InventoryPage } from '../../components/pages/InventoryPage';
import { ProductsPage } from '../../components/pages/ProductsPage';
import { SalesPage } from '../../components/pages/SalesPage';
import { QuotePage } from '../../components/pages/QuotePage';
import { ReportPage } from '../../components/pages/ReportPage';
import { DashboardPage } from '../../components/pages/DashboardPage';

const arAll = 'all'; // Todos

const arInve = ['storer', 'storer-chief', 'admin', 'developer']; // Inventario
const arProd = ['storer', 'storer-chief', 'admin', 'developer']; // Productos
const arQuot = ['freelance', 'storer', 'storer-chief', 'seller', 'admin', 'owner', 'developer']; // Cotizacion
const arSell = ['storer-chief', 'seller', 'admin', 'developer']; // Ventas
const arRepo = ['admin', 'owner', 'developer']; // Reportes
const arDash = ['owner', 'developer']; // Panel

export const items = [
  { id: 10, title: 'Inicio', to: '/', roles: arAll, component: HomePage },
  {
    id: 20,
    title: 'Equipos',
    to: '/equipments',
    roles: arAll,
    component: EquipmentPage,
  },
  {
    id: 30,
    title: 'Contacto',
    to: '/contact',
    roles: arAll,
    component: ContactPage,
  },
  {
    id: 40,
    title: 'Nosotros',
    to: '/about',
    roles: arAll,
    component: AboutPage,
  },
  { id: 50, title: '', to: '/login', roles: arAll, component: LoginPage },
  {
    id: 60,
    title: '',
    to: '/register',
    roles: arAll,
    component: RegisterPage,
  },
  {
    id: 70,
    title: '',
    to: '/forgot',
    roles: arAll,
    component: ForgotPage,
  },
  {
    id: 80,
    title: 'Inventario',
    to: '/app/inventory',
    roles: arInve,
    component: InventoryPage,
  },
  {
    id: 90,
    title: 'Cargar',
    to: '/app/prods-in',
    roles: arProd,
    component: ProductsPage,
  },
  {
    id: 100,
    title: 'Descargar',
    to: '/app/prods-out',
    roles: arProd,
    component: ProductsPage,
  },
  {
    id: 110,
    title: 'Ventas',
    to: '/app/sales',
    roles: arSell,
    component: SalesPage,
  },
  {
    id: 120,
    title: 'Cotización',
    to: '/app/quote',
    roles: arQuot,
    component: QuotePage,
  },
  {
    id: 130,
    title: 'Reportes',
    to: '/app/reports',
    roles: arRepo,
    component: ReportPage,
  },
  {
    id: 140,
    title: 'Panel',
    to: '/app/dashboard',
    roles: arDash,
    component: DashboardPage,
  },
];
