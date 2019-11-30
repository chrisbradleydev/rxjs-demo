import { BehaviorSubject, Subject } from "rxjs";

const subject = new Subject();

subject.subscribe(console.log);

subject.next("Hello");
subject.next("World");

subject.subscribe(console.log); // does not emit

const bs = new BehaviorSubject("Hola");

bs.subscribe(console.log);

bs.next("Mundo");

bs.subscribe(console.log); // emits last value
