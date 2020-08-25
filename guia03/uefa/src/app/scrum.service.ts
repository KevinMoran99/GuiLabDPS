import{Injectable} from '@angular/core';
import {Scrum} from './scrum';
import {SCRUMS} from './mock-scrums';

@Injectable()
export class ScrumService {
    getScrums():Promise<Scrum[]> {
        return Promise.resolve(SCRUMS);
    }

    getScrumsSlowly(): Promise<Scrum[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getScrums()), 2000);
        });
    }
}