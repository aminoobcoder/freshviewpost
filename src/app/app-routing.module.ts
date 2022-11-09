import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PostcommentsComponent } from './components/postcomments/postcomments.component';


const routes: Routes = [
  { path:'', redirectTo: '/posts', pathMatch: 'full' },
  { path:'posts', component: PostComponent},
  { path:'post-comments', component: PostcommentsComponent}
];

// const routes: Routes = [
//   { path:'', redirectTo: '/posts', pathMatch: 'full' },
//   { path:'posts', component: HomeComponent},
//   { path:'posts/:id', component: PostDetailComponent },
//   { path:'**', component: PageNotFoundComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [ PostcommentsComponent ]