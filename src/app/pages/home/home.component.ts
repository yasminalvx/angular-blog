import { Component, OnInit } from '@angular/core';
import { EventListDto } from 'src/app/core/dtos/events/event-list-dto';
import { MarvelEventsService } from 'src/app/core/services/marvel-events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public eventsList: Array<EventListDto> = new Array<EventListDto>();
  public offset = 4;
  constructor(
    private marvelEventsService: MarvelEventsService,
    ) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    const filters = new URLSearchParams({
      offset: '0',
      limit: '4'
    });
    this.marvelEventsService.getAllByFilter(filters)
      .subscribe(resp => this.eventsList = resp.results.map(item => new EventListDto(item)));
  }

  loadMore() {
    const filters = new URLSearchParams({
      offset: this.offset.toString(),
      limit: '4'
    });

    this.marvelEventsService.getAllByFilter(filters)
      .subscribe(resp => {
        this.eventsList.push(...resp.results.map(item => new EventListDto(item)));
        this.offset += 4;
      });
    
  }

  get firstEvent() {
    return this.eventsList.length > 0 ? this.eventsList[0] : new EventListDto();
  }

  getEventsByRange(start: number, end: number = this.eventsList.length - 1) {
    if (start >= 0 && end < this.eventsList.length && start <= end) {
      return this.eventsList.slice(start, end + 1);
    } else {
      return [];
    }
  }


}
