import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FourbhkComponent } from './fourbhk/fourbhk.component';
import { ThreebhkComponent } from './threebhk/threebhk.component';
import { TwobhkComponent } from './twobhk/twobhk.component';

const routes: Routes = [{path:'twobhk', component:TwobhkComponent},
{path:'threebhk',component:ThreebhkComponent},
{path:'fourbhk',component:FourbhkComponent},
{path:'form',component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
