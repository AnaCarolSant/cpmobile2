import { StyleSheet} from 'react-native';
import StackNavigator from './src/navigation/StackNavigation';

export default function App() {
  return <StackNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
