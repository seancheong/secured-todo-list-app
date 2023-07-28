import {
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react-native';
import { Text, TouchableOpacity } from 'react-native';
import { TodoProvider, useTodoContext } from './TodoContext';
import { todosAsList } from '../selectors/todoSelectors';
import { TodoActionTypes } from '../models';
import { useEffect } from 'react';

describe('TodoContext', () => {
  it('should handle the ADD action', async () => {
    // given
    const expectedTodoLength = '1';
    const TestComponent = () => {
      const { state, dispatch } = useTodoContext();
      const todosList = todosAsList(state);

      return (
        <>
          <Text>{todosList.length}</Text>
          <TouchableOpacity
            onPress={() =>
              dispatch({
                type: TodoActionTypes.ADD_TODO,
                payload: { id: '1', label: 'test', isCompleted: false }
              })
            }
          >
            <Text>Add</Text>
          </TouchableOpacity>
        </>
      );
    };

    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );
    const button = screen.getByText('Add');

    // when
    await waitFor(async () => {
      fireEvent.press(button);
    });

    // then
    expect(screen.getByText(expectedTodoLength)).toBeDefined();
  });

  it('should handle the UPDATE action', async () => {
    // given
    const todoItem = { id: '1', label: 'test', isCompleted: false };
    const updatedLabel = 'updated';
    const TestComponent = () => {
      const { state, dispatch } = useTodoContext();
      const todosList = todosAsList(state);

      useEffect(() => {
        // add a todo item on first render
        dispatch({
          type: TodoActionTypes.ADD_TODO,
          payload: todoItem
        });
      }, []);

      return (
        <>
          {todosList.map((todo) => (
            <Text key={todo.id}>{todo.label}</Text>
          ))}
          <TouchableOpacity
            onPress={() =>
              dispatch({
                type: TodoActionTypes.UPDATE_TODO,
                payload: { ...todoItem, label: updatedLabel }
              })
            }
          >
            <Text>Update</Text>
          </TouchableOpacity>
        </>
      );
    };

    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );
    const button = screen.getByText('Update');

    // when
    await waitFor(async () => {
      fireEvent.press(button);
    });

    // then
    expect(screen.getByText(updatedLabel)).toBeDefined();
  });

  it('should handle the DELETE action', async () => {
    // given
    const id = '1';
    const expectedTodoLength = '0';
    const todoItem = { id, label: 'test', isCompleted: false };
    const TestComponent = () => {
      const { state, dispatch } = useTodoContext();
      const todosList = todosAsList(state);

      useEffect(() => {
        // add a todo item on first render
        dispatch({
          type: TodoActionTypes.ADD_TODO,
          payload: todoItem
        });
      }, []);

      return (
        <>
          <Text>{todosList.length}</Text>
          <TouchableOpacity
            onPress={() =>
              dispatch({
                type: TodoActionTypes.REMOVE_TODO,
                payload: id
              })
            }
          >
            <Text>Delete</Text>
          </TouchableOpacity>
        </>
      );
    };

    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );
    const button = screen.getByText('Delete');

    // when
    await waitFor(async () => {
      fireEvent.press(button);
    });

    // then
    expect(screen.getByText(expectedTodoLength)).toBeDefined();
  });
});
