<script setup lang="ts">
import useTodoStore from "@/stores/todo";

const todoStore = useTodoStore();

const handleChange = (e: Event) => {
  todoStore.updateItems((e.target as HTMLInputElement).checked);
};
</script>

<template>
  <div class="todo-footer">
    <div class="todo-footer__check">
      <input
        id="checkAll"
        type="checkbox"
        :disabled="!todoStore.items.length"
        :checked="todoStore.compeleted"
        @change="handleChange"
      />
      <label for="checkAll">{{
        todoStore.compeleted ? "Incomplete All" : "Complete All"
      }}</label>
    </div>
    <el-button type="danger" @click="todoStore.removeCompletedItems">
      Clear completed to-dos
    </el-button>
  </div>
</template>

<style scoped lang="scss">
.todo-footer {
  @include flex-row();
  .todo-footer__check {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
    color: $warning-color;
  }
}
</style>
