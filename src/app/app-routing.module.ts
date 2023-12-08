import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ItemStatusComponent } from './item-status/item-status.component';
import { BooktableComponent } from './booktable/booktable.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { NewitemComponent } from './newitem/newitem.component';
import { ViewAllItemsComponent } from './view-all-items/view-all-items.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UpdateComponent } from './update/update.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TableListComponent } from './table-list/table-list.component';

const routes: Routes = [
  {path:'', component:HeaderComponent},
  {path:"admin-login",component:AdminLoginComponent},
  {path:"item-status",component:ItemStatusComponent},
  {path:"booktable",component:BooktableComponent},
  {path:"reservation-tables",component:UserListComponent},
  {path:"admin-portal",component:AdminPortalComponent},
  {path:"view-all",component:ViewAllItemsComponent},
  {path:"updateitem/:id",component:UpdateItemComponent},
  {path:"new-item",component:NewitemComponent},
  {path:"admincontact",component:ContactdetailsComponent},
  {path:'register', component:RegisterUserComponent},
  {path:'login', component:LoginComponent},
  {path:'welcome', component: WelcomeComponent},
  {path:'menu', component:MenuComponent},
  {path:'contact', component:ContactComponent},
  {path:"update",component:UpdateComponent},
  {path:"change",component:ChangePasswordComponent},
  {path:"table-list",component:TableListComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
