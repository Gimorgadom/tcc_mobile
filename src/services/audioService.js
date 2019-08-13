import rxjs, { BehaviorSubject } from "rxjs";
import Sound from 'react-native-sound';
import {filter, of, take, combineAll, combineLatest} from 'rxjs/operators'
import { bindComponent } from '../operators/bindComponent';
import {DESCRIPTION_SCENE_AUDIOS, SCENE_AUDIOS} from '../../audios';
import { storyService } from "./storyService";
import { playerService } from "./playerService";

Sound.setCategory('Playback');



export class AudioService {
    audiosScene$ = new BehaviorSubject([]);
    descriptionScene$ = new BehaviorSubject({});
    isAudioPlaying$ = new BehaviorSubject(true);
    durationScene$ = new BehaviorSubject(undefined);

    setDurationDescription = (duration) => {
        this.durationScene$.next(duration);
    }

    getDurationScene = () => {
        return this.durationScene$.asObservable();
    }

     setIsAudioPlaying = (boolean) => {
        this.isAudioPlaying$.next(boolean);
    }

    isAudioPlaying = () => {
        return this.isAudioPlaying$.asObservable();
    }

    
    playAudiosScene = (vertice) => {
        const audio = vertice.midia.audiosScene.map(a => {
            return SCENE_AUDIOS.find(scene_audio => scene_audio.name == a.audio)
        })

        audio.map(a => {
            a.audio.setNumberOfLoops(2).play(success => {
                if (success) {
                    console.log('successfully finished playing');
                    } else {
                    console.log('Falhou para reproduzir som ambiente');
                    }
            })
        })
    }

    stopAudiosScene = (vertice) => {
        const audio = vertice.midia.audiosScene.map(a => {
            return SCENE_AUDIOS.find(scene_audio => scene_audio.name == a.audio)
        })

        audio.map(a => {
            a.audio.stop()
        })
    }



    playDescriptionScene = (vertice, character) => {

        if(character == 'pedrinho'){
            const audio = DESCRIPTION_SCENE_AUDIOS.find(audio => audio.name == vertice.midia.descriptionScene.audioP)
            this.setDurationDescription(audio.audio.getDuration());                    
            audio.audio.play(success => {
                if (success) {
                    this.setIsAudioPlaying(false);                
                    console.log('successfully finished playing');
                    } else {
                    console.log('Falhou para reproduzir som ambiente');
                    }
            })
        }
        if(character == 'aninha'){
            const audio = DESCRIPTION_SCENE_AUDIOS.find(audio => audio.name == vertice.midia.descriptionScene.audioA)
            this.setDurationDescription(audio.audio.getDuration());                    
            audio.audio.play(success => {
                if (success) {
                    this.setIsAudioPlaying(false);                
                    console.log('successfully finished playing');
                    } else {
                    console.log('Falhou para reproduzir som ambiente');
                    }
            })
        }
    }
}

export const AudioServiceFactory = () => new AudioService();

export const audioService = AudioServiceFactory();