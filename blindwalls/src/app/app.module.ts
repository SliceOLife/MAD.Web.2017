import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { HttpModule }           from '@angular/http';

// Components
import { AppComponent }         from './app.component';
import { MuralCardComponent }   from './components/mural-card/mural-card.component';

// Services
import { MuralService }         from './services/mural.service';

// Flex & Material imports
import { FlexLayoutModule }     from '@angular/flex-layout';
import { MdButtonModule }       from '@angular/material';
import { MdCardModule }         from '@angular/material';
import { MdChipsModule }        from '@angular/material';
import { MuralsComponent }      from './components/murals/murals.component';

@NgModule({
  declarations: [
    AppComponent,
    MuralCardComponent,
    MuralsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule
  ],
  providers: [MuralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
