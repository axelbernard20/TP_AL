import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NavComponent } from './nav/nav.component';
import { AssociationsListComponent } from './associations-list/associations-list.component';
import { ProfilComponent } from './profil/profil.component';
import { UpdateComponent } from './update/update.component';
import { AssociationDetailComponent } from './association-detail/association-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RecherchesComponent } from './recherches/recherches.component';
import { UserCreatorComponent } from './user-creator/user-creator.component';
import { AssociationCreatorComponent } from './association-creator/association-creator.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

export const routes: Routes = [
  { path: 'users', component: UsersListComponent, canActivate: [AuthGuard] },
  { path: 'associations', component: AssociationsListComponent, canActivate: [AuthGuard] },
  { path: 'recherches', component: RecherchesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'users/profil', component: ProfilComponent, canActivate: [AuthGuard] },
  { path: 'users/profil/update', component: UpdateComponent, canActivate: [AuthGuard] },
  { path: 'associations/:id', component: AssociationDetailComponent, canActivate: [AuthGuard] },
  { path: 'users/:id', component: UserDetailComponent, canActivate: [AuthGuard] },
  { path: 'create/user', component: UserCreatorComponent, canActivate: [AuthGuard] },
  { path: 'create/association', component: AssociationCreatorComponent, canActivate: [AuthGuard] },
  { path: 'delete/user', component: UserDeleteComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
