import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (


      <View style={styles.container}>
        <View>
            <Text style={styles.titleText}>A 001</Text>
        </View>


        <Text>Sharpen your knowledge about our capabilities </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

});
