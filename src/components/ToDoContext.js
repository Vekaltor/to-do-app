import { createContext } from "react";

export const defaultObject = {
  historyListTasks: [],
  listTasks: [],
};

export const ToDoContext = createContext(defaultObject);
