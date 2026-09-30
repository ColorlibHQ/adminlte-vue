---
title: Introduction
navTitle: Introduction
description: AdminLTE 4 for Vue 3 & Nuxt — a framework-agnostic component library and a thin Nuxt module.
section: Getting started
icon: bi-rocket-takeoff
order: 1
---

**AdminLTE Vue** (the `@adminlte/vue` package) is a faithful port of [AdminLTE 4](https://adminlte.io)
(Bootstrap 5.3) for **Vue 3 & Nuxt**. It comes in two pieces so you can adopt as much or as little as
you need:

## The packages

| Package | What it is |
| --- | --- |
| **`@adminlte/vue`** | The framework-agnostic Vue 3 component library — works in any Vite / Vue 3 / Nuxt app. |
| **`@adminlte/nuxt`** | A thin Nuxt module: auto-registers the components, auto-imports the composables, injects the CSS + an SSR-safe color-mode script. |

## Which one?

- Use **`@adminlte/vue`** directly for full control in any Vue 3 / Vite app — you wire the router and CSS yourself.
- Add **`@adminlte/nuxt`** in a Nuxt app to remove all the wiring boilerplate (auto-registration, auto-imports, CSS, the color-mode head script).

The **demo app** is a 1:1 AdminLTE 4 showcase of every component and page — the best way to see what's available.

## Highlights

- **SSR-safe** — every browser API is isolated to `onMounted`/effects; no hydration mismatches.
- **Color mode** with a blocking head script (no flash of the wrong theme).
- **Composables + provide/inject** for state (no Pinia required in the library).
- **Heavy plugins are dynamic-imported** (Chart.js, FullCalendar, Tabulator, Quill, …) and stay out of the default bundle.

> Looking to get going fast? Jump to [Installation](/getting-started/installation).
