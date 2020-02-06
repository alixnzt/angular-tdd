import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';

import { NgxJsonapiModule } from 'ngx-jsonapi';
import {RouterModule, Routes} from '@angular/router';
import {AuthorsService} from './authors/authors.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/authors',
    pathMatch: 'full'
  },
  {
    path: 'authors',
    component: AuthorsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgxJsonapiModule.forRoot({
      url: '//jsonapiplayground.reyesoft.com/v2/'
    }),
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
