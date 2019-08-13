import rxjs, { BehaviorSubject } from "rxjs";
import stories from '../stories';
import { bindComponent } from "../operators/bindComponent";

// const stories = require('../stories.json');

export class StoryService {
    story$ = new BehaviorSubject(stories[0]);
    actualVertice$ = new BehaviorSubject(stories[0].vertices[0]);

    getStory() {
        return this.story$.asObservable();
    }

    setStory(story){
        this.story$.next(story);
    }

    getActualVertice(){
        return this.actualVertice$.asObservable();
    }

    nextVertice(destiny) {
        this.getStory()
            .pipe(bindComponent(this))
            .subscribe(story => {
                const vertice = story.vertices.filter(vertice => vertice.value === destiny);
                this.actualVertice$.next(vertice[0]);
            })
    }
}

export const StoryServiceFactory = () => new StoryService();

export const storyService = StoryServiceFactory();