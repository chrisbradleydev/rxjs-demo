import { Observable } from "rxjs";
import { publish, share, shareReplay } from "rxjs/operators";

const cold = new Observable(o => o.next(Math.random()));

cold.subscribe(console.log);
cold.subscribe(console.log);

// const hot = cold.pipe(shareReplay(1));

// hot.subscribe(console.log);
// hot.subscribe(console.log);

// alternative

const hot = cold.pipe(publish());
hot.subscribe(console.log);
hot.subscribe(console.log);

hot.connect();
