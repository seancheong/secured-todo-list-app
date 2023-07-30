import {
  Button,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle
} from 'react-native';
import React, { memo } from 'react';
import { Checkbox } from './Checkbox';

interface IProps {
  id: string;
  label: string;
  isCompleted: boolean;
  isSelected: boolean;
  onToggle: () => void;
  onItemSelected: () => void;
  onRemove: () => void;
}

// Component to render each todo item
// It uses memo during export to prevent unnecessary re-rendering
const TodoItemComponent: React.FC<IProps> = ({
  label,
  isCompleted,
  isSelected,
  onToggle,
  onItemSelected,
  onRemove
}) => {
  const textStyle: TextStyle = {
    textDecorationLine: isCompleted ? 'line-through' : 'none'
  };

  const containerStyle: ViewStyle = {
    backgroundColor: isSelected ? '#e0e0e0' : 'transparent'
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Checkbox
        isChecked={isCompleted}
        onToggle={onToggle}
        size={36}
        style={styles.checkbox}
      />
      <Text onPress={onItemSelected} style={[styles.label, textStyle]}>
        {label}
      </Text>
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
    flexShrink: 1,
    fontSize: 20,
    width: '100%'
  },
  button: {
    color: 'red'
  }
});
