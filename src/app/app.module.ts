/*Módulos */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing/routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Serviços */
import { DespesaService } from './despesa.service';


/*Componentes */
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

/* LocalStorage */
import { LocalStorageModule } from 'angular-2-local-storage';
import { DecimalBrPipe } from './decimal-br.pipe';
import {MomentModule} from 'angular2-moment';
import 'moment/locale/pt-br';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    DecimalBrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    NgbModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'despesasApp',
      storageType: 'localStorage'
    }),
    MomentModule

  ],
  providers: [DespesaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
