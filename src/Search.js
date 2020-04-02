//import stuff
import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Header, Icon, Input, Item, Button} from 'native-base'; 
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';
import axios from 'axios';

 class Search extends React.Component{
 	state = {
 		pokeSearch : "",
 		onCall : true
 	}
 	searchPoke =() => {
 		this.setState({onCall : true});
 		axios.get("http://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch.toLowerCase())
 		.then(function(response){
 			console.log(response.data)
 		});
 	}

 	renderBody = () => {
 		if(this.state.onCall){
 			return(
 				<PokeLoader />
 			)
 		}else {
 			return(
 				<searchBody />
 			)
 		}
 	}
 	 render(){
 	 	return (
 	 		 <View  style = {{flex:1}}>
		     	 <Header
		     	 	searchBar
		     	 	rounded
		     	 >
		     	 <Item>
		     	 	<Icon name = 'ios-search' onPress = {this.searchPoke}/>
		     	 	<Input 
			     	 	value = {this.state.pokeSearch}
			     	 	placeholder = "search pokemon"
			     	 	onChangeText = {(pokeSearch)=>this.setState({pokeSearch})}
			     	 />
		     	 </Item>

		     	 </Header>
		     	 {this.renderBody()}
   			 </View>
 	 	)
 	 }
 }
const styles = {
	 container: {
	    flex: 1,
	    flexDirection : 'column',
	    justifyContent : 'center',
	    alignItems : 'center'
	   

     },
     textStyle : {
     	margin : 10
     	 
     }
}




export default Search;