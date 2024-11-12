import { Component, HostBinding, HostListener, inject,ElementRef, Input, ViewEncapsulation, contentChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control1',
    '(click)':'onClick()'
  }

})
export class ControlComponent {
  @Input() label: string = '';
  // @HostBinding('class') className = 'control';
  // @HostListener('click')
  private ele = inject(ElementRef)
  @ContentChild('input') private control?:ElementRef<HTMLInputElement | HTMLTextAreaElement> //  ---> then this.control
  // private control = ContentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');// ---> then this.control1(); 

  ngOnInit(){
    console.log("Control ts on init()...");
    console.log(this.control?.nativeElement);

  }
  ngAfterContentInit(){
    console.log("Ng after content init()...");
    console.log(this.control?.nativeElement);

  }
  onClick() {
    console.log('clicked');
    console.log(this.ele);  
    console.log(this.control);
  }
    // label =input.required<String>(); //signal
}

// host: {
//   class:'control',
// }
// or
// @HostBinding('class') className = 'control';
// -----------------------------
// host: {
//   class: 'control',
//   '(click)':'onClick()'
// }
// export class ControlComponent {
  // @Input() label: string = '';
  // @HostBinding('class') className = 'control';
  // // @HostListener('click')
  // onClick() {
  //   console.log('clicked');
  // }
    // }
    // or
// host: {
//   class: 'control',
// }
// export class ControlComponent {
//   @Input() label: string = '';
//   @HostBinding('class') className = 'control';
//   @HostListener('click')
//   onClick() {
//     console.log('clicked');
//   }
// }
