import type { App, Component } from 'vue'

// Types
export type * from './types'

// Composables
export * from './composables'

// Layout
import LteDashboardLayout from './layout/LteDashboardLayout.vue'
import LteAuthLayout from './layout/LteAuthLayout.vue'
import LteAppContent from './layout/LteAppContent.vue'
import LteSidebar from './layout/LteSidebar.vue'
import LteSidebarBrand from './layout/LteSidebarBrand.vue'
import LteSidebarNav from './layout/LteSidebarNav.vue'
import LteSidebarNavItem from './layout/LteSidebarNavItem.vue'
import LteSidebarOverlay from './layout/LteSidebarOverlay.vue'
import LteTopbar from './layout/LteTopbar.vue'
import LteFooter from './layout/LteFooter.vue'
import LteColorModeToggle from './layout/LteColorModeToggle.vue'
import LteFullscreenToggle from './layout/LteFullscreenToggle.vue'

// Widgets
import LteCard from './widget/LteCard.vue'
import LteSmallBox from './widget/LteSmallBox.vue'
import LteInfoBox from './widget/LteInfoBox.vue'
import LteAlert from './widget/LteAlert.vue'
import LteCallout from './widget/LteCallout.vue'
import LteProgress from './widget/LteProgress.vue'
import LteProgressGroup from './widget/LteProgressGroup.vue'
import LteTimeline from './widget/LteTimeline.vue'
import LteRatings from './widget/LteRatings.vue'
import LteProfileCard from './widget/LteProfileCard.vue'
import LteDescriptionBlock from './widget/LteDescriptionBlock.vue'
import LteDirectChat from './widget/LteDirectChat.vue'
import LteNavMessages from './widget/LteNavMessages.vue'
import LteNavNotifications from './widget/LteNavNotifications.vue'
import LteNavTasks from './widget/LteNavTasks.vue'
import LteToast from './widget/LteToast.vue'
import LteTabs from './widget/LteTabs.vue'
import LteTab from './widget/LteTab.vue'
import LteAccordion from './widget/LteAccordion.vue'
import LteAccordionItem from './widget/LteAccordionItem.vue'
import LteBreadcrumb from './widget/LteBreadcrumb.vue'
import LteCommandPalette, { flattenMenuToCommands } from './widget/LteCommandPalette.vue'

// Forms
import LteButton from './form/LteButton.vue'
import LteInput from './form/LteInput.vue'
import LteTextarea from './form/LteTextarea.vue'
import LteSelect from './form/LteSelect.vue'
import LteInputSwitch from './form/LteInputSwitch.vue'
import LteInputColor from './form/LteInputColor.vue'
import LteInputFile from './form/LteInputFile.vue'
import LteInputFlatpickr from './form/LteInputFlatpickr.vue'
import LteInputTomSelect from './form/LteInputTomSelect.vue'

// Tools
import LteModal from './tool/LteModal.vue'
import LteWizard from './tool/LteWizard.vue'
import LteWizardStep from './tool/LteWizardStep.vue'

export {
  LteDashboardLayout,
  LteAuthLayout,
  LteAppContent,
  LteSidebar,
  LteSidebarBrand,
  LteSidebarNav,
  LteSidebarNavItem,
  LteSidebarOverlay,
  LteTopbar,
  LteFooter,
  LteColorModeToggle,
  LteFullscreenToggle,
  LteCard,
  LteSmallBox,
  LteInfoBox,
  LteAlert,
  LteCallout,
  LteProgress,
  LteProgressGroup,
  LteTimeline,
  LteRatings,
  LteProfileCard,
  LteDescriptionBlock,
  LteDirectChat,
  LteNavMessages,
  LteNavNotifications,
  LteNavTasks,
  LteToast,
  LteTabs,
  LteTab,
  LteAccordion,
  LteAccordionItem,
  LteBreadcrumb,
  LteCommandPalette,
  flattenMenuToCommands,
  LteButton,
  LteInput,
  LteTextarea,
  LteSelect,
  LteInputSwitch,
  LteInputColor,
  LteInputFile,
  LteInputFlatpickr,
  LteInputTomSelect,
  LteModal,
  LteWizard,
  LteWizardStep,
}

/** All core (non-plugin) components, keyed by their registered name. */
export const components: Record<string, Component> = {
  LteDashboardLayout,
  LteAuthLayout,
  LteAppContent,
  LteSidebar,
  LteSidebarBrand,
  LteSidebarNav,
  LteSidebarNavItem,
  LteSidebarOverlay,
  LteTopbar,
  LteFooter,
  LteColorModeToggle,
  LteFullscreenToggle,
  LteCard,
  LteSmallBox,
  LteInfoBox,
  LteAlert,
  LteCallout,
  LteProgress,
  LteProgressGroup,
  LteTimeline,
  LteRatings,
  LteProfileCard,
  LteDescriptionBlock,
  LteDirectChat,
  LteNavMessages,
  LteNavNotifications,
  LteNavTasks,
  LteToast,
  LteTabs,
  LteTab,
  LteAccordion,
  LteAccordionItem,
  LteBreadcrumb,
  LteCommandPalette,
  LteButton,
  LteInput,
  LteTextarea,
  LteSelect,
  LteInputSwitch,
  LteInputColor,
  LteInputFile,
  LteInputFlatpickr,
  LteInputTomSelect,
  LteModal,
  LteWizard,
  LteWizardStep,
}

/**
 * Vue plugin — globally registers all core components.
 *
 * ```ts
 * import AdminLteVue from 'adminlte-vue'
 * import 'adminlte-vue/css'
 * app.use(AdminLteVue)
 * ```
 */
export default {
  install(app: App) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component)
    }
  },
}
