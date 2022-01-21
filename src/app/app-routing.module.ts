import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiRequestComponent } from './core/api-request/api-request.component';
import { CssGridComponent } from './core/css-grid/css-grid.component';

const routes: Routes = [
  { path: 'api', component: ApiRequestComponent},
  { path: 'css', component: CssGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
