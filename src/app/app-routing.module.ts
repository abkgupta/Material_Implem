import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingComponent } from './components/cdk/scrolling/scrolling.component';

const routes: Routes = [
  
  { path: 'scrolling', component: ScrollingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
