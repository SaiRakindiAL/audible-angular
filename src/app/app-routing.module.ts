import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioBookDetailsComponent } from './audio-book-details/audio-book-details.component';
import { AudioBooksComponent } from './audio-books/audio-books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'audioBooks', component: AudioBooksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'explore', component: HomeComponent },
  { path: 'audioBooks/:bookId', component: AudioBookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
