import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Ourtodo = (props) => {

  return (
    <View style={{ backgroundColor: '#ffffff',padding: 15,borderRadius: 10,flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',
    marginBottom: 20,}}>
      <View style={{ flexDirection: 'row',alignItems: 'center',flexWrap: 'wrap'}}>
        <View style={styles.box}></View>
        <Text style={{maxWidth: '82%'}}>{props.text}</Text>
      </View>
      <View style={styles.box2}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 26,
    height: 26,
    backgroundColor: '#d9d9d9',
    opacity: 0.4,
    borderRadius: 8,
    marginRight: 18,
  },
  box2: {
    width: 14,
    height: 14,
    borderColor: '#d9d9d9',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor:'#d9d9d9'
  },
});

export default Ourtodo;