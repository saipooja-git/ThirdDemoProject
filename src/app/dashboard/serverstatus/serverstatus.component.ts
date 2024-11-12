import { Component, OnDestroy, OnInit, signal,effect } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-serverstatus',
  standalone: true,
  imports: [],
  templateUrl: './serverstatus.component.html',
  styleUrl: './serverstatus.component.css'
})
export class ServerstatusComponent implements OnInit, OnDestroy {
  // currentStatus: 'online'|'offline'| 'unknown'= 'offline'; nml regular method type
  currentStatus=signal<'online'|'offline'| 'unknown'>('offline');
  // currentStatus=signal<'online'|'offline'| 'unknown'>('offline'); -->since we are using this we need 
  // to use .set ( this.currentStatus.set('online');)


  private interval?:ReturnType<typeof setInterval>;
  constructor(){
     effect(()=>{
      console.log(this.currentStatus());
     })

  }
  ngOnInit(){
    console.log("On Init");
    const interval = setInterval(()=>{
      const rnd = Math.random();
      if(rnd<0.5){
        this.currentStatus.set('online');
      }
      else if(rnd<0.8){
        this.currentStatus.set('offline');
      }
      else{
        this.currentStatus.set('unknown') ;
      }
    },2000);
  }
  ngAfterViewInit(){
    console.log("After View Init");
  }

  ngOnDestroy(){
    clearInterval(this.interval)  ;
  }


}
