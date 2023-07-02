import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DichVuComponent } from './components/dich-vu/dich-vu.component';
import { HopTacComponent } from './components/hop-tac/hop-tac.component';
import { LienHeComponent } from './components/lien-he/lien-he.component';
import { VeWeallnetComponent } from './components/ve-weallnet/ve-weallnet.component';

const routes: Routes = [
  { path: 've-weallnet', component: VeWeallnetComponent},
  { path: 'dich-vu', component: DichVuComponent},
  { path: 'hop-tac', component: HopTacComponent},
  { path: 'lien-he', component: LienHeComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
