import { Injectable } from '@angular/core';
import { HciHospAPI} from 'hci-hospindex-api';
import { hciQuery, hciQueryRequest } from 'hci-hospindex-api/dist/src/api';

@Injectable()
export class HCIService {

constructor(){}

getProduct() {
  var obj: hciQueryRequest = {
    key: 'Aspirin',
    index: 'hospIndex',
    keyType: 'DSCRD'
  };

  return HciHospAPI.hciQuery(obj);


}



}
