<script setup>
import HeaderApp from "./components/HeaderApp.vue";
import Input from "./components/Input.vue";
import ButtonMain from "./components/ButtonMain.vue";
import Toast from "./components/Toast.vue";
import TodoList from "./components/TodoList.vue";
</script>

<script>
export default {
  data() {
    return {
      title: "Simple Todo-App",
      author: "Alfian",
      todos: [],
      todo: "",
      errorMsg: "",
      isEdited: false,
    };
  },
  methods: {
    addTodo() {
      this.errorMsg = "";
      if (!this.todo) return (this.errorMsg = "Please input your to-do!");

      let data = {
        id: new Date().getTime(),
        activity: this.todo,
        isDone: false,
      };

      this.todos.unshift(data);
      this.todo = "";
      this.saveToLocal();
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.todo = "";
      this.isEdited = false;
      this.saveToLocal();
    },
    editTodo(id) {
      const todoInput = document.querySelector("#todo-input");
      todoInput.focus();

      if (this.isEdited) {
        this.errorMsg = "";
        if (!this.todo) return (this.errorMsg = "Please input your to-do!");

        this.todos = this.todos.map((todo) => {
          if (todo.id === this.isEdited) todo.activity = todoInput.value;
          return todo;
        });

        this.todo = "";
        this.isEdited = false;
        return this.saveToLocal();
      }

      this.isEdited = id;
      const { activity } = this.todos.filter((todo) => todo.id === id)[0];
      this.todo = activity;
      this.saveToLocal();
    },
    cancelEdit() {
      this.isEdited = false;
      this.todo = "";
    },
    doneTodo(id) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) todo.isDone = !todo.isDone;
        return todo;
      });

      this.saveToLocal();
    },
    enteredInput() {
      this.isEdited ? this.editTodo() : this.addTodo();
    },
    saveToLocal() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem("todos") || "[]");
  },
  components: { HeaderApp, Input, ButtonMain, Toast, TodoList },
};
</script>

<template>
  <div class="container mt-28 px-5">
    <!-- Header -->
    <HeaderApp :title="title" :madeBy="author" />

    <Toast v-if="errorMsg" status="Error" :msg="errorMsg" color="bg-red-500" />

    <div class="mt-5">
      <div class="flex items-center justify-center">
        <!-- Input -->
        <Input
          id="todo-input"
          v-model="todo"
          autofocus
          placeholder="Activity name ..."
          @keyup.enter="enteredInput"
        />

        <!-- Add -->
        <ButtonMain
          v-if="!isEdited"
          color="blue"
          text="Add"
          @click="addTodo"
          class="rounded-e-md"
        />
        <!-- Edited -->
        <ButtonMain
          v-if="isEdited"
          color="blue"
          text="Save"
          @click="editTodo"
        />
        <ButtonMain
          v-if="isEdited"
          color="red"
          text="Cancel"
          @click="cancelEdit"
          class="rounded-e-md"
        />
      </div>
    </div>

    <!-- List -->
    <div class="mx-auto mt-8 md:w-11/12">
      <TodoList
        :data="todos"
        @deleteTodo="deleteTodo"
        @editTodo="editTodo"
        @doneTodo="doneTodo"
      />
    </div>
  </div>
</template>
