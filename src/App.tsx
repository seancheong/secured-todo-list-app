import 'react-native-get-random-values';
import { registerRootComponent } from 'expo';
import { SafeAreaView, StyleSheet } from 'react-native';
import { TodoProvider } from './contexts/TodoContext';
import { TodoList } from './components/TodoList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

registerRootComponent(App);
