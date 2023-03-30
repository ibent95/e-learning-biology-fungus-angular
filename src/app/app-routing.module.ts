import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { HomeComponent } from './modules/home/home.component';
import { SubjectsComponent } from './modules/subjects/subjects.component';
import { ExcercisesComponent } from './modules/excercises/excercises.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [],
  },
  {
    path: 'materi',
    component: SubjectsComponent,
    children: [],
  },
  {
    path: 'latihan-soal',
    component: ExcercisesComponent,
    children: [],
  },
  {
    path: 'tentang',
    component: AboutComponent,
    children: [],
  },
  {
    path: 'kontak',
    component: ContactsComponent,
    children: [],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
