import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChairComponent } from './chair/chair.component';

const routes: Routes = [
    {
      path:'',//TODO: localhost:4200/ <--
      component: ChairComponent
    },
    {
      path:'sillas',//TODO: localhost:4200/ <--
      component: ChairComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
