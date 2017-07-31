import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Credentials } from '../objects';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  credentials: Credentials;

  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    try {
      return this.http.post('/users/register', user, {headers: headers}).map((res) => res.json());      
    } catch(err){
      return this.http.post('http://localhost:8080/users/register', user, {headers: headers}).map((res) => res.json());
    }
  }

  authenticateUser(credentials){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    try {
      return this.http.post('/users/authenticate', credentials, {headers: headers}).map((res) => res.json());
    } catch (err) {
      return this.http.post('http://localhost:8080/users/authenticate', credentials, {headers: headers}).map((res) => res.json());      
    }
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');
    try {
      return this.http.get('/users/profile', {headers: headers}).map((res) => res.json());
    } catch (err) {
      return this.http.get('http://localhost:8080/users/profile', {headers: headers}).map((res) => res.json());
    }
  }

  getDashboard(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');
    try {
      return this.http.get('/dashboard', {headers: headers}).map((res) => res.json());      
    } catch (err) {
      return this.http.get('http://localhost:8080/dashboard', {headers: headers}).map((res) => res.json());            
    }
  }

  createPost(post){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    try {
      return this.http.post('/dashboard/createpost', post, {headers: headers}).map((res) => res.json());
    } catch (err) {
      return this.http.post('http://localhost:8080/dashboard/createpost', post, {headers: headers}).map((res) => res.json());
    }
  }

  storeUserData(token, credentials){
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(credentials));
    this.authToken = token;
    this.credentials = credentials;
  }

  loadToken(){
    this.authToken = localStorage.getItem('authToken');
  }

  loggedIn(){
    return tokenNotExpired('authToken');
  }

  logout(){
    this.authToken = null;
    this.credentials = null;
    localStorage.clear();
  }

}
