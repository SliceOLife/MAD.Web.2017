import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { HttpModule }           from '@angular/http';

// Components
import { AppComponent }         from './app.component';
import { MuralsComponent }      from './components/murals/murals.component';
import { MuralDetailComponent } from './components/mural-detail/mural-detail.component';

// Services
import { MuralService }         from './services/mural.service';

// Flex & Material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule }     from '@angular/flex-layout';
import { MdButtonModule }       from '@angular/material';
import { MdCardModule }         from '@angular/material';
import { MdChipsModule }        from '@angular/material';
import { MdListModule }         from '@angular/material';
import { MdMenuModule }         from '@angular/material';
import { MdToolbarModule }      from '@angular/material';
import { MdIconModule }         from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MuralsComponent,
    MuralDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
    MdListModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [MuralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
