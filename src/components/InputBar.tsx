import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';

interface IProps {
  initialLabel: string;
  buttonText: string;
  onSubmit: (label: string) => void;
}

// Custom input bar component that appears at the bottom of the screen
export const InputBar: React.FC<IProps> = ({
  initialLabel,
  buttonText,
  onSubmit
}) => {
  const [label, setLabel] = useState(initialLabel);

  useEffect(() => {
    // reset the label when the initial label changes
    setLabel(initialLabel);
  }, [initialLabel]);

  const handleSubmit = () => {
    if (label.trim()) {
      // only submit the label if it is not empty
      onSubmit(label);
      setLabel('');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 88 : 0}
        style={styles.container}
      >
        <TextInput
          value={label}
          placeholder='Please enter label...'
          onChangeText={setLabel}
          onSubmitEditing={handleSubmit}
          style={styles.input}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    height: 40,
    fontSize: 18,
    paddingLeft: 12
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#2196F3',
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: 'white'
  }
});
