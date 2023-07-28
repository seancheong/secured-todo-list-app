import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle
} from 'react-native';

interface IProps {
  label: string;
  onChange: (label: string) => void;
  isStikethrough?: boolean;
  style?: ViewStyle;
}

// Custom label component, which built on top of TextInput and Text
// If the isEditing state is true, we render the TextInput component, so that the user can edit the label
// If the isEditing state is false, we render the Text component
// user can click on the Text component to enter editing mode and click outside the TextInput component to exit editing mode
export const EditableLabel: React.FC<IProps> = ({
  label,
  onChange,
  isStikethrough = false,
  style
}) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(label === '');
  const textStyle: TextStyle = {
    textDecorationLine: isStikethrough ? 'line-through' : 'none'
  };

  const handleBlur = () => {
    // If the label is empty, we don't want to exit editing mode
    if (label.trim() !== '') {
      setIsEditing(false);
    }
  };

  return (
    <View style={style}>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={label}
          onChangeText={onChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <Text
          onPress={() => setIsEditing(true)}
          style={[styles.label, textStyle]}
        >
          {label}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20
  },
  label: {
    fontSize: 20
  }
});
