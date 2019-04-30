import { Component, OnInit } from '@angular/core';
import { Skills } from '../skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skills = {
    id: 1,
    name: ["HTML", "JS", "CSS", "jQuery", "Angular 7", "PHP", "Gulp.js", "Github"]
  };
  constructor() { }

  ngOnInit() {
  }

}
