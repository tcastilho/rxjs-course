import { Component, OnInit } from "@angular/core";
import { Course } from "../model/course";
import { interval, noop, Observable, of, timer } from "rxjs";
import {
  catchError,
  delayWhen,
  map,
  retryWhen,
  shareReplay,
  tap,
} from "rxjs/operators";
import { createHttpobservable } from "../common/util";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  beginnerCourses: Course[];
  advancedCourses: Course[];

  ngOnInit() {
    const http$ = createHttpobservable("/api/courses");

    const courses$ = http$.pipe(map((res) => Object.values(res["payload"])));

    courses$.subscribe(
      (courses: any) => {
        this.beginnerCourses = courses.filter(
          (course: any) => course.category == "BEGINNER"
        );

        this.advancedCourses = courses.filter(
          (course: any) => course.category == "ADVANCED"
        );
      },
      noop, // stands for No Operation
      () => console.log("completed")
    );
  }
}
