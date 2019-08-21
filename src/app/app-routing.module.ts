import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './features/01-basic/basic.component';
import { SortingComponent } from './features/02-sorting/sorting.component';
import { HomeComponent } from './home/home.component';
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


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'sorting', component: SortingComponent },
  { path: 'transferring', component: TransferringComponent },
  { path: 'handle', component: HandleComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'placeholder', component: PlaceholderComponent },
  { path: 'horizontal', component: HorizontalComponent },
  { path: 'boundary', component: BoundaryComponent },
  { path: 'locking', component: LockingComponent },
  { path: 'alternateRoot', component: AlternateRootComponent },
  { path: 'predicate', component: PredicateComponent },
  { path: 'disabled', component: DisabledComponent },
  { path: 'disabledSorting', component: DisabledSortingComponent },
  { path: 'delayed', component: DelayedComponent },
  { path: 'position', component: PositionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
