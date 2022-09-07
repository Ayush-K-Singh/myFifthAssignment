import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeactivateGuard } from './guard/deactivate.guard';
import { EmployeeComponent } from './employee/employee.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {path:'person', component:PersonComponent, canDeactivate:[DeactivateGuard]},
  {path:'employee', component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
