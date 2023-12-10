import { Component, NgModule } from '@angular/core';
import { TopheaderComponent } from './topheader/topheader.component';
import { HeaderComponent } from './header/header.component';
import { ProductbodyComponent } from './productbody/productbody.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [TopheaderComponent,HeaderComponent,ProductbodyComponent,FooterComponent,FormsModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
links:string[] =["home","home","home","home","home","home"];


}
