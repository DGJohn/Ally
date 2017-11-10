import { Injectable } from '@angular/core';
import { Midata } from 'Midata';
import { SecureStorage, SecureStorageObject } from "@ionic-native/secure-storage";
import { Events, Platform } from "ionic-angular";
import { Network } from "@ionic-native/network";
import { Storage } from '@ionic/storage';

@Injectable()
export class MidataConnectionWrapper {
    constructor(protected midata: Midata,
    	protected storage: Storage,
    	protected secureStorage: SecureStorage,
    	protected platform: Platform,
    	protected events: Events,
    	protected network: Network) {
    }

    getConnection() {
        return this.midata;
    }

    setConnection(connection) {
        this.midata = connection;
    }

    authenticate(checked): Promise<any> {
        return new Promise((resolve, reject) => {
            this.midata.authenticate().then((msg) => {
                if (checked) {
                    this.setSecureStorageToken(msg.refresh_token).then((msg) => {
                        resolve(msg)
                    })
                } else {
                    resolve(msg);
                }
            }).catch((err) => {
                reject(err);
            })
        })
    }

    refresh(): Promise<any> {
        let refreshToken: string;
        return this.getSecureStorageToken()
          .then((rT) => {
            if (rT === undefined || rT == '' || rT == null) {
              return Promise.reject('NO REFRESH TOKEN AVAILABLE');
            } else {
              refreshToken = rT;
            }
          })
          .then(() => {
            return this.midata.refresh(refreshToken);
          })
          .then((msg) => {
            return this.setSecureStorageToken(msg.refresh_token)
          })
          .then((msg) => {
            return Promise.resolve(msg);
          })
          .catch((error) => {
            return Promise.reject(error);
          })
    }

  protected setSecureStorageToken(refreshToken: string): Promise<any> {
      return this.secureStorage.create('MIDATA_CONNECTION_SERVICE')
        .then((storage: SecureStorageObject) => {
          return storage.set('refreshToken', refreshToken)
        })
        .then((data) => {
          return Promise.resolve(data);
        }).catch((error) => {
          return Promise.reject(error);
        })
    }

    protected getSecureStorageToken(): Promise<any> {
      return this.secureStorage.create('MIDATA_CONNECTION_SERVICE')
            .then((storage: SecureStorageObject) => {
              return storage.get('refreshToken')
            })
            .then((data) => {
            return Promise.resolve(data);
            }).catch((error) => {
            return Promise.reject(error);
            })
    }

    logout(): Promise<any> {
        this.getConnection().logout()
        return new Promise((resolve, reject) => {
            this.secureStorage.create('MIDATA_CONNECTION_SERVICE')
                .then((storage: SecureStorageObject) => {
                    storage.remove('refreshToken').then(
                        data => resolve(data),
                        error => reject(error)
                    );
                }).catch((err) => {
                    this.storage.remove('refreshToken').then(
                        data => resolve(data),
                        error => reject(error)
                    );
                })
        })
    }

    syncSecureStorage(checked): Promise<any> {
      if (checked && this.getConnection().refreshToken) {
        return this.setSecureStorageToken(this.getConnection().refreshToken)
        .then(() => {
          return Promise.resolve();
        })
        .catch((error) => {
          return Promise.reject(error);
        })
      } else {
        return Promise.reject("REQUIREMENTS FOR SYNCING NOT MET");
      }
    }
}
