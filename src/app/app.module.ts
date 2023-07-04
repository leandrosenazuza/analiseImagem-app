import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FuncionalidadesComponent } from './module/funcionalidades/funcionalidades.component';
import { HomeComponent } from './module/funcionalidades/home/home.component';
import { DashboardComponent } from './module/funcionalidades/dashboard/dashboard.component';
import { AnaliseArquivoComponent } from './module/funcionalidades/analise-arquivo/analise-arquivo.component';
import { SobreProjetoComponent } from './module/funcionalidades/sobre-projeto/sobre-projeto.component';
import { routing } from './app-routing';
import { GraficoBarraComponent } from './module/funcionalidades/dashboard/graficos/grafico-barra/grafico-barra.component';
import { GraficoCardComponent } from './module/funcionalidades/dashboard/graficos/grafico-card/grafico-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionalidadesComponent,
    HomeComponent,
    DashboardComponent,
    AnaliseArquivoComponent,
    SobreProjetoComponent,
    GraficoBarraComponent,
    GraficoCardComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    routing,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
