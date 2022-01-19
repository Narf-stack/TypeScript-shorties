import faker from 'faker';
import { Mappable } from './CustomMap'


// implements Mappable = tells TS that we want to make sure that an instance of User 
// satisfy all Mappable's requirements. 
// That will hep us to see errors 
export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng:number;
    }

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.latitude()), 
        };
    }
    markerContent(): string {
        return `User Name: ${this.name}`;
      }   
}

