import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {DisplayhelloworldComponent} from "./components/displayhelloworld/displayhelloworld.component";
import { FormsModule } from "@angular/forms";
import { ShowbellbuttonComponent } from "./components/showbellbutton/showbellbutton.component";
import {DisplaynameComponent} from "./components/displayname/displayname.component";
import {CounterComponent} from "./components/counter/counter.component";

const routes: Routes =[
  {path:'',component: DisplayhelloworldComponent},
  {path:'showbellbutton',component: ShowbellbuttonComponent},
  {path:'displayname',component: DisplaynameComponent},
  {path:'counter',component: CounterComponent},

]

@NgModule({
  imports: [

    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    DisplayhelloworldComponent,
    ShowbellbuttonComponent,
    DisplaynameComponent,
    CounterComponent,

  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]

})
export class AppModule {}
