import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StartInputComponent } from './start-input/start-input.component';
import { DiceComponent } from './dice/dice.component';
import { ExerciseInfoComponent } from './exercise-info/exercise-info.component';
import { RoundInfoComponent } from './round-info/round-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StartInputComponent,
    DiceComponent,
    ExerciseInfoComponent,
    RoundInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
