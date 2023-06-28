import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingComponent } from './components/cdk/scrolling/scrolling.component';
import { MatpracComponent } from './matprac/matprac.component';

const routes: Routes = [
  
  { path: 'scrolling', component: ScrollingComponent },
  {path: 'matprac', component: MatpracComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
