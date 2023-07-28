import React from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { TodoItem } from './TodoItem';
import { useTodoContext } from '../contexts/TodoContext';
import { todosAsList } from '../selectors/todoSelectors';
import { FloatingActionButton } from './FloatingActionButton';
import { useTodoHandlers } from '../hooks/useTodoHandlers';

// Component that renders a list of todo items
export const TodoList: React.FC = () => {
  const { state, dispatch } = useTodoContext();
  const todoList = todosAsList(state);
  const { handleAdd, handleToggle, handleLabelChange, handleRemove } =
    useTodoHandlers(state, dispatch);

  // show a confirmation dialog before removing an item
  const showRemoveConfirmation = (id: string) => {
    Alert.alert('Remove Item', 'Are you sure want to remove this item?', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      { text: 'OK', onPress: () => handleRemove(id) }
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <TodoItem
            {...item}
            onToggle={() => handleToggle(item.id)}
            onLabelChange={(updatedLabel) =>
              handleLabelChange(item.id, updatedLabel)
            }
            onRemove={() => showRemoveConfirmation(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <FloatingActionButton label='+' position='right' onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
});
