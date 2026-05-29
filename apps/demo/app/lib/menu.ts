import type { MenuNode } from 'adminlte-vue'

/**
 * The demo sidebar menu. A discriminated union of headers / links / groups,
 * rendered recursively by <LteSidebar>. Mirrors the AdminLTE example menu.
 */
export const menu: MenuNode[] = [
  {
    type: 'group',
    text: 'Dashboard',
    icon: 'bi-speedometer',
    children: [
      { type: 'item', text: 'Dashboard v1', href: '/', icon: 'bi-circle' },
      { type: 'item', text: 'Dashboard v2', href: '/index2', icon: 'bi-circle' },
      { type: 'item', text: 'Dashboard v3', href: '/index3', icon: 'bi-circle' },
    ],
  },
  {
    type: 'group',
    text: 'Widgets',
    icon: 'bi-box-seam-fill',
    badge: 'New',
    badgeColor: 'warning',
    children: [
      { type: 'item', text: 'Small Box', href: '/widgets/small-box', icon: 'bi-circle' },
      { type: 'item', text: 'Info Box', href: '/widgets/info-box', icon: 'bi-circle' },
      { type: 'item', text: 'Cards', href: '/widgets/cards', icon: 'bi-circle' },
    ],
  },
  {
    type: 'group',
    text: 'Layout Options',
    icon: 'bi-layout-wtf',
    badge: 8,
    badgeColor: 'secondary',
    children: [
      { type: 'item', text: 'Fixed Sidebar', href: '/layout/fixed-sidebar', icon: 'bi-circle' },
      { type: 'item', text: 'Fixed Header', href: '/layout/fixed-header', icon: 'bi-circle' },
      { type: 'item', text: 'Fixed Footer', href: '/layout/fixed-footer', icon: 'bi-circle' },
      { type: 'item', text: 'Fixed Complete', href: '/layout/fixed-complete', icon: 'bi-circle' },
      { type: 'item', text: 'Unfixed Sidebar', href: '/layout/unfixed-sidebar', icon: 'bi-circle' },
      { type: 'item', text: 'Collapsed Sidebar', href: '/layout/collapsed-sidebar', icon: 'bi-circle' },
      { type: 'item', text: 'Sidebar Mini', href: '/layout/sidebar-mini', icon: 'bi-circle' },
      { type: 'item', text: 'Layout RTL', href: '/layout/layout-rtl', icon: 'bi-circle' },
    ],
  },
  { type: 'header', text: 'UI & FORMS' },
  {
    type: 'group',
    text: 'UI Elements',
    icon: 'bi-tv',
    children: [
      { type: 'item', text: 'General', href: '/ui/general', icon: 'bi-circle' },
      { type: 'item', text: 'Icons', href: '/ui/icons', icon: 'bi-circle' },
      { type: 'item', text: 'Timeline', href: '/ui/timeline', icon: 'bi-circle' },
    ],
  },
  {
    type: 'group',
    text: 'Forms',
    icon: 'bi-pencil-square',
    children: [
      { type: 'item', text: 'Form Elements', href: '/forms/elements', icon: 'bi-circle' },
      { type: 'item', text: 'Form Layout', href: '/forms/layout', icon: 'bi-circle' },
      { type: 'item', text: 'Validation', href: '/forms/validation', icon: 'bi-circle' },
      { type: 'item', text: 'Wizard', href: '/forms/wizard', icon: 'bi-circle' },
    ],
  },
  {
    type: 'group',
    text: 'Tables',
    icon: 'bi-table',
    children: [
      { type: 'item', text: 'Simple Tables', href: '/tables/simple', icon: 'bi-circle' },
      { type: 'item', text: 'Data Tables', href: '/tables/data', icon: 'bi-circle' },
    ],
  },
  { type: 'header', text: 'PAGES' },
  {
    type: 'group',
    text: 'Mailbox',
    icon: 'bi-envelope',
    children: [
      { type: 'item', text: 'Inbox', href: '/mailbox/inbox', icon: 'bi-circle' },
      { type: 'item', text: 'Read', href: '/mailbox/read', icon: 'bi-circle' },
      { type: 'item', text: 'Compose', href: '/mailbox/compose', icon: 'bi-circle' },
    ],
  },
  {
    type: 'group',
    text: 'Pages',
    icon: 'bi-files',
    children: [
      { type: 'item', text: 'Profile', href: '/pages/profile', icon: 'bi-circle' },
      { type: 'item', text: 'Projects', href: '/pages/projects', icon: 'bi-circle' },
      { type: 'item', text: 'Calendar', href: '/pages/calendar', icon: 'bi-circle' },
      { type: 'item', text: 'Kanban', href: '/pages/kanban', icon: 'bi-circle' },
      { type: 'item', text: 'Invoice', href: '/pages/invoice', icon: 'bi-circle' },
      { type: 'item', text: 'Chat', href: '/pages/chat', icon: 'bi-circle' },
      { type: 'item', text: 'File Manager', href: '/pages/file-manager', icon: 'bi-circle' },
      { type: 'item', text: 'Settings', href: '/pages/settings', icon: 'bi-circle' },
      { type: 'item', text: 'Pricing', href: '/pages/pricing', icon: 'bi-circle' },
      { type: 'item', text: 'FAQ', href: '/pages/faq', icon: 'bi-circle' },
      {
        type: 'group',
        text: 'Errors',
        icon: 'bi-exclamation-triangle',
        children: [
          { type: 'item', text: '404', href: '/pages/404', icon: 'bi-circle' },
          { type: 'item', text: '500', href: '/pages/500', icon: 'bi-circle' },
          { type: 'item', text: 'Maintenance', href: '/pages/maintenance', icon: 'bi-circle' },
        ],
      },
    ],
  },
  {
    type: 'group',
    text: 'Auth',
    icon: 'bi-box-arrow-in-right',
    children: [
      { type: 'item', text: 'Login', href: '/examples/login', icon: 'bi-circle' },
      { type: 'item', text: 'Login v2', href: '/examples/login-v2', icon: 'bi-circle' },
      { type: 'item', text: 'Register', href: '/examples/register', icon: 'bi-circle' },
      { type: 'item', text: 'Register v2', href: '/examples/register-v2', icon: 'bi-circle' },
      { type: 'item', text: 'Lockscreen', href: '/examples/lockscreen', icon: 'bi-circle' },
    ],
  },
  { type: 'header', text: 'PLUGINS' },
  {
    type: 'group',
    text: 'Plugins',
    icon: 'bi-plugin',
    children: [
      { type: 'item', text: 'Charts (ApexCharts)', href: '/plugins/charts', icon: 'bi-circle' },
      { type: 'item', text: 'DataTable (Tabulator)', href: '/plugins/datatable', icon: 'bi-circle' },
      { type: 'item', text: 'Editor (Quill)', href: '/plugins/editor', icon: 'bi-circle' },
      { type: 'item', text: 'Select (Tom Select)', href: '/plugins/select', icon: 'bi-circle' },
      { type: 'item', text: 'Datepicker (Flatpickr)', href: '/plugins/datepicker', icon: 'bi-circle' },
      { type: 'item', text: 'Calendar (FullCalendar)', href: '/plugins/calendar', icon: 'bi-circle' },
      { type: 'item', text: 'Vector Map', href: '/plugins/vector-map', icon: 'bi-circle' },
      { type: 'item', text: 'Sortable', href: '/plugins/sortable', icon: 'bi-circle' },
    ],
  },
  { type: 'header', text: 'DOCS' },
  {
    type: 'item',
    text: 'Documentation',
    href: '/docs',
    icon: 'bi-book',
  },
  {
    type: 'item',
    text: 'Theme Generator',
    href: '/generate/theme',
    icon: 'bi-palette',
  },
]
