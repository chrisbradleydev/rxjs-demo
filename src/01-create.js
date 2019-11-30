import {
  Observable,
  of,
  from,
  interval,
  fromEvent,
  asyncScheduler
} from "rxjs";

const observable = new Observable(subscriber => {
  subscriber.next("A");
  subscriber.next("B");
  subscriber.next("C");
  setTimeout(() => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
  }, 1000);
});

observable.subscribe({
  next(x) {
    console.log(x);
  },
  error(e) {
    console.error(e);
  },
  complete() {
    console.log("complete");
  }
});

const world = from("world", asyncScheduler);
world.subscribe(x => console.log(x));

const hello = of("hello");
hello.subscribe(x => console.log(x));

const event = fromEvent(document, "click");
event.subscribe(x => console.log(x));

const periodic = interval(1000);
periodic.subscribe(x => console.log(x));
