import { Button, StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { Checkbox } from './Checkbox';
import { EditableLabel } from './EditableLabel';

interface IProps {
  id: string;
  label: string;
  isCompleted: boolean;
  onToggle: () => void;
  onLabelChange: (label: string) => void;
  onRemove: () => void;
}

// Component to render each todo item
// It uses memo during export to prevent unnecessary re-rendering
const TodoItemComponent: React.FC<IProps> = ({
  label,
  isCompleted,
  onToggle,
  onLabelChange,
  onRemove
}) => {
  return (
    <View style={styles.container}>
      <Checkbox
        isChecked={isCompleted}
        onToggle={onToggle}
        size={36}
        style={styles.checkbox}
      />
      <EditableLabel
        label={label}
        onChange={onLabelChange}
        isStikethrough={isCompleted}
        style={styles.label}
      />
      <Button title='Remove' onPress={onRemove} color='red' />
    </View>
  );
};

export const TodoItem = memo(TodoItemComponent);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    marginHorizontal: 24,
    borderBottomWidth: 1
  },
  checkbox: {
    marginRight: 8
  },
  label: {
    flexShrink: 1
  },
  button: {
    color: 'red'
  }
});
