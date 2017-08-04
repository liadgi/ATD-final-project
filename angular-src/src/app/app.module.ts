// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule , Routes} from '@angular/router';
import {FlashMessagesModule} from 'angular2-flash-messages'

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { CreaterecipeComponent } from './components/createrecipe/createrecipe.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PostComponent } from './components/post/post.component';
import { TextandimageComponent } from './components/textandimage/textandimage.component';
import { CommentComponent } from './components/comment/comment.component';

// Services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { SocketioService } from './services/socketio.service'
import { AuthGuard } from './guards/auth.guard';
//import { CommentComponent } from './components/src/app/components/comment/comment.component';
import { PostsService } from './services/posts.service';

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'createrecipe', component: CreaterecipeComponent, canActivate:[AuthGuard]},
  {path: '**', component: PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    PostComponent,
    TextandimageComponent,
    CreaterecipeComponent,
    PagenotfoundComponent,
    CommentComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
