import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie';
import { I18nModule } from './i18n/i18n.module';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CookieModule.forRoot(),
    I18nModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [ CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {
}