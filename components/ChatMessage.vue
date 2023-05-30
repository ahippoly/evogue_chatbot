<template>
  <li
    :class="{
      emitter: isEmitter,
      receiver: isReceiver
    }"
  >
    <p
      ref="messageElem"
      :style="{ backgroundColor: message.sender.color }"
      :contenteditable="isBeingEdited"
      @blur="confirmEdit"
    >
      {{ message.content }}
    </p>
    <div v-if="isEmitter" class="action-list">
      <Edit @click="toggleEdit"></Edit>
      <Delete @click="emits('delete', message.id)"></Delete>
    </div>
  </li>
</template>
<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/vue-demi'
import Edit from './icons/Edit.vue'
import Delete from './icons/Delete.vue'

const emits = defineEmits(['delete', 'edit'])

const props = defineProps({
  message: {
    type: Object as PropType<IMessage>,
    default: null
  },
  user: {
    type: Object as PropType<IUser>,
    default: null
  }
})

const isBeingEdited = ref<boolean>(false)
const messageElem = ref<HTMLElement | null>(null)

const isEmitter = computed<boolean>(() => props.user.name === props.message.sender.name)
const isReceiver = computed<boolean>(() => !isEmitter.value)

function confirmEdit() {
  isBeingEdited.value = false
  if (messageElem.value?.innerText === '') {
    emits('delete', props.message.id)
    return
  }
  emits('edit', messageElem.value?.innerText)
}

function toggleEdit() {
  isBeingEdited.value = true
  setTimeout(() => {
    messageElem.value?.focus()
  }, 1)
}
</script>
<style lang="scss" scoped>
p {
  border-radius: 10px;
  padding: 5px 10px;
  margin: 2px 10px;
  width: 80%;
  word-break: break-word;
}

li {
  display: flex;
  width: 100%;
}

.action-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.receiver {
  justify-content: flex-end;

  &:has(+ .receiver) p {
    border-bottom-right-radius: 2px;
  }
  + .receiver p {
    border-top-right-radius: 2px;
  }
}

.emitter {
  justify-content: flex-start;

  &:has(+ .emitter) p {
    border-bottom-left-radius: 2px;
  }
  + .emitter p {
    border-top-left-radius: 2px;
  }
}

svg {
  width: $icon-size-small;
  height: $icon-size-small;
  cursor: pointer;

  :deep(path) {
    fill: grey;
  }
}
</style>
