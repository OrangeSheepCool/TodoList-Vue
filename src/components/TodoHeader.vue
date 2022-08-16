<script setup lang="ts">
import { ref } from 'vue';
import { Select } from '@element-plus/icons-vue';

import { TODO_PRIORITY } from '@/typings/todo';
import useTodoStore from '@/stores/todo';

const todoStore = useTodoStore();

const priorityLevel = ref<keyof typeof TODO_PRIORITY>(TODO_PRIORITY.LOW);
const todoContent = ref<string>('');
const handleClick = (): void => {
  if (!todoContent.value.trim()) {
    alert('todo content can not be empty!');

    return;
  }

  todoStore.addItem({
    id: new Date().getTime(),
    priority: priorityLevel.value,
    content: todoContent.value,
    completed: false,
  })
  todoContent.value = '';
  priorityLevel.value = TODO_PRIORITY.LOW;
};
</script>

<template>
  <div class="todo-header">
    <el-input clearable v-model="todoContent">
      <template #prepend>
        <el-select class="todo-header__select" v-model="priorityLevel">
          <el-option label="Level: High" :value="TODO_PRIORITY.HIGH" />
          <el-option label="Level: Mid" :value="TODO_PRIORITY.MID" />
          <el-option label="Level: Low" :value="TODO_PRIORITY.LOW" />
        </el-select>
      </template>
      <template #append>
        <el-button :icon="Select" @click="handleClick" />
      </template>
    </el-input>
  </div>
</template>

<style scoped lang="scss">
.todo-header {
  @include flex-row();

  .todo-header__select {
    width: 120px;
  }
}
</style>
