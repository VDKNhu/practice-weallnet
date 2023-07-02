import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeWeallnetComponent } from './components/ve-weallnet/ve-weallnet.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DichVuComponent } from './components/dich-vu/dich-vu.component';
import { HopTacComponent } from './components/hop-tac/hop-tac.component';
import { LienHeComponent } from './components/lien-he/lien-he.component';

@NgModule({
  declarations: [
    AppComponent,
    VeWeallnetComponent,
    NavigationBarComponent,
    HomeComponent,
    FooterComponent,
    DichVuComponent,
    HopTacComponent,
    LienHeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
