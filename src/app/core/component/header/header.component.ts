import { Component, OnInit } from '@angular/core';
import { SUBTITULO, TITULO } from 'src/app/shared/constants';
import { NavbarOptions } from '../static/navbar-options';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  titulo: string = TITULO;
  sub: string = SUBTITULO;

  navBarOptions: any = NavbarOptions;

  ngOnInit(): void {
    console.log(this.navBarOptions)
  }

}
