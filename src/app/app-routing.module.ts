import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './features/1-basic/basic.component';
import { SortingComponent } from './features/2-sorting/sorting.component';
import { HomeComponent } from './home/home.component';
import { TransferringComponent } from './features/3-transferring/transferring.component';
import { HandleComponent } from './features/4-handle/handle.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'sorting', component: SortingComponent },
  { path: 'transferring', component: TransferringComponent },
  { path: 'handle', component: HandleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
