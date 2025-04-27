/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FunctionalComponent from './components/FunctionalComponet';
import ClassComponent from './components/ClassComponent';

AppRegistry.registerComponent(appName, () => ClassComponent);
