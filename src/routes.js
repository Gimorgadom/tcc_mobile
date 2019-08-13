import { createStackNavigator, createAppContainer } from 'react-navigation'
import Form from './pages/Form';
import Main from './pages/Main';
import GameScreen from './pages/GameScreen/index';
import Character from './pages/Character/index';
import StoriesScreen from './pages/StoriesScreen/index';

const MainNavigator = createStackNavigator({
  Form: { screen: Form },
  Character: {screen: Character},
  StoriesScreen: {screen: StoriesScreen},
  GameScreen: {screen: GameScreen},
  Main: {screen: Main},
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   }
);

const Routes = createAppContainer(MainNavigator);

export default Routes;
