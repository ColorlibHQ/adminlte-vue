import type { BootstrapTheme } from './theme'

/**
 * A single timeline entry for {@link LteTimeline}.
 *
 * ⚠️ `body` and `footer` are rendered as **raw HTML** (`v-html`) to match
 * AdminLTE's markup, so they must only ever hold trusted, developer-authored
 * strings. Passing user-generated content here is an XSS vector — sanitize it
 * first, or render it through the component's `body` / `footer` slots, which
 * escape their content like any other Vue template.
 */
export interface TimelineItem {
  time: string
  icon?: string
  iconTheme?: BootstrapTheme
  title: string
  /** Trusted HTML — see the XSS note on {@link TimelineItem}. */
  body?: string
  /** Trusted HTML — see the XSS note on {@link TimelineItem}. */
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
