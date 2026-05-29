import { ref, type Ref } from 'vue'

export interface DirectChatApi {
  isContactsOpen: Ref<boolean>
  toggleContacts: () => void
  openContacts: () => void
  closeContacts: () => void
}

/**
 * Local state for the direct-chat contacts pane. Ports AdminLTE's `direct-chat.ts`
 * (toggles the `direct-chat-contacts-open` class via a reactive bind).
 */
export function useDirectChat(): DirectChatApi {
  const isContactsOpen = ref(false)
  return {
    isContactsOpen,
    toggleContacts: () => (isContactsOpen.value = !isContactsOpen.value),
    openContacts: () => (isContactsOpen.value = true),
    closeContacts: () => (isContactsOpen.value = false),
  }
}
