import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Button} from 'native-base';
 
 var myBackground = require('../assets/landing.jpg')
 class Landing extends React.Component{
 	 render(){
 	 	return (
 	 		 <View  style = {styles.container}>
		     	 <ImageBackground source = {myBackground} style = {styles.image} >
		          <View style={styles.viewStyle}>
		            <Text> Welcome to pokesearch </Text>
		            <Button 
		              block = {true}
		              style = {styles.buttonStyle}
		              onPress = {()=>this.props.switchScreen("search")}
		            >
		             <Text style = {styles.buttonText}>Start Searching</Text>
		            </Button>
		          </View>
		     	 </ImageBackground>
   			 </View>
 	 	)
 	 }
 }
const styles = {
	 container: {
	    flex: 1,
	    marginTop : 0

     },
	viewStyle : {
	    flex : 1,
	    flexDirection : 'column',
	    justifyContent : 'center',
	    alignItems : 'center'
	},
	image : {
	    flex: 1,
	    resizeMode: "cover",
	    justifyContent: "center"
	},
	buttonStyle : {
	    margin : 20
	},
	buttonText : {
	    color : 'white'
	}
}

 export default Landing;