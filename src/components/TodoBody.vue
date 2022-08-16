<script setup lang="ts">
import TodoItem from '@/components/TodoItem.vue';

import useTodoStore from '@/stores/todo';

const todoStore = useTodoStore();
</script>

<template>
  <div class="todo-body">
    <template v-for="item in todoStore.sorted" :key="item.id">
      <TodoItem :item="item" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.todo-body {
  height: 330px;
  margin: 10px 0;
  padding: 0 10px;
  overflow-y: scroll;
}
</style>
