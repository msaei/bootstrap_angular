import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-center',
  templateUrl: './content-center.component.html',
  styleUrls: ['./content-center.component.css']
})
export class ContentCenterComponent implements OnInit {
  public test: string = "<h1>hello</h1>";
  public posts: any[] = [
    {
      heading: 'quick Git and Bootstrap - Monday 6/5/17',
      body: `<p>Today we get a quick look at Git and Bootstrap, here are some cheat sheet and links. Today we get a quick look at Git and Bootstrap, here are some cheat sheet and links. Today we get a quick look at Git and Bootstrap, here are some cheat sheet
            and links. Today we get a quick look at Git and Bootstrap, here are some cheat sheet and links.
        </p>

        <code>git diff file_name</code>
        <P>This shows difference between Working and Staging version of a file.</P>

        <code>git log</code>
        <p>list all commits.</p>


        <code>git branch</code>
        <p>list of branches</p>


        <code>git branch branch_name</code>
        <p>create a new branch</p>


        <code>git checkout branch_name</code>
        <p>change to another branch.</p>`
    },
    {
      heading: 'quick Git and Bootstrap - Monday 6/5/17',
      body: `<p>Today we get a quick look at Git and Bootstrap, here are some cheat sheet and links. Today we get a quick look at Git and Bootstrap, here are some cheat sheet and links. Today we get a quick look at Git and Bootstrap, here are some cheat sheet
            and links. Today we get a quick look at Git and Bootstrap, here are some cheat sheet and links.
        </p>

        <code>git diff file_name</code>
        <P>This shows difference between Working and Staging version of a file.</P>

        <code>git log</code>
        <p>list all commits.</p>


        <code>git branch</code>
        <p>list of branches</p>


        <code>git branch branch_name</code>
        <p>create a new branch</p>


        <code>git checkout branch_name</code>
        <p>change to another branch.</p>`
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
