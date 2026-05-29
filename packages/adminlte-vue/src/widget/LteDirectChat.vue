<script setup lang="ts">
import type { BootstrapTheme } from '../types/theme'
import type { DirectChatContact, DirectChatMessage } from '../types/direct-chat'
import { cn } from '../lib/class-name'
import { useDirectChat } from '../composables/use-direct-chat'

withDefaults(
  defineProps<{
    title?: string
    theme?: BootstrapTheme
    messages?: DirectChatMessage[]
    contacts?: DirectChatContact[]
  }>(),
  { theme: 'primary', messages: () => [], contacts: () => [] }
)

const { isContactsOpen, toggleContacts } = useDirectChat()
</script>

<template>
  <div :class="cn('card direct-chat', `direct-chat-${theme}`, isContactsOpen && 'direct-chat-contacts-open')">
    <div class="card-header">
      <h3 class="card-title">{{ title }}</h3>
      <div class="card-tools">
        <button type="button" class="btn btn-tool" title="Contacts" @click="toggleContacts">
          <i class="bi bi-person-lines-fill"></i>
        </button>
      </div>
    </div>

    <div class="card-body">
      <div class="direct-chat-messages">
        <slot name="messages">
          <div
            v-for="(msg, idx) in messages"
            :key="idx"
            :class="['direct-chat-msg', msg.isOwn && 'end']"
          >
            <div class="direct-chat-infos clearfix">
              <span :class="['direct-chat-name', msg.isOwn ? 'float-end' : 'float-start']">{{ msg.from }}</span>
              <span :class="['direct-chat-timestamp', msg.isOwn ? 'float-start' : 'float-end']">{{ msg.timestamp }}</span>
            </div>
            <img class="direct-chat-img" :src="msg.image" :alt="msg.from" />
            <div class="direct-chat-text">{{ msg.text }}</div>
          </div>
        </slot>
      </div>

      <div class="direct-chat-contacts">
        <slot name="contacts">
          <ul class="contacts-list">
            <li v-for="(c, idx) in contacts" :key="idx">
              <a href="#">
                <img class="contacts-list-img" :src="c.image" :alt="c.name" />
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    {{ c.name }}
                    <small class="contacts-list-date float-end">{{ c.date }}</small>
                  </span>
                  <span class="contacts-list-msg">{{ c.preview }}</span>
                </div>
              </a>
            </li>
          </ul>
        </slot>
      </div>
    </div>

    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
