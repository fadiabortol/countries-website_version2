import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';
import { MyService } from './country/MyService';

import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { MyInterceptor } from './my.interceptor';
import { MyPipe } from './my.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    CountryComponent,
    CountriesComponent,
    MyPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
               MyService,
               { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
