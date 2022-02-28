<template>
  <!--<ui5-list id="todo-list" style="height: calc( 100vh - 150px )" growing="Button" v-on:load-more="handleLoadMore">-->
  <ui5-list id="infiniteScrollEx" ref="list" style="height: calc( 100vh - 150px )" growing="Scroll">
    <ui5-li
      v-for="(todo) in todos" :key="todo.id" :datakey="todo.id">
        {{todo.text}}
    </ui5-li>
  </ui5-list>
</template>

<script>
import Vue from "vue"
// import "@ui5/webcomponents/dist/List"
import "@ui5/webcomponents/dist/List.js"
import "@ui5/webcomponents/dist/StandardListItem.js"


let TodoList = Vue.component('TodoList', {
  props: ["todos"],
  methods: {
    onSelectionChange(event) {
      this.$emit('selection-change', event);
    },
    onItemDeleted(event) {
      this.$emit('item-deleted', event);
    },
    onItemEdit(event) {
      this.$emit('item-edit', event);
    },
    handleLoadMore() {
      // eslint-disable-next-line
      console.log('load-more')
    }
  }
});

export default TodoList;

</script>

<style>

</style>
