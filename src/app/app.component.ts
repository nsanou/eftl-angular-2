import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'monang3';

  ngOnInit(): void {
    this.test3();
  }

  test3() {
    var subject = new ReplaySubject(3);
    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)});
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });
    subject.next(5);
  }

  test1(): void {
    var subject = new Subject();
    subject.next(1);
    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });
    subject.next(2);
    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });
    subject.next(3);
  }

  test2() {
    var subject = new BehaviorSubject(0);

    subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
    });
    subject.next(1);
    subject.next(2);
    subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
    });
    subject.next(3);
  }
}
