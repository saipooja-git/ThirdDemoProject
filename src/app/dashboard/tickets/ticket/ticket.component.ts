import { Component,input,signal,output } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  close= output();
  dataVisible =signal(false);

  onToggleDetails(){
    this.dataVisible.update((wasVisible)=> !wasVisible);
  }

  onMarkAsComplete(){
    this.close.emit();
  }

}
