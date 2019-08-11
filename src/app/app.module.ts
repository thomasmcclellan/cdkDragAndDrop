import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './features/1-basic/basic.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SortingComponent } from './features/2-sorting/sorting.component';
import { TransferringComponent } from './features/3-transferring/transferring.component';
import { HandleComponent } from './features/4-handle/handle.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    HomeComponent,
    NavComponent,
    SortingComponent,
    TransferringComponent,
    HandleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
