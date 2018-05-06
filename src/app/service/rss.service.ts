import {Injectable} from "@angular/core";

declare var require: any;

@Injectable()
export class RssService {
  constructor() {
  }

  loadFeed(): any {
    const Feed = require('rss-to-json');
    let result: any = {};
    Feed.load('https://www.say7.info/rss.xml', function (err, rss) {
      result = Object.assign(result, rss);
    });
    return result;
  }
}
