import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
  TouchableOpacity
} from 'react-native';

class ScreenOne extends Component {
  static navigationOptions = {
    title: "Dashboard",
    headerLeft: (
      <View style={{ paddingHorizontal: 10 }}>
          <Button title="=" size={30} onClick={() => this.props.navigation("DrawerOpen")}/>
      </View>
    )
  };
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props, "props is here");
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.box2]}>
            <TouchableHighlight
            onPress={() => navigate("ScreenTwo", {screen: "Dashboard"})}
            style={styles.button}>
            <Text
                style={styles.buttonText}>Screen One </Text>
            </TouchableHighlight>
        </View>
        <View style={[styles.box, styles.box3]}></View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    button: {
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        height: 40,
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        alignSelf: 'center'
    },
    //header
    box1: {
    flex: 1,
    backgroundColor: '#2196F3'
    },
    //content
    box2: {
    flex: 10,
    backgroundColor: '#8BC34A'
    },
    //footer
    box3: {
    flex: .5,
    backgroundColor: '#e3aa1a'
    }
});
export default ScreenOne;