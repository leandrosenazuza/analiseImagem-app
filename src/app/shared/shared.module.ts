import { CommonModule } from "@angular/common";
import { FooterComponent } from "../core/component/footer/footer.component";
import { HeaderComponent } from "../core/component/header/header.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from "../core/component/sidebar/sidebar.component";
import {MatListModule} from '@angular/material/list';
import { CardComponent } from "../core/component/card/card.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule

  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CardComponent

  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CardComponent
  ],
  providers: [
  ],
})

export class SharedModule {}
