
import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, Vibration, TouchableHighlight} from 'react-native';
import { storyService } from '../../services/storyService';
import { relatoryService } from '../../services/relatoryService';
import { bindComponent } from '../../operators/bindComponent';
import { playerService } from '../../services/playerService';
import Sound from 'react-native-sound';
import { audioService } from '../../services/audioService';
import {filter, combineLatest, take, tap} from 'rxjs/operators'

Sound.setCategory('Playback');

export default class GameScreen extends Component {
    constructor(){
        super();
        this.state = {actualVertice: undefined, character: undefined, timeInit: undefined, isAudioPlaying: true, duration: undefined}
    }
    componentDidMount(){

        audioService.setIsAudioPlaying(true);        

        
        storyService.getActualVertice()
            .pipe(
                combineLatest(playerService.getCharacter()),
                filter(([actualVertice, character]) => !!actualVertice && !!character),
                bindComponent(this)
            )
            .subscribe(([actualVertice, character]) => {
                this.setState({character});
                const time = new Date().getTime(); 
                this.setState({timeInit: time});
                this.setState({actualVertice});

                if(actualVertice.midia.audiosScene.length > 0 && !!character){
                    // audioService.setAudiosScene(actualVertice.midia.audiosScene);
                    // audioService.setAudiosDescriptionScene(actualVertice.midia.descriptionScene, character);
                    audioService.playDescriptionScene(actualVertice, character);
                    audioService.playAudiosScene(actualVertice);
                }
            });

            audioService.isAudioPlaying()
            .pipe(
                bindComponent(this)
            )
                .subscribe(isAudioPlaying => {
                    this.setState({isAudioPlaying});
            })

            audioService.getDurationScene()
            .pipe(
                filter(duration => !!duration),
                bindComponent(this)
            )
                .subscribe(duration => {
                    this.setState({duration});
                });


        playerService.getCharacter()
            .pipe(bindComponent(this))
            .subscribe(character => this.setState({character}));
    }

    finish = async () => {
        
        
        try{
            await relatoryService.sendRelatory();
            audioService.stopAudiosScene(this.state.actualVertice);
            this.props.navigation.navigate('Main');

        }catch(err){
            console.log(err);
        }

    }

    nextVertice = (aresta) => {
        audioService.stopAudiosScene(this.state.actualVertice);
        audioService.setIsAudioPlaying(true);

        const {actualVertice, character, timeInit} = this.state;
        
        Vibration.vibrate(300);
        const data = {
            situation: character == 'aninha' ? actualVertice.textA : actualVertice.textP
            , answer: aresta.text
            , time: Math.trunc(((new Date().getTime() - timeInit)/1000) - this.state.duration)
        }
        storyService.nextVertice(aresta.destiny);
        relatoryService.setRelatory(data);
    }

    playAgain = () => {
        const {actualVertice, character} = this.state;
        audioService.setIsAudioPlaying(true);        
        audioService.playDescriptionScene(actualVertice, character);
    }

    render(){
        if(!this.state.actualVertice){
            return null;
        }

        const {actualVertice, character, isAudioPlaying} = this.state;
        return(
        <ImageBackground 
            style={styles.image}
            source={character == 'aninha' ? actualVertice.imgA : actualVertice.imgP} 
            resizeMode='stretch'
        >
            <View style={styles.container}>
            <View>
                {!isAudioPlaying ? 
                <View 
                    style={styles.audio}
                >
                    <TouchableHighlight
                        onPress={this.playAgain} 
                    >
                        <Image 
                            style={styles.playButton}
                            source={require('../../imagens/play_button.png')}
                        />  
                    </TouchableHighlight>
                </View>
                : 
                <View style={styles.audio}>
                    <Image
                        style={styles.reproducingButton}
                        source={require('../../imagens/reproducing_button.png')}
                    />
                </View>
            }
            </View>
            {/* <View style={styles.descriptionScroll}>
                <ScrollView style={styles.textContent}>
                    <View style={styles.description}>
                            <Text style={[styles.text, {
                                fontFamily: "KidsZone",
                                fontSize: 20,
                                color: '#FFFF00',
                                letterSpacing: 2,
                            }]}
                            >
                                {character == 'aninha' ? actualVertice.textA : actualVertice.textP}
                            </Text>
                    </View>
                </ScrollView>
                <View style={styles.triangleDiv}>
                    <View style={styles.triangleTop} />
                    <View style={styles.triangleBot}/>
                </View>
            </View> */}
                <View style={styles.containerImage}>
                </View>
                <View style={styles.options}>
                    {actualVertice.arestas.length > 0  && !isAudioPlaying
                    ? actualVertice.arestas.map((aresta, key) => {
                        return(
                            <TouchableOpacity 
                                key={key} 
                                onPress={this.nextVertice.bind(this, aresta)} 
                                style={styles.btnOption}
                            >
                                <Text style={[styles.text, {
                                    fontFamily: "KidsZone",
                                    fontSize: 18,
                                    color: '#FFF',
                                    letterSpacing: 2,
                                    textAlign: 'center',
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                    paddingTop: 5,
                                    paddingBottom: 5
                                }]}
                                >
                                    {aresta.text}
                                </Text>
                            </TouchableOpacity>
                            );
                        }) : null}
                    {actualVertice.arestas.length < 1 && !isAudioPlaying
                    ?
                        <TouchableOpacity 
                            onPress={this.finish} 
                            style={styles.btnOption}
                        >
                            <Text style={[styles.text, {
                                    fontFamily: "KidsZone",
                                    fontSize: 18,
                                    color: '#FFF',
                                    letterSpacing: 2,
                                    textAlign: 'center',
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                    paddingTop: 5,
                                    paddingBottom: 5
                            }]}
                            >
                                Inicio</Text>
                        </TouchableOpacity> 
                    : null}
                </View>
            </View>
        </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center'
    },
    container:{
        height: '100%',
        justifyContent: 'space-between',
    },
    descriptionScroll:{
        flexDirection: 'row',
        maxHeight: 90,
        marginTop: 20,
        marginBottom: 20,
        paddingRight: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    textContent:{
        // maxHeight: 90,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    description:{
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        color: '#fff', 
        width: '95%'       
    },
    text:{
        fontSize: 22,
        color: '#fff',
        textShadowColor: '#000',
        textShadowOffset: {width: -1, height: -1},
        textShadowRadius: 10
    },
    options:{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 20,
      },
      
      btnOption:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        minHeight: 50,
        borderRadius: 5,
        borderColor: '#ccc',
        backgroundColor: '#876CE4',
        margin: 5
      },
      textOption:{
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        paddingLeft: 5,
        paddingRight: 5
      },


      image:{
        width: '100%',
        height: '100%',
      },

      triangleTop:{
        width: 0,
        height: 0,
        borderWidth: 13,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: '#000',
        marginBottom: 5,
        shadowColor: 'red',
      },

      triangleBot:{
        width: 0,
        height: 0,
        borderWidth: 13,
        borderTopColor: 'transparent',
        borderRightColor: '#000',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent'
      },

      triangleDiv: {
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'column'
      },

      audio: {
        maxWidth: 50,
        maxHeight: 50,
        marginTop: 20,
        marginLeft: 20,
        alignItems: 'center'
      },

      playButton:{
        width: 35,
        height: 35,
      },
      reproducingButton:{
        width: 30,
        height: 30,
      }
    });