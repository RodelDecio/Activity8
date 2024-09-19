import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {DisplayhelloworldComponent} from "./components/displayhelloworld/displayhelloworld.component";
import { FormsModule } from "@angular/forms";
import { ShowbellbuttonComponent } from "./components/showbellbutton/showbellbutton.component";

const routes: Routes =[
  {path:'',component: DisplayhelloworldComponent},
  {path:'showbellbutton',component: ShowbellbuttonComponent},

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

  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]

})
export class AppModule {}
