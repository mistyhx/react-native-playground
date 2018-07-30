import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

class PunchlistItem extends Component {
  render(){
    return(
    <View style={styles.punchlist}>
      <View style={styles.badge}>
      <Text style={styles.titleText}>{this.props.category}</Text>
      </View>


       <Text>{this.props.description}</Text>
     </View>
    );
  }
}


export default class App extends React.Component {

  state = {

         category:"A001",
         description:"Tube broken need repair"
    

  }
  render() {
    return (


      <View style={styles.container}>
    
          <PunchlistItem category={this.state.category} description={this.state.description}/>
        
        
          <Button
          onPress={() => {
            Alert.alert('You successfully submitted');
          }}
          title="Submit"
        />



      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
 
  },

    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    badge: {
      backgroundColor: 'red',
      width: 60
    },

    punchlist: {
      paddingLeft: 10,
      marginTop:40,
    }

});
