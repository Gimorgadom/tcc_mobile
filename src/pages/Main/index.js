import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import { storyService } from '../../services/storyService';
import { bindComponent } from '../../operators/bindComponent';
import { playerService } from '../../services/playerService';

export default class Main extends Component {

    constructor(){
        super();
        this.state = {story: undefined, character: undefined};
    }

    componentDidMount(){
        storyService.getStory()
        .pipe(bindComponent(this))
        .subscribe(story => {
                storyService.actualVertice$.next(story.vertices[0])
                this.setState({story})
            }
        );

        playerService.getCharacter()
          .pipe(bindComponent(this))
          .subscribe(c => this.setState({character: c}));
    }

    init = () => {
        storyService.nextVertice('A');  
        this.props.navigation.navigate('GameScreen');
      }
    
    navigateStories = () => {
        this.props.navigation.navigate('StoriesScreen');
    }

    navigateCharacter = () => {
      this.props.navigation.navigate('Character');
    }

  render() {
      if(!this.state.story){
          return null;
      }

      const {story, character} = this.state;
    return (
        <ImageBackground
            style={styles.image}
            source={character == 'pedrinho' ? story.imgP : story.imgA} 
            resizeMode='stretch'
        >     
            <View style={styles.container}>
                        
                <View style={styles.options}>
                    <TouchableOpacity onPress={this.init} style={styles.btnOption}>
                      <Text style={[styles.text, {
                        fontFamily: "KidsZone",
                        fontSize: 28,
                        color: '#FFF',
                        letterSpacing: 2,
                        textShadowColor: '#000',
                        textShadowOffset: {width: -1, height: -1},
                        textShadowRadius: 10
                      }]}
                      >
                        Iniciar
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.navigateStories} style={styles.btnOption}>
                    <Text style={[styles.text, {
                        fontFamily: "KidsZone",
                        fontSize: 28,
                        letterSpacing: 2,
                        color: '#FFF',
                        textShadowColor: '#000',
                        textShadowOffset: {width: -1, height: -1},
                        textShadowRadius: 10
                      }]}
                      >
                        Histórias
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.navigateCharacter} style={styles.btnOption}>
                    <Text style={[styles.text, {
                        fontFamily: "KidsZone",
                        fontSize: 28,
                        letterSpacing: 2,
                        color: '#FFF',
                        textShadowColor: '#000',
                        textShadowOffset: {width: -1, height: -1},
                        textShadowRadius: 10
                      }]}
                      >
                        Personagens
                      </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
container:{
    height: '100%',
    justifyContent: 'flex-end'
},

  options:{
    alignItems: 'center',
    paddingBottom: 20,
  },
  btnOption:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#44131a',
    backgroundColor: '#876CE4',
    margin: 5
  },
  textOption:{
    fontSize: 22,
    color: '#000'  
  },

  image:{
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
