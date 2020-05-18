import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HerosModule } from './heros/heros.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CrisisListComponent,
    DropdownComponent,
  ],
  imports: [BrowserModule, HerosModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
