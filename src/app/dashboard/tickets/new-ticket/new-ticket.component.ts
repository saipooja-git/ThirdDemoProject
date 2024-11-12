import { AfterViewInit, Component, ElementRef, EventEmitter, viewChild, ViewChild,Output,output  } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit {
  enteredTitle ='';
  enteredText='';
@ViewChild('form') form?:ElementRef<HTMLFormElement>;
// private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

// @Output() add = new EventEmitter<{title:string,text:string}>(); // this is the old way of using 
add = output<{title:string,text:string}>();

ngOnInit(){
  console.log("Onn Init...");
  console.log(this.form?.nativeElement);
}

ngAfterViewInit() {
    console.log("After Vieww Init...");
    console.log(this.form?.nativeElement);
}
  onSubmit() {
    
    // console.log(title, ticketText);
    this.add.emit({title:this.enteredTitle,text : this.enteredText});
    this.enteredText='';
    this.enteredTitle='';
}

// onSubmit(title: string, ticketText: string, event: Event,) {
//   event.preventDefault(); // This prevents the page from refreshing.
//   console.log(title, ticketText);
//   this.add.emit({title:title,text : ticketText})
//   this.form?.nativeElement.reset();
// }

 
}

// private form = viewChild<ElementRef<HTMLFormElement>>('form'); --> if i write like this then i need to write throwErrorbelow statement as 
// this.form()?.nativeElement.reset();

// @ViewChild('form') form?:ElementRef<HTMLFormElement>;-->if i write lik this then like below i need to write
// this.form().nativeElement.reset(); // this is the correct way to write the code.