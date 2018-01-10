import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { HciHospAPI } from 'hci-hospindex-api';
import { hciQuery, userCredentials, hciQueryRequest, ApiCallArgs } from 'hci-hospindex-api/dist/src/api';

@Injectable()
export class HCIService {

    constructor(private alertCtrl: AlertController) { }

    getData(keyVal, indexVal, keyTypeVal) {
        // Use Plugin for request
        HciHospAPI.hciQuery(this.getHciQueryRequest(keyVal, indexVal, keyTypeVal), this.getUserCredentials()).then(response => {
            // GET ATTRIBUTE DSCRD FROM XML
            var result = String(response.body.match(/<DSCRD>[\s\S]*?<\/DSCRD>/g));
            result = result.replace('<DSCRD>', '').replace('</DSCRD>', '');
            this.showProduct(result);
            return result;
            //END
        }).catch((err) => {
            return err;
        });
    };

    getHciQueryRequest(keyVal, indexVal, keyTypeVal) {
        var query: hciQueryRequest = {
            key: keyVal,
            index: indexVal,
            keyType: keyTypeVal
        };
        return query;
    }

    getUserCredentials() {
        var credentials: userCredentials = {
            username: 'EPN236342@hcisolutions.ch',
            password: 'UMPbDJu7!W'
        };
        return credentials;
    }

    showProduct(val: String) {
        let alert = this.alertCtrl.create({
            title: 'Medikament',
            message: 'Ist das Ihr Produkt ' + val + " ?",
            buttons: [
                {
                    text: 'Nein',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Einverstanden',
                    handler: () => {
                        console.log('ok');
                    }
                }
            ]
        });
        alert.present();
    }

}
