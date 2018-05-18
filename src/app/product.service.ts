import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products').valueChanges();
  }
  get(productName) {
    return this.db.object('/products/' + productName);
  }
}













// Old getAll() Code...

// let data: Observable<any>;
    // const temp$ = this.db.list('/products');
    // let temp2$ = this.db.object('/products').valueChanges();
    
    
    // temp$.subscribe(val => console.log(val));

    // let keys = this.db.list('/products').auditTrail().subscribe(console.log);
    // this.db.list('/products').snapshotChanges(['child_added'])
    // .forEach(itm => {
    //   itm.forEach(item => {
    //     const $key = item.payload.key;
    //     data = { $key, ...item.payload.val() };
    //     console.log(data);
    //     return data;
    //   });
    // });
    
    
    // this.db.list('/products').snapshotChanges(['child_added'])
    // .subscribe(actions => {
    //   actions.forEach(action => {
    //     // console.log(action.type);
    //     // console.log(action.key);
    //     // console.log(action.payload.val());
    //     let $key = action.key;
    //     let data = { $key, ...action.payload.val() };
    //     // console.log(data);
    //     // array.push(data);
    //     return data;
    //   });
    //   // return array;
    // });


    // console.log(temp2);
    // temp.forEach((itm) => {
    //   array = itm;
    //   console.log(array);
    // });

    // temp2.subscribe((itm) => {
    //   console.log(itm);
      
    //   // array.push(itm);
    // });    
    // let list$ = this.db.list('/products');
    // let retList = list$
    // .switchMap((items) => items.length === 0 ?
    //   Observable.of([]) :
    //   Observable.combineLatest(...items.map(item => this.getExercise(item.$key)));
    // );



    // this.db.list('/products').snapshotChanges().subscribe(actions => {
    //   let array = [];
    //   actions.forEach(action => {
    //     // console.log(action.type);
    //     // console.log(action.key);
    //     // console.log(action.payload.val());
    //     let $key = action.key;
    //     let data = { $key, ...action.payload.val() };
    //     // console.log(data);
    //     array.push(data);
    //   });
    //   console.log(array);
      
      
    //   return array;
    // });
