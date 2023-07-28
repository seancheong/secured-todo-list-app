import React, { PropsWithChildren, createContext, useReducer } from 'react';
import { TodoAction, TodoState } from '../models';
import { todoReducer } from '../reducers/todoReducer';

const initialState: TodoState = {};

const TodoContext = createContext<{
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
}>({
  state: initialState,
  dispatch: () => null
});

export const TodoProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => React.useContext(TodoContext);
