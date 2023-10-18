import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>tHIS IS GAME TIC TAC TOE!!!</Text>
      
      <View style={{flexDirection:"row"}}>
        <View style={[styles.tile, {borderLeftWidth: 0, borderTopWidth:0}]} />
        <View style={[styles.tile, {borderTopWidth: 0}]} />
        <View style={[styles.tile, {borderTopWidth:0, borderRightWidth:0}]} />
      </View>

      <View style={{flexDirection:"row"}}>
        <View style={[styles.tile, {borderLeftWidth:0}]} />
        <View style={[styles.tile]} />
        <View style={[styles.tile,{borderRightWidth:0}]} />
      </View>

      <View style={{flexDirection:"row"}}>
        <View style={[styles.tile, {borderLeftWidth:0, borderBottomWidth:0}]} />
        <View style={[styles.tile, {borderBottomWidth:0}]} />
        <View style={[styles.tile, {borderRightWidth:0, borderBottomWidth:0}]} />
      </View>


      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile:{
    borderWidth: 15,
    width:100,
    height:100,
  },
  tileX:{
    color: 'red',
  }
});
