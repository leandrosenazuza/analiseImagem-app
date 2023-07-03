import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FuncionalidadesComponent } from './module/funcionalidades/funcionalidades.component';
import { HomeComponent } from './module/funcionalidades/home/home.component';
import { DashboardComponent } from './module/funcionalidades/dashboard/dashboard.component';
import { AnaliseArquivoComponent } from './module/funcionalidades/analise-arquivo/analise-arquivo.component';
import { SobreProjetoComponent } from './module/funcionalidades/sobre-projeto/sobre-projeto.component';
import { routing } from './app-routing';

@NgModule({
  declarations: [
    AppComponent,
    FuncionalidadesComponent,
    HomeComponent,
    DashboardComponent,
    AnaliseArquivoComponent,
    SobreProjetoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
