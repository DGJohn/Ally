import { Injectable } from '@angular/core';
import { HciHospAPI} from 'hci-hospindex-api';
import { hciQuery, userCredentials, hciQueryRequest, ApiCallArgs } from 'hci-hospindex-api/dist/src/api';

@Injectable()
export class HCIService {

constructor(){}

getData(keyVal, indexVal, keyTypeVal) {


    // Use Plugin for request
    HciHospAPI.hciQuery(this.getHciQueryRequest(keyVal, indexVal, keyTypeVal), this.getUserCredentials()).then(response => {
        return response.body;
    }).catch((err) => {
        return err;
    });

  }

  // Do it without the plugin
  test(keyVal, indexVal, keyTypeVal){
      var XMLReq = new XMLHttpRequest();
      XMLReq.withCredentials = true;
      XMLReq.onreadystatechange = function() {
          if (XMLReq.readyState == XMLHttpRequest.DONE) {
              console.log(XMLReq.responseText);
          }
      }

      var url = "https://index.hcisolutions.ch/index/current/get.aspx?schema=ARTICLE&key=" +''+ "&index="+''+"&keyType="+''
      XMLReq.open("GET", url, true);
      XMLReq.setRequestHeader("Authorization", "Basic " + 'RVBOMjM2MzQyQGhjaXNvbHV0aW9ucy5jaDpVTVBiREp1NyFX');
      XMLReq.send();
  }


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


  hciQueryReal(requestParams: hciQueryRequest, credentials?: userCredentials) {

      let baseUrl = `https://index.hcisolutions.ch/index/current/get.aspx?schema=ARTICLE`;

      let queryParts = Object.keys(requestParams).map(key => {
          return key + '=' + requestParams[key]
      });

      let query = queryParts.join('&');
      query = query && `&${query}` || '';
      let url = baseUrl + query;

      let username = credentials.username || 'EPN236342@hcisolutions.ch';
      let password = credentials.password || 'UMPbDJu7!W';

      return this._apiCall({
          url: url,
          method: "GET",
          headers: {
              'Authorization': 'Basic ' + btoa(`${username}:${password}`)
          },
          jsonBody: false
      }).then((rsp: any) => {
          return rsp;
      }).catch((err) => {
          return err;
      })
  }

  _apiCall(args: ApiCallArgs) {

      let url = args.url;
      let method = args.method;
      let payload = args.payload;
      let headers = args.headers;
      let jsonBody = args.jsonBody || false;

      return new Promise(function (resolve, reject) {
          let xhr = new XMLHttpRequest();
          xhr.open(method, url, true);
          if (headers) {
              Object.keys(headers).forEach((key) => {
                  xhr.setRequestHeader(key, headers[key]);
              });
          }
          xhr.onreadystatechange = function () {
              if (this.readyState === 4) {  // loaded
                  console.log(xhr);
                  let status = this.status;
                  if (status >= 200 && status < 300) {  // successfuly

                      // check content-disposition
                      var disposition = xhr.getResponseHeader("Content-Disposition");
                      console.log(disposition);
                      if (disposition === "inline; filename=notFound.jpg") {
                          console.log("Picture not found, Picture: " + disposition);
                          reject("No picture available");
                      }
                      let body: any;
                      if (jsonBody) {
                          body = JSON.parse(this.responseText);
                      } else {
                          body = this.responseText;
                      }
                      resolve({
                          message: 'Request successful',
                          body: body,
                          status: status
                      });
                  } else {  // loaded but non-successful response
                      reject({
                          message: this.statusText,
                          body: this.responseText,
                          status: status
                      });
                  }
              }
          };
          xhr.onerror = function () {
              reject({
                  message: 'Network error',
                  body: '',
                  status: 0
              });
          }
          if (payload !== undefined) {
              xhr.send(JSON.stringify(payload));
          }
          else {
              xhr.send();
          }
      });
  }

}
