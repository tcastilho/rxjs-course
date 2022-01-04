import { Observable } from "rxjs";

export function createHttpobservable(url: string) {
  return new Observable((observer) => {
    // Observable.create() deprecated
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        observer.next(body);
        observer.complete();
      })
      .catch((err) => {
        observer.error(err);
      });
  });
}
