interface ITodoListContext {
  isLoaded: boolean;
  todoList: Array<string>;
  addItem: (todo: string) => void;
  deleteItem: (index: number) => void;
}
