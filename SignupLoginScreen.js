import firebase from 'firebase';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, Alert } from 'react-native';


export default class SignupLoginScreen extends React.Component {
constructor(){
    super();
    this.state={
        username:'',
        password:''
    }
}

userLogin=(username,password)=>{
    firebase.auth().signInWithEmailAndPassword(username,password)
    .then(()=>{
        return Alert.alert("Successfully Login")
    })
    .catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
    });
}

userSignUp = (username,password)=>{
    firebase.auth().createUserWithEmailAndPassword(username,password)
    .then((response)=>{
        return Alert.alert("User added successfully")
    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
    });
}
    render(){
      return(
        <View style={styles.container}>
            <Text style={{
                backgroundColor:'orange',
                marginBottom:100,
                width:1280,
                height:50,
                alignSelf: 'center',
                justifyContent: 'center',
                }}>Barter App</Text>

            <TextInput
            style={styles.txtInput}
          placeholder="Type your username"
          keyboardType="email-address"
          onChangeText={(text)=>{
              this.setState({
                  email:text
              })
          }}
          />

            <TextInput
            style={styles.txtInput}
          placeholder="Type your password"
          secureTextEntry="true"
          onChangeText={(text)=>{
              this.setState({
                  password:text
              })
          }}
          />
            <TouchableOpacity
            style={styles.btn}
            onPress={()=>{this.userLogin(this.state.username,this.state.password)}}
            >
            <Text style={{marginTop:40}}>Login</Text>
            </TouchableOpacity>



            <TouchableOpacity
            style={styles.btn}
            onPress={()=>{this.userSignUp(this.state.username,this.state.password)}}
            >
            <Text style={{marginTop:40}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      )
    }
  }



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn:{
        backgroundColor: 'cyan',
        width:100,
        height:100,
        borderRadius:50,
        alignItems: 'center',
        marginTop:10
    },
    txtInput:{
        borderWidth:1.5,
        marginTop:5
    }
  });