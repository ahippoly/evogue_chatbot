<template>
  <section class="main-section">
    <ChatBox :user="mockedSender"></ChatBox>
    <ChatBox :user="mockedReceiver"></ChatBox>
  </section>
</template>
<script setup lang="ts">
import { mockedReceiver, mockedSender } from '~/test/mockups/user.mockup'

const messageList = ref<IMessage[]>([])

provide('messageList', messageList)
</script>
<style lang="scss" scoped>
.main-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22px;
  height: 500px;
  width: 600px;
  margin: 15px 15px;
}

@media screen and (max-width: 600px) {
  .main-section {
    flex-wrap: wrap;
  }
}
</style>
