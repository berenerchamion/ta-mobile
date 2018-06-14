import React from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import devToolsEnhancer from 'remote-redux-devtools';
import reducer from './reducers'
import { styles } from './utils/styles'
import PostList from './components/PostList'
import AddPost from './components/AddPost'
import PostDetails from './components/PostDetails'
import { orange, tan, white, gray} from './utils/colors'

const Tabs = createBottomTabNavigator(
  {
    Posts: PostList,
    Add: AddPost,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
    },
  },
)

const MainStack = createStackNavigator(
  {
    Home: Tabs,
    Details: PostDetails,
  },
  {
    initialRouteName: 'Home',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: orange,
      },
  
      headerTintColor: tan,
      headerTitle: 'Tarn Aeluin Posts',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
)

const RootStack = createStackNavigator(
  {
    Main: MainStack,
  },
)


export default class App extends React.Component {
  render() {
    return (
      <Provider store={
        createStore(reducer, 
        devToolsEnhancer({suppressConnectErrors: false,})
        )
      }>
        <RootStack />
      </Provider>
    )
  }
}
