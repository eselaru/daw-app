import { ContactComponent } from './components/contact/contact.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

{ path: 'home', component: HomeComponent },
{ path: '', redirectTo: '/home', pathMatch:'full' },
{ path: 'contact', component: ContactComponent},
{ path: 'dictionary', component: DictionaryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
