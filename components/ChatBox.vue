<template>
  <section class="chat-box">
    <div class="box-header">
      <ArrowLeft />
      <UserIcon />
      <h4 :style="{ color: user.color }">{{ senderName }}</h4>
    </div>
    <ul class="chat-section">
      <ChatMessage
        v-for="(message, index) in messageList"
        :key="message.id"
        :message="message"
        :user="user"
        @edit="
          (newMessageContent) => {
            editMessage(index, newMessageContent)
          }
        "
        @delete="deleteMessage(index)"
      />
    </ul>
    <!-- <ChatSection class="chat-section" :message-list="messageList" :user="user"></ChatSection> -->
    <div class="type-message">
      <input type="text" placeholder="Type message" v-model="textInput" @keyup.enter="addMessage" />
      <PaperPlane @click="addMessage" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi'
import ArrowLeft from './icons/ArrowLeft.vue'
import PaperPlane from './icons/PaperPlane.vue'

const messageList = inject<Ref<IMessage[]>>('messageList')

const props = defineProps({
  user: {
    type: Object as PropType<IUser>,
    default: null
  }
})

const senderName = toRef(props.user, 'name')
const textInput = ref<string>('')

const addMessage = () => {
  if (textInput.value === '') return
  messageList?.value.push({
    sender: props.user,
    content: textInput.value,
    date: new Date(),
    id: Math.random()
  })

  textInput.value = ''
}

function deleteMessage(index: number) {
  messageList?.value.splice(index, 1)
}

function editMessage(index: number, newMessageContent: string) {
  if (!messageList) return
  messageList.value[index].content = newMessageContent
}
</script>
<style lang="scss" scoped>
.chat-box {
  height: 100%;
  flex-grow: 1;
  border-radius: 10px;
  border: solid 1px black;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  background-color: white;
  display: flex;
  flex-direction: column;
}

svg {
  margin: 5px 15px;
}

.box-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.type-message {
  display: flex;
  padding: 10px 10px;

  svg {
    cursor: pointer;
  }

  input {
    border: none;
    outline: none;
    flex-grow: 1;
  }
}

.chat-section {
  border: solid 1px black;
  border-left: none;
  border-right: none;
  flex-grow: 1;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
</style>
