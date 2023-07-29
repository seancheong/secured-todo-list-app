import 'react-native-get-random-values';
import { registerRootComponent } from 'expo';
import AppNavigator from './AppNavigator';

export default function App() {
  return <AppNavigator />;
}

registerRootComponent(App);
