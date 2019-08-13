import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal, ImageBackground, Image, ScrollView} from 'react-native';
import { playerService } from '../../services/playerService';

const pedrinhoDescription = `Pedrinho é uma criança muito legal, ele tem 9 anos e adora brincar.
Pedrinho não gosta muito da escola, e recentemente perdeu seu cachorrinho de estimação.
Estão sendo dias ruins para Pedrinho.`

const aninhaDescription = `Aninha é uma criança muito divertida, ela tem 9 anos e adora brincar.
Aninha não gosta muito da escola, e recentemente perdeu seu cachorrinho de estimação.
Estão sendo dias ruins para Aninha.`

export default class Character extends Component {

  constructor(){
    super();
    this.state = {previewCharacter: undefined, modalVisible: false};
  }

  navigate = () => {
    const character = this.state.previewCharacter;
    playerService.setCharacter(character);
    this.closeModal();
    this.props.navigation.navigate('StoriesScreen');
  }

  previewCharacter = (character) => {
    this.setState({previewCharacter: character, modalVisible: true})
  }

  closeModal = () => {
    this.setState({modalVisible: false})
  }

  render() {
    const {previewCharacter} = this.state;
    return (
      <View style={styles.container} >
        <Text style={[styles.text, {
          fontFamily: "KidsZone",
          fontSize: 28,
          letterSpacing: 2,
          color: '#FFF',
          textShadowColor: '#000',
          textShadowOffset: {width: -1, height: -1},
          textShadowRadius: 5,
          textAlign: 'center'
        }]}>
          Selecione um personagem
        </Text>
    
        <ScrollView style={styles.scrollView}>
          <View style={styles.characters}>
              <TouchableOpacity style={styles.btnCharacter} onPress={this.previewCharacter.bind(this, 'pedrinho')}>
                <ImageBackground
                  resizeMode='stretch'
                  style={styles.ImageBackground}
                  source={require('../../imagens/pedrinho.jpeg')}
                >
                  <Text style={[styles.text, {
                    fontFamily: "KidsZone",
                    fontSize: 18,
                    letterSpacing: 2,
                    paddingBottom: 3,
                    color: 'red',
                    textShadowColor: '#000',
                    textShadowOffset: {width: -1, height: -1},
                    textShadowRadius: 5,
                    padding: 10
                  }]}>
                      Pedrinho
                  </Text>

                </ImageBackground>

              </TouchableOpacity>

              <TouchableOpacity style={styles.btnCharacter} onPress={this.previewCharacter.bind(this, 'aninha')}>
                <ImageBackground
                  resizeMode='stretch'
                  style={styles.ImageBackground}
                  source={require('../../imagens/aninha.png')}
                >
                  <Text style={[styles.text, {
                    fontFamily: "KidsZone",
                    fontSize: 18,
                    letterSpacing: 2,
                    paddingBottom: 3,
                    color: '#f483b6',
                    textShadowColor: '#000',
                    textShadowOffset: {width: -1, height: -1},
                    textShadowRadius: 5,
                    padding: 10
                  }]}>
                      Aninha
                  </Text>

                </ImageBackground>

              </TouchableOpacity>
          </View>
        </ScrollView>

          
        {previewCharacter ? 
          <Modal
              animationType="slide"
              presentationStyle='fullScreen'
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
                    source={previewCharacter == 'pedrinho' ? require("../../imagens/pedrinho.jpeg") : require("../../imagens/aninha.png")}
                    />
                    <Image
                    resizeMode='stretch'
                    style={styles.imageModal}
                    source={previewCharacter == 'pedrinho' ? require("../../imagens/stay_at_home_p.jpeg") : require("../../imagens/stay_at_home_a.jpeg")}                   
                    />
                    <Image
                    resizeMode='stretch'
                    style={styles.imageModal}
                    source={previewCharacter == 'pedrinho' ? require("../../imagens/tell_to_teacher_p.jpeg") : require("../../imagens/tell_to_teacher_a.jpeg")}                   
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
                      {previewCharacter == 'pedrinho' ? 
                        `Pedrinho`
                        : `Aninha`
                      }
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

                      <TouchableOpacity style={styles.btnCancel} onPress={this.closeModal}>
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
                        {previewCharacter == 'pedrinho' ? 
                          pedrinhoDescription
                          : aninhaDescription
                        }
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
  characters:{
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
  btnCharacter:{
    borderRadius: 5,
    borderWidth: 2,
    width: 250,
    height: 270,
    backgroundColor: '#FCF6DE',
    borderColor: '#000',
    marginTop: 20,
    alignSelf: 'center',
  },
  img:{
    width: '100%',
    maxHeight: 180,
    resizeMode:'stretch'
  },

  ImageBackground:{
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
  ImageBackgroundModal:{
    width: '100%',
    height: '100%',
  },

  scrollView:{
    width: '100%',
  },
  imagesModal:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FCF6DE',
    padding: 3,
    height: 170
  },
  imageModal:{
    width: '33%',
    height: '100%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FAFAFA',
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
