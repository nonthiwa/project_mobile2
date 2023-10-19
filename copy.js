import React, { Component }  from 'react';
import { StyleSheet, View, Alert ,TouchableHighlight, Text, SafeAreaView} from "react-native";
import { Button, Input,TextInput, Image } from "react-native-elements";
import firebase from "../database/firebaseDB";
import iconfood from '../assets/iconfood.jpg';

class RegisterScreen extends Component {  
constructor() {
    super();

    this.subjCollection = firebase.firestore().collection("register");

    this.state = {
        username: "",
        email: "",
        password: "",
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  storeRegister() {
    this.subjCollection
      .add({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        this.setState({
          username: "",
          email: "",
          password: "",
        });
        Alert.alert(
          "Adding Alert",
          "New user was added!! Pls check your DB!!"
        );
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={iconfood}
          style={{ width: 200, height: 200}}
          containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <Text style={{color:'#3f2406',fontSize:30,fontWeight:600}}>สมัครสมาชิก</Text>
        <Input
          placeholder={"ชื่อ"}
          value={this.state.username}
          onChangeText={(val) => this.inputValueUpdate(val, "username")}
          style={styles.inputContainer}
        />
        <Input
          placeholder={"อีเมล"}
          value={this.state.email}
          onChangeText={(val) => this.inputValueUpdate(val, "email")}
          style={styles.inputContainer}
        />
        <Input
          placeholder={"รหัสผ่าน"}
          value={this.state.password}
          onChangeText={(val) => this.inputValueUpdate(val, "password")}
          style={styles.inputContainer}
        />
        <TouchableHighlight style={styles.button_login} onPress={() => this.storeRegister()}>
            <Text style={styles.buttonTextLogin}>สมัครสมาชิก</Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f4eeee',
  },
  inputContainer: {
    borderBottomColor: 'black', // สีของเส้นขอบ input
    borderBottomWidth: 5, // กว้างขอบเส้นขอบ
    borderColor:'black',
    height: 40, // ความสูงของ TextInput
    fontSize: 16, // ขนาดตัวอักษร
    marginVertical: 10, // ระยะห่างด้านบนและด้านล่าง
    paddingLeft: 10, // ระยะห่างจากขอบซ้าย
  },
  button_login:{
    height: 50,
    width: 300,
    backgroundColor: '#3f2406',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
  },
  buttonTextLogin: {
    color: '#f4eeee',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTextRegister: {
    color: '#3f2406',
    fontSize: 18,
    fontWeight: 'bold',
  }

})

export default RegisterScreen;