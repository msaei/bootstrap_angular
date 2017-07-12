import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  private sub: any;
  public id: number;
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe( params => this.id = +params['id'] );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  incrementId() {
    let nextId = this.id + 1;
    this._router.navigate(['/post', nextId]);
  }
}
