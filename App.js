import React, { Component } from 'react';
import { Text, View, Button, ImageBackground, Image, ScrollView, StyleSheet, Constants } from 'react-native';

class App extends Component {

  //state object
  state = { duck: "duck" };

  render() {
    return (
      <ImageBackground style={{width: '100%', height: '100%'}} source={{uri: 'https://images.unsplash.com/photo-1575081151297-19c23575e91b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}}>
        
          <View style={{ marginHorizontal: 20, marginVertical: 50, marginTop: 600}} >
            <Text style={{ color: "white", fontSize: 50, fontWeight: "bold", marginBottom: 10}}>Water</Text>
            <View style={{borderRadius: 20}}>
              <ScrollView style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: 20, borderRadius: 25}} horizontal= {true} decelerationRate={0} snapToInterval={115} snapToAlignment={"left"}>              
                {/* <Button onPress={() => {this.setState({duck: !this.state.duck})}} title="Press Me"/> */}
                <Image style={styles.container} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
                <Image style={styles.container} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
                <Image style={styles.container} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
                <Image style={styles.container} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
                <Image style={styles.container} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
                <Image style={styles.container} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
                <Image style={styles.container} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
                <Image style={styles.container} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
                <Image style={styles.container} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
                <Image style={styles.container} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
                <Image style={styles.container} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
                <Image style={styles.container} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
                <Image style={styles.container} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
                <Image style={styles.container} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
                <Image style={styles.container} source={{uri: 'http://papermoondance.com/wp-content/uploads/2019/05/It-Must-Be-a-Duck-862x862.jpg'}}/>
              </ScrollView>
            </View>
          </View>
        
      </ImageBackground>
    )    
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    width: 100, height: 100, marginRight: 15, borderRadius: 20
  }
});