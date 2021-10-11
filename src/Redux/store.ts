
// Storeが持つTodoにの状態を定義
export interface ITodoState {
  todos: string[];
}

// 全てのStateを集約したStateを定義
export interface IRootState {
  todoState: ITodoState;
}