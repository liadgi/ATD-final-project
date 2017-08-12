import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Credentials } from '../objects';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  credentials: Credentials;

  constructor(private http: Http) { }

  get(url: String, page: number = 1) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');
    
    let params = { page : page};
    let options = { headers: headers, params: params };
    // TODO : add condition instead of try-catch 
    try {
      //return this.http.post('/users/register', user, {headers: headers}).map((res) => res.json());      
      
      return this.http.get('http://localhost:8080/' + url, options).map((res) => res.json());
    } catch (err) {
      return this.http.get('http://localhost:8080/' + url, options).map((res) => res.json());
    }
  }

  post(url: String, data) {
    let headers = new Headers();

    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');

    try {
      //return this.http.post('/users/register', user, {headers: headers}).map((res) => res.json());      
      return this.http.post('http://localhost:8080/' + url, data, { headers: headers }).map((res) => res.json());
    } catch (err) {
      return this.http.post('http://localhost:8080/' + url, data, { headers: headers }).map((res) => res.json());
    }
  }

  registerUser(user) {
    return this.post('users/register', user);
  }

  authenticateUser(credentials) {
    return this.post('users/authenticate', credentials);
  }

  createPost(post) {
    return this.post('dashboard/createpost', post);
  }

  editPost(post) {
    return this.post('dashboard/editPost', post);
  }

  addComment(comment) {
    return this.post('dashboard/addComment', comment);
  }

  changeLike(postId: String) {
    return this.post('dashboard/changeLike', {postId: postId});
  }
  
  getProfiles(page: number, query: String) {
    return this.get('profiles/search/' + query, page);
  }

  getTopProfiles(page: number) {
    return this.get('profiles/top', page);
  }

  setFollow(username) {
    return this.post('profile/setFollow', {username: username});
  }

  getPosts(page: number) {
    return this.get('dashboard', page);
  }

  getTopPosts(page: number) {
    return this.get('dashboard/top', page);
  }

  getUserPosts(page: number, username: String) {
    return this.get('dashboard/user/' + username, page);
  }

  searchPosts(page: number, query: String) {
    return this.get('dashboard/search/' + query, page);
  }

  getProfile(user: String) {
    return this.get('profile/' + user);
  }

  storeUserData(token, credentials) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('credentials', JSON.stringify(credentials));
    this.authToken = token;
    this.credentials = credentials;
  }

  getUsername(){
    return JSON.parse(localStorage.getItem('credentials')).username;
  }

  getId(){
    return JSON.parse(localStorage.getItem('credentials'))._id;
  }

  loadToken() {
    this.authToken = localStorage.getItem('authToken');
  }

  loggedIn() {
    return tokenNotExpired('authToken');
  }

  logout() {
    this.authToken = null;
    this.credentials = null;
    localStorage.clear();
  }

}
