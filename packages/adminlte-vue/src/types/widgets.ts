import type { BootstrapTheme } from './theme'

/**
 * A single timeline entry for {@link LteTimeline}. Body/footer markup is
 * provided via the default slot; this carries the data fields.
 */
export interface TimelineItem {
  time: string
  icon?: string
  iconTheme?: BootstrapTheme
  title: string
  body?: string
  footer?: string
  url?: string
}

/** A message row in the topbar {@link LteNavMessages} dropdown. */
export interface NavMessage {
  from: string
  text: string
  image?: string
  url?: string
  time?: string
  star?: BootstrapTheme
}

/** A notification row in the topbar {@link LteNavNotifications} dropdown. */
export interface NavNotification {
  text: string
  icon?: string
  iconTheme?: BootstrapTheme
  time?: string
  url?: string
}

/** A task row in the topbar {@link LteNavTasks} dropdown. */
export interface NavTask {
  text: string
  progress: number
  theme?: BootstrapTheme
  url?: string
}

/** An entry in the command palette. */
export interface CommandItem {
  label: string
  href: string
  icon?: string
  group?: string
}
