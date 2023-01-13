import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { FormSecondComponent } from './form-second/form-second.component';
import { FormThirdComponent } from './form-third/form-third.component'; 
import { FormFourthComponent } from './form-fourth/form-fourth.component';
import { FormFiveComponent } from './form-five/form-five.component';
const routes: Routes = [
    { path: '', component: FormsComponent },
    { path: 'second', component: FormSecondComponent },
    { path: 'third', component: FormThirdComponent },
    { path: 'four', component: FormFourthComponent },
    { path: 'five', component: FormFiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
