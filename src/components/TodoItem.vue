<template>
  <div class="t-id" :class="{'completed-text': todo.isComplete}">ID: {{ todo.id }}</div>
  <div class="t-text" :class="{'completed-text': todo.isComplete}">Todo: {{ todo.text.length > 150 ? todo.text.substr(0, 150) + "..." : todo.text }}</div>
  <div class="sub-tab">
    <div class="t-is-complete"><div v-if="todo.isComplete === true" class="completed">Completed!</div><div v-else class="not-completed">Not Completed!</div></div>
    <div @click="completeMethod(todo.id)">
      <font-awesome-icon v-if="todo.isComplete === true" icon="circle-check" size="xl" :style="{ color: '#59C9A5' }" />
      <font-awesome-icon v-else icon="circle-xmark" size="xl" :style="{ color: '#F96F5D' }" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  todo: Object,
  completeMethod: Function
})
</script>

<style scoped>
.t-id, .t-text {
  display: flex;
  width: 95%;
  word-break: break-all;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  margin-left: -25px;
  transition: all 300ms ease-in-out;
}


.not-completed {
  color: #F96F5D;
}

.completed {
  color: #59C9A5;
}

.completed-text {
  text-decoration: line-through;
  transition: all 300ms ease-in-out;
}

.sub-tab {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 90px;
  color: #fdfdfd;
  background-color: #202530;
  width: 100%;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  margin-top: 30px;
  font-family: 'Fira Sans', sans-serif;
}
</style>