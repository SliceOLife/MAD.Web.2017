import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { MuralsComponent } from './components/murals/murals.component';
import { MuralDetailComponent } from './components/mural-detail/mural-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Services
import { MuralService } from './services/mural.service';

// Flex & Material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdChipsModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdIconRegistry } from '@angular/material';

// Other imports
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MuralsComponent,
    MuralDetailComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AsyncLocalStorageModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBRiB7bU3UHTU9uyPVq-UzvhuGnNw7e3bU'
    }),
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
export class AppModule {
  constructor(mdIconRegistry: MdIconRegistry, domSanitizer: DomSanitizer) {
    mdIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
