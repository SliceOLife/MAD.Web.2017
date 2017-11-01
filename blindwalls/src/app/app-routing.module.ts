import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MuralsComponent } from './components/murals/murals.component';
import { MuralDetailComponent } from './components/mural-detail/mural-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/murals', pathMatch: 'full' },
  { path: 'mural/:id', component: MuralDetailComponent },
  { path: 'murals',  component: MuralsComponent },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
