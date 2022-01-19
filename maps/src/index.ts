/// <reference types="@types/google.maps" />

import { User } from './user'
import { CustomMap } from './CustomMap'
import { Company } from './Company'


const user = new User();
const cpny = new Company();
const map = new CustomMap('map');

map.addMarker(user);
map.addMarker(cpny)