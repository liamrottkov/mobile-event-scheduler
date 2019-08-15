import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';


export default class EventsList extends React.Component {
  constructor() {
    super();

    this.state = {
      events: [],
    }
  }

  componentDidMount() {
    this.setState({ events: this.props.navigation.getParam('events', [])})
  }

  deleteEvent = id => {
    let URL = 'https://fierce-plains-48308.herokuapp.com/api/delete';

    fetch(URL, {
      "method": "DELETE",
      "headers": {
        "Content-Type": "application/json",
        "event_id": id
      }
    }).then(response => response.json())
      .then(data => {
        if (data.success) {
          let events = this.state.events;
          events = events.filter(event => event.event_id != id);

          this.setState({ events });

          alert('Successfully deleted the event.');
        } else {
          alert('Sorry, but we could not delete the event.');
        }
      });

  }

    render() {
    console.log(this.state.events);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.events}
          renderItem={( { item }, index ) =>

            <View style={{ paddingTop: 25 }} key={index}>
              <Text>{item.title} - {item.month}/{item.day}/{item.year}</Text>
              <Button
                title="Delete Event"
                onPress={() => this.deleteEvent(item.event_id)}
              />
            </View>

          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

EventsList.navigationOptions = {
  title: 'List of Events'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  }
});
