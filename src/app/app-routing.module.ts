import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { UserAdminComponent } from './admin/user-admin/user-admin.component';
// import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', component: AppComponent},
  { path: 'user-admin', component: UserAdminComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
