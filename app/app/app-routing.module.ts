import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { LoginformComponent } from "./components/loginform/loginform.component";
import { UserComponent } from "./components/user/user.component";
import { UsercreateComponent } from "./components/usercreate/usercreate.component";
import { AuthGaurdService } from "./service/auth-gaurd.service";

const routes: Routes=[
    {path:'', component:LoginformComponent},
    {path:'login', component:LoginformComponent},
    {path: 'usercreate', component: UsercreateComponent,canActivate:[AuthGaurdService]}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}