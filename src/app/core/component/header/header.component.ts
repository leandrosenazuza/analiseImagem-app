import { Component } from '@angular/core';
import { SUBTITULO, TITULO } from 'src/app/shared/constants';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  titulo: string = TITULO;
  sub: string = SUBTITULO;

}
