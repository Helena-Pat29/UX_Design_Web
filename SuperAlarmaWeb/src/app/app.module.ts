import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalizarComponent } from './personalizar/personalizar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { NgFor } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ApagarComponent } from './apagar/apagar.component';
import { LandingComponent } from './landing/landing.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AlarmButtonsComponent } from './alarm-buttons/alarm-buttons.component';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
      PersonalizarComponent,
      ApagarComponent,
      LandingComponent,
      LeftMenuComponent,
      TopMenuComponent,
      AlarmButtonsComponent,
      CrearComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    NgFor,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
