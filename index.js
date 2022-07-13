/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import AppRoute from './src/navigation';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppRoute);
