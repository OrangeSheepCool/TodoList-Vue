<script setup lang="ts">
import { Delete } from "@element-plus/icons-vue";

import type { ITodo } from "@/typings/todo";
import useTodoStore from "@/stores/todo";

const { item } = defineProps<{ item: ITodo }>();

const todoStore = useTodoStore();
</script>

<template>
  <div class="todo-item">
    <el-checkbox size="large" v-model="item.completed" />
    <div
      :class="[
        'todo-item__content',
        `todo-item__content--${item.priority.toLocaleLowerCase()}`,
        item.completed ? 'todo-item__content--completed' : ''
      ]"
    >
      {{ item.content }}
    </div>
    <el-button
      type="danger"
      :icon="Delete"
      round
      @click="todoStore.removeItem(item.id)"
    />
  </div>
</template>

<style scoped lang="scss">
.todo-item {
  @include flex-row();

  .todo-item__content {
    width: 240px;
    height: 32px;
    padding: 0 5px;
    line-height: 32px;
    color: #FFF;
    border-radius: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &--high {
      background-color: $danger-color;
    }

    &--mid {
      background-color: $warning-color;
    }

    &--low {
      background-color: $plain-color;
    }

    &--completed {
      color: #000;
      text-decoration: line-through;
    }
  }
}
</style>
