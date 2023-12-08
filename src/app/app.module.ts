import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminService } from './admin-service.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ItemService } from './item-service.service';
import { ItemStatusComponent } from './item-status/item-status.component';
import { BooktableComponent } from './booktable/booktable.component';
import { UserListComponent } from './user-list/user-list.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { NewitemComponent } from './newitem/newitem.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ViewAllItemsComponent } from './view-all-items/view-all-items.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UpdateComponent } from './update/update.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TableListComponent } from './table-list/table-list.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    ItemStatusComponent,
    BooktableComponent,
    UserListComponent,
    ContactdetailsComponent,
    AdminPortalComponent,
    NewitemComponent,
    UpdateItemComponent,
    ViewAllItemsComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    WelcomeComponent,
    ContactComponent,
    RegisterUserComponent,
    UpdateComponent,
    ChangePasswordComponent,
    TableListComponent,
    DemoComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [AdminService,ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
