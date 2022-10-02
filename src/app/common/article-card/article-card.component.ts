import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['../../../styles/common/article-card/article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }
}
