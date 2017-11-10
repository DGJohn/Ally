import { Injectable } from '@angular/core';
import { Events, Platform } from "ionic-angular";
import { Network } from "@ionic-native/network";
import { SecureStorage } from "@ionic-native/secure-storage";
import { Storage } from '@ionic/storage';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise'

import { Midata } from 'Midata';
import { MidataConnectionWrapper } from './MidataConnectionWrapper';

@Injectable()
/**
 * Service to manage the Connection to midata server.
 */
export class MidataConnectionService extends MidataConnectionWrapper {
    CONNECTION_STATE: boolean;
    AUTO_LOGIN: boolean = true;

    /**
    * Constructor of the class.
    * @param secureStorageServices  Parameter to use the provider SecureStorageServices which help to use the Secure Storage plugin.
    * @param user  Parameter to use the provider entity User in order to get the informations related to the connected user.
    */
    constructor(protected storage: Storage,
    	protected secureStorage: SecureStorage,
    	protected platform: Platform,
    	protected events: Events,
    	protected network: Network) {
      super(new Midata('https://test.midata.coop', 'MiDemo', 'metal taste buzz bonus toy volume'), storage, secureStorage, platform, events, network)
      //  check network connectivity on inital start
        platform.ready().then(() => {
	        if (this.network.type === "none") {
	            this.setConnectionState(false);
	        } else {
	            this.setConnectionState(true);
	        }
	    })
    }

    /**
    * Get the connection.
    * @returns the connection object
    */
    getConnection() {
        return super.getConnection();
    }

    getConnectionState() {
        return this.CONNECTION_STATE;
    }

    ensureConnection(){
    	return new Promise((resolve, reject) => {
    		if(this.CONNECTION_STATE)
    			resolve()
    		else
    			reject()
    	})
    }

    getAutoLogin() {
        return this.AUTO_LOGIN;
    }

    setConnectionState(flag: boolean) {
        this.CONNECTION_STATE = flag;
    }

    /**
    * Set the connection.
    */
    setConnection(connection) {
        //super.setConnection(connection);
    }

    /**
    * Function to determine if the user is logged
    * @returns Boolean to say if the user is connected
    */
    loggedIn(): Boolean {
        return this.getConnection().loggedIn;
    }

    /**
    * Get the refreshToken of the autorization of the user
    * @returns string with the refreshToken
    */
    getRefreshToken(): string {
        return this.getConnection().refreshToken;
    }
    /**
    * Get the refreshToken of the autorization of the user
    * @returns string with the refreshToken
    */
    getAuthToken(): string {
        return this.getConnection().authToken;
    }
    /**
    * Get the refreshToken of the autorization of the user
    * @returns string with the refreshToken
    */
    getUser() {
        return this.getConnection().user;
    }

    loginOAuth( checked ) {
        this.AUTO_LOGIN = checked;
        return super.authenticate(checked);
    }

    /**
    * Login to midata
    * @param username  Username used to the connection to midata.
    * @param password  Password used to the connection to midata.
    * @param callback  Callback function used to determine when the asynchronous login is done or get an error
    */
    login(username, password, callback) {
        this.getConnection().login(username, password).then((value) => {
            if (value.status === 'ACTIVE') {
                callback(true, true);
            } else {
                callback(false, false);
            }

        }, () => {
            callback(false, true);
        });
    }

    /**
    * Logout to midata
    */
    logout(): Promise<any> {

        //Remove the password from secure storage
        //this.secureStorageServices.removeValue('password');
        //Delete the values of the connection from the midata API
        return super.logout();
    }

    /**
    * Search a value in midata using the midata API
    * @param resourceType  Type of ressource searched in midata (for example "Observation".
    * @param params  Parameter to add to the request.
    * @returns An observable of the search result
    */
    search(resourceType: string, params: any = {}): Observable<any> {
        return Observable.fromPromise(
            <Promise<any>> this.getConnection().search(resourceType, params));
    }

    /**
    * Save a value in midata using the midata API
    * @param resource  Ressource which will be saved in midata server.
    * @returns An observable of the save result
    */
    save(resource: any) {
        return Observable.fromPromise(
            <Promise<any>> this.getConnection().save(resource));
    }

    syncSecureStorage(): Promise<any> {
        return super.syncSecureStorage(this.AUTO_LOGIN);

    }

}
