import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-firelist',
  templateUrl: './firelist.component.html',
  styleUrls: ['./firelist.component.css'],
})
export class FirelistComponent implements OnInit {
  entrada: string;
  constructor(
    private db: AngularFireDatabase,
    public authService: AuthService
  ) {
    this.listRef = db.list('list');
    this.list = this.listRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((change) => ({
          key: change.payload.key,
          ...change.payload.val(),
        }))
      )
    );
  }
  listRef: AngularFireList<any>;
  list: Observable<any[]>;
  addItem() {
    this.listRef.push({
      text: this.entrada,
    });
    this.entrada = '';
  }
  deleteItem(key: string) {
    this.listRef.remove(key);
  }
  ngOnInit() {}
}
