import React, { Component } from 'react';
import { Text, View, Button, ImageBackground, Image, ScrollView, StyleSheet, Constants } from 'react-native';

class App extends Component {

  //state object
  state = { duck: "duck" };

  render() {
    return (
      <ImageBackground style={{width: '100%', height: '100%'}} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}>
        <View style={{paddingTop: 3}}>
          <View style={{ marginHorizontal: 20, marginVertical: 50, height: 500}} >
            <ScrollView style={{ backgroundColor: "red"}}>
              <Text style={{ fontSize: 50, fontWeight: "bold"}}>Ducky</Text>
              <Button
                onPress={() => {
                  this.setState({duck: !this.state.duck})
                }}
                title="Press Me"
              />
              <Image style={{width: 200, height: 200, marginTop: 30}} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
              <Image style={{width: 200, height: 200, marginTop: 30}} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
              <Image style={{width: 200, height: 200, marginTop: 30}} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
              <Image style={{width: 200, height: 200, marginTop: 30}} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    )    
  }
}



export default App