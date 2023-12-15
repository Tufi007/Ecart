
import { Component, EventEmitter ,Output,Input, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
search:string="";
getSearchText() {
  // console.log(this.search);
  this.customsearchevent.emit(this.search);

};


// getsearchinput($event: any) {
// this.search=$event.target.value;
// console.log(this.search);
// throw new Error('Method not implemented.');
// }
@Output()
customsearchevent: EventEmitter<string>= new EventEmitter<string>();

}

