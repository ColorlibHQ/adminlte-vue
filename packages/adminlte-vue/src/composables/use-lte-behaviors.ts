import { onBeforeUnmount, onMounted } from 'vue'
import { slideToggle, slideUp } from '../lib/slide'

/**
 * Delegated handlers for raw AdminLTE markup placed inside slots — so hand-written
 * `data-lte-toggle="card-collapse|card-maximize|card-remove|chat-pane"` controls and
 * Bootstrap `.needs-validation` forms keep working without the vanilla adminlte.js.
 *
 * Components built with this library use reactive state instead and don't rely on
 * these handlers. Installed once by {@link LteDashboardLayout}.
 */
export function useLteBehaviors(): void {
  const onClick = (event: Event) => {
    const target = event.target as HTMLElement | null
    const trigger = target?.closest<HTMLElement>('[data-lte-toggle]')
    if (!trigger) return
    const action = trigger.getAttribute('data-lte-toggle')

    if (action === 'card-collapse' || action === 'card-maximize' || action === 'card-remove') {
      const card = trigger.closest<HTMLElement>('.card')
      if (!card) return
      event.preventDefault()
      handleCard(card, action)
    } else if (action === 'chat-pane') {
      const chat = trigger.closest<HTMLElement>('.direct-chat')
      if (!chat) return
      event.preventDefault()
      chat.classList.toggle('direct-chat-contacts-open')
    }
  }

  const handleCard = (card: HTMLElement, action: string) => {
    const body = card.querySelector<HTMLElement>('.card-body')
    const footer = card.querySelector<HTMLElement>('.card-footer')

    if (action === 'card-collapse') {
      card.classList.toggle('collapsed-card')
      if (body) slideToggle(body)
      if (footer) slideToggle(footer)
    } else if (action === 'card-maximize') {
      card.classList.toggle('maximized-card')
      document.documentElement.classList.toggle('maximized-card')
    } else if (action === 'card-remove') {
      if (body || footer) {
        if (body) slideUp(body)
        if (footer) slideUp(footer)
        window.setTimeout(() => card.remove(), 300)
      } else {
        card.remove()
      }
    }
  }

  const onSubmit = (event: Event) => {
    const form = event.target as HTMLElement | null
    if (!form || !form.classList?.contains('needs-validation')) return
    if (!(form as HTMLFormElement).checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    form.classList.add('was-validated')
  }

  onMounted(() => {
    document.addEventListener('click', onClick)
    document.addEventListener('submit', onSubmit, true)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('click', onClick)
    document.removeEventListener('submit', onSubmit, true)
  })
}
