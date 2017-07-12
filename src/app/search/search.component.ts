import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private sub: any;
  public searchword: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe( 
      params => this.searchword = params['key'] || ''
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  searchfor(keyword: string): void {
    console.log(keyword);
    this.router.navigate(['/search'], { queryParams: {key: keyword}});
  }
}
