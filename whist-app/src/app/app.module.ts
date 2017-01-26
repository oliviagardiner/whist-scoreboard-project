import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// import { ClarityModule } from 'clarity-angular';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { DatastorageService } from './datastorage.service';

import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';
import { SimplewhistmenuComponent } from './games/simple/simplewhistmenu/simplewhistmenu.component';
import { SimplesetupComponent } from './games/simple/simplesetup/simplesetup.component';
import { SimpleboardComponent } from './games/simple/simpleboard/simpleboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    MenuComponent,
    SimplewhistmenuComponent,
    SimplesetupComponent,
    SimpleboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // ClarityModule.forChild(),
    RouterModule.forRoot([
      { path: '', component: LoadingComponent},
      { path: 'menu', component: MenuComponent,
        children: [
          // { path: '', redirectTo: 'menu', pathMatch: 'full' },
        ],
      },
      // { path: 'simple', component: SimplewhistmenuComponent,
      //   children: [
      //     { path: '', redirectTo: 'simple', pathMatch: 'full' },
      //     { path: 'setup', component: SimplesetupComponent },
      //     { path: 'board', component: SimpleboardComponent },
      //   ],
      // },
      { path: 'simple/board', component: SimpleboardComponent },
      // { path: 'hell', component: HellmenuComponent,
      //   childen: [
      //     { path: '', redirectTo: 'hell', pathMatch: 'full'}
      //   ],
      // },
    ])
  ],
  providers: [
    DatastorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
