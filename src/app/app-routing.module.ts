import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSetupComponent } from './game-setup/game-setup.component';
import { GameStageComponent } from './game-stage/game-stage.component';
import { PubIntroComponent } from './pub-intro/pub-intro.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: PubIntroComponent },
  { path: 'setup', component: GameSetupComponent },
  { path: 'game', component: GameStageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
