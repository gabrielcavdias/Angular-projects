import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { JurosCompostosComponent } from './juros-compostos/juros-compostos.component';
import { JurosSimplesComponent } from './juros-simples/juros-simples.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'sobre',
        component: SobreComponent
      },
      {
        path: 'juros-compostos',
        component: JurosCompostosComponent
      },
      {
        path: 'juros-simples',
        component: JurosSimplesComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    JurosCompostosComponent,
    JurosSimplesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
