import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import EventsList from '../screens/EventsList';
import GetEvents from '../screens/GetEvents';
import SaveEvent from '../screens/SaveEvent';
import TabBarIcon from '../components/TabBarIcon';


// create the stack navigators before we create the tab navigators
const ShowEventStack = createStackNavigator(
  {
    GetEvents: GetEvents,
    EventsList: EventsList,
  }
);

ShowEventStack.navigationOptions = {
  tabBarLabel: 'Get Events',
  tabBarIcon: TabBarIcon('favorite')
};


// create the bottom tab navigators
export default createBottomTabNavigator(
  {
    SaveEvent,
    ShowEventStack
  },
  {
    tabBarOptions: {
      // Label and icon color of the active tab
      activeTintColor: 'red',
      // background color of the active tab
      // activeBackgroundColor: 'lightgrey',
      // label and icon color of the inactive tab
      // inactiveTintColor: 'blue',
      //background color of the inactive tab
      // inactiveBackgroundColor: 'black',
      //style object for the tab bar
      style: { borderTopWidth: 2, borderTopColor: 'red' },
      // style object for the tab Label
      labelStyle: { fontWeight: 'bold' },
      //style object for the tab
      // tabstyle: { paddingBottom: 20 },
      // whether to show label for tab or not, default is true
      // showLabel: false,
      // whether to show the icon for tab or not, default is true
      // showIcon: false,
    }
  }
)
