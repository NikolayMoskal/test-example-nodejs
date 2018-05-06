import {Component, OnInit} from "@angular/core";
import {RssService} from "../service/rss.service";
import {Feed} from "../model/feed";

@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  providers: [RssService]
})
export class HomeComponent implements OnInit {
  rssFeed: Feed;

  constructor(private rss: RssService) {
  }

  ngOnInit() {
    this.rssFeed = this.rss.loadFeed();
  }

  timestampToDateString(ts: number): string {
    return new Date(ts).toLocaleDateString() + ' ' + new Date(ts).toLocaleTimeString();
  }
}
