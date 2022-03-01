import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TimeComponent } from './time/time.component';
import { CoffeeheaderComponent } from './coffeeheader/coffeeheader.component';
import { CoffeecrouserComponent } from './coffeecrouser/coffeecrouser.component';
import { CoffeefooterComponent } from './coffeefooter/coffeefooter.component';
import { ProductComponent } from './product/product.component';
import { DescriptionComponent } from './description/description.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { DatetimeService } from './datetime.service';
import { JsondataService } from './jsondata.service';
import { ReactiveformmoduleComponent } from './reactiveformmodule/reactiveformmodule.component';
import { ReactiveAddressFormComponent } from './reactive-address-form/reactive-address-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TimeComponent,
    CoffeeheaderComponent,
    CoffeecrouserComponent,
    CoffeefooterComponent,
    ProductComponent,
    DescriptionComponent,
    ProductdescriptionComponent,
    ReactiveformmoduleComponent,
    ReactiveAddressFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [DatetimeService , JsondataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
