import { CustomMap } from './Map';
import { User } from './User';
import { Company } from './Company';

// const apiKey = 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU';
// const apiKeyNew = 'AIzaSyDmDm3JAITAHvR7TlImn-jAc1MgRZubuu4';

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

const location = {
  lat: 70.7761,
  lon: -46.6792,
};

const user = new User('usuario 1', 70.7761, -46.6792);
const company = new Company('company 1', -70.7761, -46.6792);

const map = new CustomMap();
map.addMarker(user);
map.addMarker(company);
