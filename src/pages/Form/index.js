import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Picker, BackHandler} from 'react-native';
import { playerService } from '../../services/playerService';
import * as _ from 'lodash';
import { bindComponent } from '../../operators/bindComponent';
import { take } from 'rxjs/operators';

export default class Form extends Component {

  constructor(){
    super();
    this.state = {informationsPlayer: {}};
  }

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', () => {
      console.log('Sorry, you can not back on this screen');
      return true;
    });
  }

  changeName = (event) => {
    playerService.getInformationsPlayer()
      .pipe(take(1), bindComponent(this))
      .subscribe(data => {
        const name = {name: event};
        newData = _.merge(data, name);
        this.setState({informationsPlayer: newData});
        playerService.informationsPlayer$.next(newData);
      });
  }

  changeGender = (event) => {
    playerService.getInformationsPlayer()
      .pipe(take(1), bindComponent(this))
      .subscribe(data => {
        const gender = {gender: event};
        newData = _.merge(data, gender);
        this.setState({informationsPlayer: newData});
        playerService.informationsPlayer$.next(newData);
      });
  }

  changeAge = (event) => {
    playerService.getInformationsPlayer()
      .pipe(take(1), bindComponent(this))
      .subscribe(data => {
        const age = {age: event};
        newData = _.merge(data, age);
        this.setState({informationsPlayer: newData});
        playerService.informationsPlayer$.next(newData);
      });
  }

  changeResponsible = (event) => {
    playerService.getInformationsPlayer()
      .pipe(take(1), bindComponent(this))
      .subscribe(data => {
        const responsible = {responsible: event};
        newData = _.merge(data, responsible);
        this.setState({informationsPlayer: newData});
        playerService.informationsPlayer$.next(newData);
      });
  }
  navigate = () => {
    const informationsPlayer = this.state.informationsPlayer;
    if(!informationsPlayer.name || 
        !informationsPlayer.gender ||
        informationsPlayer.gender == 'none' ||
        !informationsPlayer.age ||
        !informationsPlayer.responsible
      ){
        this.setState({errMsg: 'Não pode haver nenhum campo sem preenchimento =)'})
        return;
      }else{
        this.props.navigation.navigate('Character');
      }
  }

  render() {
    const {informationsPlayer, errMsg} = this.state
    return (
      <View style={styles.container}>

        <Text  style={[styles.text, {
            fontFamily: "KidsZone",
            fontSize: 28,
            letterSpacing: 2,
            marginBottom: 40,
            color: '#FFF',
            textShadowColor: '#000',
            textShadowOffset: {width: -1, height: -1},
            textShadowRadius: 5  
          }]}>
            Sobre Você
          </Text>
      
        <View style={styles.formContent}>
          <TextInput
            style={[styles.text, {
              fontFamily: "AmaticSC-Bold",
              fontSize: 18,
              letterSpacing: 2,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#000',
              color: '#000',
              marginLeft: 5,
            }]}
            placeholder={'Nome'}
            placeholderTextColor={'#000'}
            onChangeText={this.changeName}
          />

          <View style={[styles.text, {
              fontFamily: "AmaticSC-Bold",
              fontSize: 18,
              letterSpacing: 2,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#000',
            }]}>
            <Picker
              selectedValue={informationsPlayer.gender || ''}
              style={styles.selectInput}
              mode={'dialog'}
              onValueChange={(itemValue, itemIndex) => this.changeGender(itemValue)}>
              <Picker.Item enabled={false} color={'#000'} label="Sexo" value="none" />
              <Picker.Item color={'#000'} label="Masculino" value="Masculino" />
              <Picker.Item color={'#000'} label="Feminino" value="Feminino" />
            </Picker>
          </View>
          
          <TextInput
            keyboardType={'numeric'}
            style={[styles.text, {
              fontFamily: "AmaticSC-Bold",
              fontSize: 18,
              letterSpacing: 2,
              borderRadius: 5,
              borderWidth: 1,
              color:'#000',
              borderColor: '#000',
            }]}
            placeholder={'Idade'}
            placeholderTextColor={'#000'}
            onChangeText={this.changeAge}
            
          />

          <TextInput
            style={[styles.text, {
              fontFamily: "AmaticSC-Bold",
              fontSize: 18,
              letterSpacing: 2,
              borderRadius: 5,
              borderWidth: 1,
              color:'#000',
              borderColor: '#000',
            }]}
            placeholder={'Responsável'}
            placeholderTextColor={'#000'}
            onChangeText={this.changeResponsible}
          />
        <Text style={[styles.text, {
            fontFamily: "AmaticSC-Bold",
            fontSize: 18,
            letterSpacing: 2,
            color: 'red' 
          }]}
        >
          {errMsg}
        </Text>
        <TouchableOpacity onPress={this.navigate} style={styles.btnContinue}>
          <Text style={[styles.text, {
              fontFamily: "KidsZone",
              fontSize: 18,
              letterSpacing: 2,
              color: '#FFF',
              textShadowColor: '#000',
              textShadowOffset: {width: -1, height: -1},
              textShadowRadius: 5 
            }]}>
            Próximo
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#3DFFB7',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
    height: '100%'
  },
  formTitle:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40
  },
  formContent:{
    width: 250,
    height: 350,
    justifyContent: 'space-between',
  },
  selectInput:{
    color: '#000',
  },
  btnContinue:{
    borderRadius: 5,
    borderWidth: 1,
    height: 42,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#876CE4',
  },
  btnContinueText: {
    color: '#FFF',
  },
  errMsg:{
    fontSize: 12,
    color: 'red'
  },
});
