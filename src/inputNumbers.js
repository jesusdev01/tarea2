import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

class InputNumber extends React.Component{
  constructor(props){
    super(props);
    
  }
  render(){
    const {value,handleOnPress}=this.props;
  return (
      <TouchableOpacity 
        style={styles.container}
        onPress={()=>handleOnPress(value)}>
          <Text style={styles.text}>{value}</Text>
      </TouchableOpacity>
  );
}}

const styles = StyleSheet.create({
    container:{
      flex : 1,
      margin:1,
      backgroundColor: "red",
      justifyContent:'center',
      alignItems:'center',
    },
    text:{
      color:"white",
      fontSize:26
    }
  });

export default InputNumber;
