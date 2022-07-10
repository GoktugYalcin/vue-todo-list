<script setup>
import { ref } from 'vue';
import TodoItem from './components/TodoItem.vue';

const todos = ref([{
  id: 1,
  isComplete: true,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam. "
}])
const newTodo = ref("")

const isFocus = ref(false)

const inputFocus = (istrue) => {
  isFocus.value = istrue;
}

const handlePress = (e) => {
  if(e.code.toLowerCase() === 'enter') {
    todos.value.push({id: Math.ceil(Math.random()*10000), text: newTodo.value, isComplete: false});
    newTodo.value = "";
  }
}

const completeTodo = (id) => {
  todos.value = todos.value.map((tod) => {
    console.log(tod)
    if(tod.id === id) {
      tod.isComplete = !tod.isComplete
    }
    return tod;
  })
}
</script>

<template>
  <div class="container">
    <h2 class="header">vue-todo-list</h2>
    <div class="todo-container">
      <div class="input-container">
        <input placeholder="Type in a new To-Do..."
               :class="{focusIn: isFocus}"
               type="text"
               id="inputTodo"
               v-model="newTodo"
               @keypress="(e) => handlePress(e)"
               @focusin="inputFocus(true)"
               @focusout="inputFocus(false)"
        />
      </div>
      <div class="todo-list">
        <div class="todos-container" v-for="todo in todos" :key="todo.id">
          <todo-item :todo="todo" :completeMethod="completeTodo" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');

.container {
  height: 100vh;
  width: 100vw;
  position:fixed;
  top:0;
  left:0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(to right,#f6cfbe,#b9dcf2);
}

.header {
  display:flex;
  justify-content: center;
  font-size: 40px;
  padding: 50px;
  padding-top: 100px;
  font-family: 'Comfortaa', cursive;
}

.todo-list {
  width: 70vw;
  height: 66vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 30px;
  overflow: scroll;
}

.todo-list::-webkit-scrollbar {
  display: none;
}

.todos-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  color: #fdfdfd;
  background: url("/src/assets/pattern-card.png") repeat 0 0;
  border-radius: 40px;
  font-family: 'Fira Sans', sans-serif;
  width: 20vw;
  height: 100px;
  margin: 40px;
  padding: 70px 90px 20px 90px;
  animation-duration: 0.5s;
  animation-name: revealTodo;
  animation-fill-mode: forwards;
  animation-direction: alternate;
  animation-delay: 0s;
  animation-iteration-count: 1;
}

.input-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#inputTodo {
  border-radius: 40px;
  height: 40px;
  width: 400px;
  border: 4px dashed #2c3e50;
  text-indent: 20px;
  margin-top: -20px;
}

#inputTodo:focus {
  outline: none;
}

#inputTodo::placeholder{
  text-indent: 20px;
  font-family: 'Fira Sans', sans-serif;
}

@keyframes revealTodo {
  0% {
    opacity: 0;
    transform: translateY(-200px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes focusInAni {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}

.focusIn {
  animation-delay: 0s;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-name: focusInAni;
  animation-duration: 0.75s;
}
</style>