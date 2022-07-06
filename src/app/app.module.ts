import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDataComponent } from './user-data/user-data.component';
import { RestProvider } from '../providers/restprovider/restprovider';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RestProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
