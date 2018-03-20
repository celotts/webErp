/**
 * Created by Carlos on 10/8/2016.
 */
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PerfilComponent} from "./perfil/perfil.component";
import {MenuComponent} from "./menu/menu.component";


const routes: Routes = [
    {path: 'perfil', component: PerfilComponent},
    {path: 'menu', component: MenuComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)

    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
