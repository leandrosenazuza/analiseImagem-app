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
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,

  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [
  ],
})

export class SharedModule {}
