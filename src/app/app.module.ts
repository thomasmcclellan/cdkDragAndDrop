import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './features/01-basic/basic.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SortingComponent } from './features/02-sorting/sorting.component';
import { TransferringComponent } from './features/03-transferring/transferring.component';
import { HandleComponent } from './features/04-handle/handle.component';
import { PreviewComponent } from './features/05-preview/preview.component';
import { PlaceholderComponent } from './features/06-placeholder/placeholder.component';
import { HorizontalComponent } from './features/07-horizontal/horizontal.component';
import { BoundaryComponent } from './features/08-boundary/boundary.component';
import { LockingComponent } from './features/09-locking/locking.component';
import { AlternateRootComponent } from './features/10-alternate-root/alternate-root.component';
import { PredicateComponent } from './features/11-predicate/predicate.component';
import { DisabledComponent } from './features/12-disabled/disabled.component';
import { DisabledSortingComponent } from './features/13-disabled-sorting/disabled-sorting.component';
import { DelayedComponent } from './features/14-delayed/delayed.component';
import { PositionComponent } from './features/15-position/position.component';
import { GreenGridComponent } from './green-grid/green-grid.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    HomeComponent,
    NavComponent,
    SortingComponent,
    TransferringComponent,
    HandleComponent,
    PreviewComponent,
    PlaceholderComponent,
    HorizontalComponent,
    BoundaryComponent,
    LockingComponent,
    AlternateRootComponent,
    PredicateComponent,
    DisabledComponent,
    DisabledSortingComponent,
    DelayedComponent,
    PositionComponent,
    GreenGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
