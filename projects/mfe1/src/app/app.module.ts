import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightsModule } from './flights/flights.module';
import { APP_ROUTES } from './app.routes';
import { SomecompComponent } from './somecomp/somecomp.component';

@NgModule({
  imports: [
    BrowserModule,
    FlightsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    HomeComponent,
    AppComponent,
    SomecompComponent,
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
