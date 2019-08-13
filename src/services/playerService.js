import rxjs, { BehaviorSubject } from "rxjs";

export class PlayerService {
    player$ = new BehaviorSubject('Alohomora');
    character$ = new BehaviorSubject(null);
    informationsPlayer$ = new BehaviorSubject({});

    getPlayer() {
        return this.player$.asObservable();
    }

    getCharacter(){
        return this.character$.asObservable();
    }

    setCharacter(character){
        this.character$.next(character);
    }

    getInformationsPlayer = () => {
        return this.informationsPlayer$.asObservable();
    }

    setInformationsPayer = (data) => {
        this.informationsPlayer$.next(data); 
    }

}

export const PlayerServiceFactory = () => new PlayerService();

export const playerService = PlayerServiceFactory();