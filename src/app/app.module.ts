import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { DiceComponent } from './dice/dice.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { RoundsComponent } from './rounds/rounds.component';
import { GameComponent } from './game/game.component';
import { RangePipe } from './range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    ExerciseComponent,
    GameComponent,
    RoundsComponent,
    StartComponent,
    RangePipe
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
