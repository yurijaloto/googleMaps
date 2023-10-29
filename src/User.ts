import { faker } from '@faker-js/faker';
import { Mappable } from '.';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor(name: string, lat: number, lon: number) {
    this.name = name;
    this.location = {
      lat: lat,
      lng: lon,
    };
  }
}
