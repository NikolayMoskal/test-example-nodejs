import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {AppRoutingModule} from "./app.routing.module";
import {RssService} from "./service/rss.service";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./footer/footer.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RssService],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule {
}
