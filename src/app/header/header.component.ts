import { Component } from '@angular/core';
import { ButtonComponent } from "../shared/button/button.component";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
