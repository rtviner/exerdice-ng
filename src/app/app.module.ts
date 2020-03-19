import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { DiceComponent } from './dice/dice.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { RoundsComponent } from './rounds/rounds.component';
import { GameComponent } from './game/game.component';
import { RangePipe } from './range.pipe';
import { LastRoundMessageComponent } from './last-round-message/last-round-message.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    ExerciseComponent,
    GameComponent,
    RoundsComponent,
    StartComponent,
    RangePipe,
    LastRoundMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
