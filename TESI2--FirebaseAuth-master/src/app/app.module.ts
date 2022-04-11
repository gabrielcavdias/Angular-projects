import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FirelistComponent } from './firelist/firelist.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyC4mOKAGyd9OIgWyi5zP_SMawSEJEsz-1c',
      authDomain: 'autenticacao-angular-firebase.firebaseapp.com',
      projectId: 'autenticacao-angular-firebase',
      storageBucket: 'autenticacao-angular-firebase.appspot.com',
      messagingSenderId: '817506271369',
      appId: '1:817506271369:web:a75cbca2954f2bf9160658',
    }),
    RouterModule.forRoot([
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'firelist',
        component: FirelistComponent,
      },
    ]),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    IndexComponent,
    FirelistComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AuthService],
})
export class AppModule {}
