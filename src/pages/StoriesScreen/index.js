import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, Modal, ImageBackground, ScrollView, BackHandler, Alert} from 'react-native';
import stories from '../../stories';
import { storyService } from '../../services/storyService';
import { playerService } from '../../services/playerService';
import { bindComponent } from '../../operators/bindComponent';

export default class StoriesScreen extends Component {

  constructor(){
    super();
    this.state = {modalVisible: false, previewStory: undefined};
  }

  componentDidMount(){
    playerService.getCharacter()
    .pipe(bindComponent(this))
    .subscribe(c => this.setState({char: c}));
  }

  navigate = () => {
    const story = this.state.previewStory;
    storyService.setStory(story);
    this.closeModal();
    this.props.navigation.navigate('Main');
  }

  closeModal = () => {
    this.setState({modalVisible: false})
  }

  previewStory = (story) => {
    this.setState({previewStory: story, modalVisible: true})
  }

  render() {
    const {char, previewStory} = this.state;
    return (
      <View style={styles.container}>
         <Text style={[styles.text, {
          fontFamily: "KidsZone",
          fontSize: 28,
          letterSpacing: 2,
          textAlign: 'center',
          color: '#FFF',
          textShadowColor: '#000',
          textShadowOffset: {width: -1, height: -1},
          textShadowRadius: 10
        }]}
        >
          Selecione uma História
        </Text>
        <ScrollView>

          <View style={styles.stories}>
            {stories.map((story, key) => {
                return(
                  <TouchableOpacity key={key} style={styles.btnStories} onPress={this.previewStory.bind(this, story)}>
                      <ImageBackground  
                          resizeMode='stretch'
                          style={styles.imageBackground}
                          source={char == 'pedrinho' ? story.imgP : story.imgA}
                      >
                          <Text style={[styles.text, {
                            fontFamily: "KidsZone",
                            fontSize: 18,
                            letterSpacing: 2,
                            color: '#FFF',
                            textShadowColor: '#000',
                            padding: 10,
                            textShadowOffset: {width: -1, height: -1},
                            textShadowRadius: 5
                          }]}
                          >
                            {story.title}
                          </Text>
                      </ImageBackground>
                    </TouchableOpacity>
                );
              })}
            </View>
        </ScrollView>

        {previewStory ? 
          <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}
          >
            <View style={styles.containerModal}>

                <View style={styles.imagesModal}>
                  <Image
                   resizeMode='stretch'
                   style={styles.imageModal}
                   source={char == 'pedrinho' ? require("../../imagens/on_the_car_p.jpeg") : require("../../imagens/on_the_car_a.jpeg")}
                  />
                  <Image
                   resizeMode='stretch'
                   style={styles.imageModal}
                   source={char == 'pedrinho' ? require("../../imagens/at_the_school_p.jpeg") : require("../../imagens/at_the_school_a.jpeg")}
                  />
                  <Image
                   resizeMode='stretch'
                   style={styles.imageModal}
                   source={char == 'pedrinho' ? require("../../imagens/dont_do_anything_p.jpeg") : require("../../imagens/dont_do_anything_a.jpeg")}
                  />
                </View>
              <ScrollView>
                <View style={styles.titleWithBtns}>
                  <Text style={[styles.text, {
                      fontFamily: "KidsZone",
                      fontSize: 38,
                      letterSpacing: 2,
                      color: '#FFF',
                      alignSelf: 'center'
                    }]}
                  >
                    {previewStory.title}
                  </Text>
                  <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={styles.btnContinue} onPress={this.navigate}>
                        <Text style={[styles.text, {
                          fontFamily: "KidsZone",
                          fontSize: 18,
                          letterSpacing: 2,
                          color: '#FFF',
                          textShadowColor: '#000',
                          textShadowOffset: {width: -1, height: -1},
                          textShadowRadius: 5,
                        }]}>
                          Selecionar
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.btnCancel}onPress={this.closeModal}>
                        <Text style={[styles.text, {
                          fontFamily: "KidsZone",
                          fontSize: 18,
                          letterSpacing: 2,
                          color: '#FFF',
                          textShadowColor: '#000',
                          textShadowOffset: {width: -1, height: -1},
                          textShadowRadius: 5,
                        }]}>
                          Voltar
                        </Text>
                      </TouchableOpacity>

                  </View>
                </View>
                <View style={{justifyContent: 'space-around'}}>
                    <Text style={[styles.text, {
                        fontFamily: "AmaticSC-Bold",
                        fontSize: 28,
                        letterSpacing: 2,
                        color: '#FFF',
                        textAlign: 'justify'
                      }]}
                    >
                      {char == 'pedrinho' ? previewStory.descriptionP : previewStory.descriptionA}
                    </Text>
                </View>
              </ScrollView>
            </View>
          </Modal>
      :null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#3DFFB7',
  },
  containerModal:{
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#1b212e',
  },
  stories:{
    height: '100%',
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  characterName:{
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 3
  },
  btnStories:{
    borderRadius: 5,
    borderWidth: 2,
    width: 250,
    height: 270,
    backgroundColor: '#FCF6DE',
    borderColor: '#000',
    marginTop: 20,
    alignSelf: 'center',
  },
  imageBackground:{
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
  imageModal:{
    width: '33%',
    height: '100%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  imagesModal:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FCF6DE',
    padding: 3,
    height: 170
  },
  scrollView:{
    width: '100%',
  },

  btnContinue:{
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#68d23f',
  },
  btnCancel:{
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: 'red',
  },

  titleWithBtns:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
    height: 110,
  }
});
