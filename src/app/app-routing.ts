import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./module/funcionalidades/home/home.component";
import { DashboardComponent } from "./module/funcionalidades/dashboard/dashboard.component";
import { AnaliseArquivoComponent } from "./module/funcionalidades/analise-arquivo/analise-arquivo.component";
import { SobreProjetoComponent } from "./module/funcionalidades/sobre-projeto/sobre-projeto.component";
import { ModuleWithProviders } from "@angular/core";
import { CardComponent } from "./module/funcionalidades/card/card.component";

const APP_ROUTES: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'dash', component: DashboardComponent
  },
  {
    path: 'analise', component: AnaliseArquivoComponent
  },
  {
    path: 'sobre', component: SobreProjetoComponent
  },
  {
    path: 'card', component: CardComponent
  },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
