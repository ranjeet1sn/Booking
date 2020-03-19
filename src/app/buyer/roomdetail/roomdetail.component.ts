import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/owner/owner.model';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-roomdetail',
  templateUrl: './roomdetail.component.html',
  styleUrls: ['./roomdetail.component.css']
})
export class RoomdetailComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  product=[]
  ngOnInit() {
    this.store.select('tutorial').subscribe(
      (res) => {
       console.log(res)
       this.product=res
        }
    )
  }
}
