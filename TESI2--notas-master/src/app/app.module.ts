import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { NotasComponent } from './notas/notas.component';
import { DisciplinasService } from './disciplinas.service';

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
        path: 'disciplinas',
        component: DisciplinasComponent
      },
      {
        path: 'notas',
        component: NotasComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    DisciplinasComponent,
    NotasComponent
  ],
  bootstrap: [AppComponent],
  providers: [DisciplinasService]
})
export class AppModule {}
