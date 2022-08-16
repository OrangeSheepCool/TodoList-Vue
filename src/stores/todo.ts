import { defineStore } from "pinia";

import type { ITodo } from "@/typings/todo";

const useTodoStore = defineStore({
  id: "todo",
  state: () => ({
    items: <ITodo[]>[],
  }),
  getters: {
    sorted(): ITodo[] {
      const midItems: ITodo[] = this.items.filter(
        (item: ITodo): boolean => item.priority === "MID"
      );

      for (const item of this.items) {
        if (item.priority === "HIGH") {
          midItems.unshift(item);
        } else if (item.priority === "LOW") {
          midItems.push(item);
        }
      }

      return midItems;
    },
    compeleted(): boolean {
      if (!this.items.length) return false;

      return this.items.every((item: ITodo): boolean => item.completed);
    },
  },
  actions: {
    addItem(todo: ITodo): void {
      const current: ITodo | undefined = this.items.find(
        (item: ITodo): boolean => item.content === todo.content
      );
      if (current) {
        this.updateItem({ ...todo, id: current.id });

        return;
      }

      this.items.push(todo);
    },
    updateItem(todo: ITodo): void {
      this.items = this.items.map((item: ITodo): ITodo => {
        if (todo.id === item.id) {
          return todo;
        }

        return item;
      });
    },
    removeItem(id: number): void {
      this.items = this.items.filter((item: ITodo): boolean => item.id !== id);
    },
    removeCompletedItems(): void {
      this.items = this.items.filter((item: ITodo): boolean => !item.completed);
    },
    updateItems(status: boolean): void {
      this.items = this.items.map((item: ITodo): ITodo => {
        item.completed = status;

        return item;
      });
    },
  },
});

export default useTodoStore;
