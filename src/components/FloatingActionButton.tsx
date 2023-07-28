import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface IProps {
  label: string;
  position: 'left' | 'right';
  onPress: () => void;
}

// Custom floating action button component
export const FloatingActionButton: React.FC<IProps> = ({
  label,
  position,
  onPress
}) => {
  const positionStyle: ViewStyle = {
    left: position === 'left' ? 24 : undefined,
    right: position === 'right' ? 24 : undefined
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, positionStyle]}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8
  },
  text: {
    fontSize: 24,
    color: 'white'
  }
});
