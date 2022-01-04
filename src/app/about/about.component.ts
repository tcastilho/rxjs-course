import { Component, OnInit } from "@angular/core";
import { fromEvent, interval, noop, Observable, timer } from "rxjs";
import { map } from "rxjs/operators";
import { createHttpobservable } from "../common/util";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
