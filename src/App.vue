<script setup lang="ts">
import TodoHeader from '@/components/TodoHeader.vue';
import TodoBody from '@/components/TodoBody.vue';
import TodoFooter from '@/components/TodoFooter.vue';
</script>

<template>
  <div class="todo-title">TODO List</div>
  <TodoHeader />
  <TodoBody />
  <TodoFooter />
</template>

<style scoped lang="scss">
.todo-title {
  @include flex-row();

  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  color: $primary-color;
}
</style>
