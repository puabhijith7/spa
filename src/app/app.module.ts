import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwobhkComponent } from './twobhk/twobhk.component';
import { ThreebhkComponent } from './threebhk/threebhk.component';
import { FourbhkComponent } from './fourbhk/fourbhk.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    TwobhkComponent,
    ThreebhkComponent,
    FourbhkComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
