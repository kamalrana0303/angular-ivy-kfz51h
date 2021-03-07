import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations:[
    trigger('animation',[
      state('true',style({
        height:'200px',
        opacity:1
      })),
      state('false',style({
        height:'100px',
        opacity:0.5
      })),
      transition('true=>false',[
        animate('1s')
      ]),
      transition("false=>true",[
        animate("0.5s")
      ])
      ]
    )
  ]
})
export class AppComponent  {
  start:boolean=false;
}
