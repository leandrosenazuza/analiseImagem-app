import { CommonModule } from "@angular/common";
import { FooterComponent } from "../core/component/footer/footer.component";
import { HeaderComponent } from "../core/component/header/header.component";
import { NavbarComponent } from "../core/component/navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,

  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
  ],
  providers: [
  ],
})

export class SharedModule {}
