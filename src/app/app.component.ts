import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, VERSION } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("animation", [
      state(":enter", style({ transform: "rotate(0deg)" })),
      state(":leave", style({ transform: "rotate(0deg)" })),
      transition("*=>*", [
        animate(
          "250ms",
          keyframes([
            style({ transform: "rotate(25deg)" }),
            style({ transform: "rotate(0deg)" }),
            style({ transform: "rotate(-25deg)" }),
            style({ transform: "rotate(0deg)" }),
            style({ transform: "rotate(15deg)" }),
            style({ transform: "rotate(0deg)" }),
            style({ transform: "rotate(-15deg)" }),
            style({ transform: "rotate(-5deg)" }),
            style({ transform: "rotate(0deg)" }),
            style({ transform: "rotate(5deg)" }),
            style({ transform: "rotate(0deg)" })
          ])
        )
      ])
    ]),
    trigger("shrinkOut", [
      state(":enter", style({ height: "*" })),
      transition(
        ":leave",
        animate(
          "50ms",
          style({
            height: 0,
            padding: 0
          })
        )
      )
    ]),
    trigger("expandOut", [
      state(":leave", style({ height: 0 })),
      transition(
        ":enter",
        animate(
          "50ms",
          keyframes([
            style({ height: 0, padding: 0 }),
            style({ height: "45px", padding: "5px" })
          ])
        )
      )
    ]),
    trigger("fallOut", [
      state(":enter", style({ padding: "0px" })),
      transition(
        "*=>*",
        style({
          padding: "0px"
        })
      )
    ])
  ]
})
export class AppComponent {
  fg;
  constructor(private fb:FormBuilder){

  }
  ngOnInit(){
    this.fg=this.fb.group({
      name:['',Validators.required]
    })
  }
}
