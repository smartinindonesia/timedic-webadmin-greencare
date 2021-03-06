import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {tokenNotExpired} from 'angular2-jwt';
import * as CryptoJS from 'crypto-js';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http: Http) {
  }

  registerUser(user) {
    let headers = new Headers();
    var exchange = user.password;
    user.password = this.encryptedText(exchange);
    return this.http.post('https://timedic.id:8443/register/user', user, {headers: headers}).map(res => res.json());
  }

  encryptedText = function (text) {
    var iterationCount = 1000;
    var keySize = 128;
    var passPhrase = 'timedictimedic18';
    var dataToDecrypt = text; //The base64 encoded string output from Java;
    var iv = 'dc0da04af8fee58593442bf834b30739';
    var salt = 'dc0da04af8fee58593442bf834b30739';

    var AesUtil = function (keySize, iterationCount) {
      this.keySize = keySize / 32;
      this.iterationCount = iterationCount;
    };

    AesUtil.prototype.generateKey = function (salt, passPhrase) {
      var key = CryptoJS.PBKDF2(passPhrase, CryptoJS.enc.Hex.parse(salt),
        {keySize: this.keySize, iterations: this.iterationCount});
      return key;
    }

    AesUtil.prototype.encrypt = function (salt, iv, passPhrase, plainText) {
      var key = this.generateKey(salt, passPhrase);
      var encrypted = CryptoJS.AES.encrypt(
        plainText,
        key,
        {iv: CryptoJS.enc.Hex.parse(iv)});
      return encrypted.toString();
    }

    var aesUtil = new AesUtil(keySize, iterationCount);
    var plaintext = aesUtil.encrypt(salt, iv, passPhrase, dataToDecrypt);

    return plaintext;
  }

  authenticateUserTimedic(user): Observable<any> {

      var body = 'username=' + user.username + '&password=' + this.encryptedText(user.password);
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post('https://timedic.id:8443/authenticate/user', body, {headers: headers}).map(res => res.json());
  }

  storeUserData(token, user) {
      localStorage.setItem('id_token', token);
      localStorage.setItem('user', JSON.stringify(user));
      this.authToken = token;
      this.user = user;
  }

  loadToken() {
      const token = localStorage.getItem('id_token');
      this.authToken = token;
  }

  loggedIn() {
      return tokenNotExpired();
  }

  logout() {
      this.authToken = null;
      this.user = null;
      localStorage.clear();
  }

  getCurrentToken(){
    return this.authToken;
  }
}
