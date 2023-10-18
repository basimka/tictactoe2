import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native';
import { MaterialCommunityIcons as Icon} from 'react-native-vector-icons';


export default class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      gameState: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ],
      currentPlayer: 1,
    }
  }

  componentDidMount() {
    this.initializeGame();
  }

  initializeGame = () => {
    this.setState({gameState:
    [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ],
    currentPlayer: 1,
    });
  }
  // Return 1 if player 1 WIN, return -1 if Player 2 WIN, return 0 if no one has wone
  getWinner = () => {
    const NUM_TILES = 3;
    var arr = this.state.gameState;
    var sum;


    //chek rows
    for (var i = 0 ; 1 < NUM_TILES; i++){
      sum = arr[i][0] + arr [i][1] + arr[i][2];
      if (sum == 3) {return 1;}
      else if (sum == -3) {return -1}
    }

    //chek columns
    for (i=0; 1< NUM_TILES; i++){
      sum = arr[0][i] + arr [1][i] + arr [2][i];
      if (sum == 3) {return 1;}
      else if (sum == -3) {return -1}

    }

    //check the diagonals
    sum = arr[0][0] + arr [1][1] + arr [2][2];
    if (sum == 3) {return 1;}
    else if (sum == -3) {return -1}

    sum = arr[2][0] + arr [1][1] + arr [0][2];
    if (sum == 3) {return 1;}
    else if (sum == -3) {return -1}

    //the are no winners
    return 0;

  }

  onTilePress = (row,col) =>{

    //dont allow tiles to change...
    var value = this.state.gameState[row][col];
    if (value !== 0) { returGn; }
    
    var currentPlayer = this.state.currentPlayer;
    
    //set the correct tile...
    var arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState:arr});

    //switch to other tile...
    var nextPlayer = (currentPlayer == 1) ? -1:1;
    this.setState({currentPlayer: nextPlayer});

    //check for winners
    var winner = this.getWinner();
    if (winner == 1){
      Alert.alert("One player is Winner!!!")
      this.initializeGame();
      
    } else if (winner == -1){
      Alert.alert("Player is Two winner!!!")
      this.initializeGame();
    }
  }

  onNewGamePress = () => {
    this.initializeGame();
  }

  renderIcon = (row,col) => {
    var value = this.state.gameState[row][col];
    switch(value) {
      case 1: return <Icon name='close' style={styles.tileX}/>;
      case -1: return <Icon name='circle-outline' style={styles.tileO}/>
      default: return <view />
    }
  }


  
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>TIC-TAC-TOE!!!</Text>

        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={()=> this.onTilePress(0,0)} style={[styles.tile, {borderLeftWidth:0, borderTopWidth:0}]}>
            {this.renderIcon(0,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onTilePress(0,1)} style={[styles.tile, {borderTopWidth:0}]}>
            {this.renderIcon(0,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onTilePress(0,2)} style={[styles.tile, {borderRightWidth:0, borderTopWidth:0}]}>
            {this.renderIcon(0,2)}
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={()=> this.onTilePress(1,0)} style={[styles.tile, {borderLeftWidth:0}]}>
            {this.renderIcon(1,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onTilePress(1,1)} style={[styles.tile]}>
            {this.renderIcon(1,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onTilePress(1,2)} style={[styles.tile, {borderRightWidth:0}]}>
            {this.renderIcon(1,2)}
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={()=> this.onTilePress(2,0)} style={[styles.tile, {borderLeftWidth:0, borderBottomWidth:0}]}>
            {this.renderIcon(2,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onTilePress(2,1)} style={[styles.tile, {borderBottomWidth:0}]}>
            {this.renderIcon(2,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onTilePress(2,2)} style={[styles.tile, {borderRightWidth:0, borderBottomWidth:0}]}>
            {this.renderIcon(2,2)}
          </TouchableOpacity>
        </View>

        <View style={{paddingTop:50}}/>

        <Button title='New Game!' onPress={this.onNewGamePress} />
        

        <StatusBar style="auto" />
      </View>
    );
  }
}

/**СТИЛИ**/
const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
    color: 'red',
    fontSize: 50,
  },
  tile:{
    borderWidth: 5,
    width: 100,
    height: 100,
  },
  tileX:{
    color: 'red',
    fontSize: 60,
    alignItems: 'center',
    justifyContent:'center',

  },
  tileO:{
    color: 'green',
    fontSize: 60,
    alignItems: 'center',
    justifyContent:'center',
  }
});
