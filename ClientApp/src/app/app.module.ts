import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { BookService } from './Services/book.service';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AddComponent,
    SearchComponent,
    ListBooksComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'add', component: AddComponent },
      { path: 'search', component: SearchComponent },
      { path: 'update', component: UpdateComponent },
      { path: 'list-books', component: ListBooksComponent },
    ])
  ],
  providers: [BookService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
