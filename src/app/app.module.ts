import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
// import { AuthGuard } from './auth.guard';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomePopComponent } from './welcome-pop/welcome-pop.component';
import { ModelCom } from './modelCom';
import { GenericLookupPanel } from './lookup';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    WelcomeComponent,
    WelcomePopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'admin',
        component: AdminComponent
//        canActivate: [AuthGuard]
      },
      {
        path: 'Welcome',
        component: WelcomeComponent , data : { 'panels': ModelCom.HIDE_SUMMERY_PANEL_HIDE_PANEL_TWO_SHOW_LOOKUP_PANEL }
//        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [AuthService, UserService, ModelCom],
   entryComponents: [WelcomePopComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
