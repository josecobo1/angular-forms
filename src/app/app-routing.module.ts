import { Form03Component } from './forms/form03/form03.component';
import { Form01Component } from './forms/form01/form01.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form02Component } from './forms/form02/form02.component';

const routes: Routes = [
  { path: 'forms/01', component: Form01Component },
  { path: 'forms/02', component: Form02Component },
  { path: 'forms/03', component: Form03Component }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
