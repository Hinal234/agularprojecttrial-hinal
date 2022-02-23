import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TimeComponent } from './time/time.component';
import { CoffeeheaderComponent } from './coffeeheader/coffeeheader.component';
import { CoffeecrouserComponent } from './coffeecrouser/coffeecrouser.component';
import { CoffeefooterComponent } from './coffeefooter/coffeefooter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TimeComponent,
    CoffeeheaderComponent,
    CoffeecrouserComponent,
    CoffeefooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
