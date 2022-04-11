import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HelioTaskAppComponent } from './helio-task-app/helio-task-app.component';
import { RouterModule } from '@angular/router';
import { HelioTasksService } from './helio-tasks.service';
import { HelioHomeComponent } from './helio-home/helio-home.component';
import { HelioTasksComponent } from './helio-tasks/helio-tasks.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HelioHomeComponent,
      },
      {
        path: 'tasks',
        component: HelioTasksComponent,
      },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HelioTaskAppComponent,
    HelioHomeComponent,
    HelioTasksComponent,
  ],
  bootstrap: [AppComponent],
  providers: [HelioTasksService],
})
export class AppModule {}
