import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { TemporizadorService } from './temporizador.service';
import { DisciplinasService } from './disciplinas.service';
import { TemporizadorComponent } from './temporizador/temporizador.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DisciplinasComponent
      },
      {
        path: 'temporizador',
        component: TemporizadorComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    DisciplinasComponent,
    TemporizadorComponent
  ],
  bootstrap: [AppComponent],
  providers: [TemporizadorService, DisciplinasService]
})
export class AppModule {}
