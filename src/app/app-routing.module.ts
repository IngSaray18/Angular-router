import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoeComponent } from './pages/hoe/hoe.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
const routes: Routes = [

  {
    path: '',
    redirectTo : '/home',
    pathMatch: 'full'
  },
{path: 'home',
component: HoeComponent
},


{path: 'category/:id',
component: CategoryComponent
},

{path: '404notfound',
component: NotfoundComponent
},

{path: 'mycart',
component: MycartComponent
},

{path: 'login',
component: LoginComponent
},

{path: 'register',
component: RegisterComponent
}
,
{path: 'recovery',
component: RecoveryComponent
},

{path: 'profile',
component: ProfileComponent
},
{
  path: '**' ,
  component: NotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
