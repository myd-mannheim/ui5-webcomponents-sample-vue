<template>
  <div class="app">
        <!--<header class="app-header">
          <ui5-shellbar primary-title="UI5 Web Components Vue Sample Application" :logo='logo'>
          </ui5-shellbar>
        </header>-->
        <section class="app-content">
          <!--<div class="create-todo-wrapper">
            <ui5-input placeholder="My Todo ..." ref="todoInput" class="add-todo-element-width" id="add-input"></ui5-input>
            <ui5-datepicker format-pattern="dd/MM/yyyy" class="add-todo-element-width" ref="todoDeadline" id="date-picker"></ui5-datepicker>
            <ui5-button class="add-todo-element-width" ref="addButton" design="Emphasized" @click="handleAdd">Add Todo</ui5-button>
          </div>-->

          <div class="list-todos-wrapper">
            <!--<TodoList :todos="todos" @selection-change="handleDone"
              @item-deleted="handleRemove"
              @item-edit="handleEdit">
            </TodoList>-->

            <ui5-list id="infiniteScrollEx" ref="list" style="height: calc( 100vh - 150px )" growing="Scroll" v-on:load-more="handleLoadMore">
              <ui5-li
                v-for="(todo) in todos" :key="todo.id" :datakey="todo.id">
                  {{todo.text}}
              </ui5-li>
              <ui5-li>
                Loading
              </ui5-li>
            </ui5-list>

            <!--<ui5-panel header-text="Completed tasks">
              <TodoList :todos="doneTodos" @selection-change="handleUndone"
              @item-deleted="handleRemove"
              @item-edit="handleEdit">
              </TodoList>
            </ui5-panel>-->
          </div>
        </section>
      </div>
</template>

<script>
import Vue from "vue";
import '@webcomponents/shadydom/shadydom.min.js'
import '@ui5/webcomponents/dist/Title';
import '@ui5/webcomponents/dist/Input';
import '@ui5/webcomponents/dist/DatePicker';
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/Panel';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/TextArea';
import "@ui5/webcomponents/dist/List.js"
import "@ui5/webcomponents/dist/StandardListItem.js"

const todos = []
for (let i = 0; i <= 30; i++) {
  todos.push(
    {
      text: "Buy milk",
      id: `i-${i}`,
      deadline: "30/7/2018",
      done: false
    })
}

let App = Vue.component("app", {
  data: function() {
    return {
      todos: todos,
      doneTodos: [
        {
          text: "Eat some fruits",
          id: "i5",
          deadline: "29/7/2018",
          done: true
        }
      ]
    };
  },
  methods: {
    handleLoadMore() {
      // eslint-disable-next-line
      console.log('load-more')
      setTimeout(() => {
        // eslint-disable-next-line
        const newItemsEndIndex = todos.length + 50
        for (let i = todos.length; i <= newItemsEndIndex; i++) {
          todos.push(
            {
              text: `n${i}`,
              id: `n-${i}`,
              deadline: "30/7/2018",
              done: false
            })
        }
      }, 100)
    }
  }
});

export default App;
</script>

<style>
body {
  margin: 0;
}

.app {
  height: 100%;
}

.header-toolbar {
  position:sticky;
  z-index: 42;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 5px -5px #0a6ed1;
}

.ui5-logo {
  height: 2rem;
  margin-left: 2rem;
}

.app-title {
  margin-left: 1rem;
}

.app-content {
  height: calc(100% - 3rem);
  padding: 0 1rem;
  width: calc(100% - 2rem);
}

.create-todo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #b3b3b3;
  box-sizing: border-box;
}

.add-todo-element-width {
  width: auto;
}

#add-input {
  flex: auto;
}

#date-picker {
  margin: 0 0.5rem 0 0.5rem;
}

.li-content {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.li-content-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.edit-btn {
  margin-right: 1rem;
}

.dialog-content {
  max-width: 320px;
  padding: 2rem 2rem;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  padding: 0.25rem 0.25rem 0 0.25rem;
  border-top: 1px solid #d9d9d9;
}

.title-textarea {
  height: 100px;
  display: inline-block;
  width: 100%;
}

.date-edit-fields {
  margin-top: 1rem;
}

@media(max-width: 600px) {
    .create-todo-wrapper {
        flex-direction: column;
    }

     .add-todo-element-width  {
        width: 100%;
    }

     #date-picker {
        margin: 0.5rem 0 0.5rem 0;
    }
}
</style>
