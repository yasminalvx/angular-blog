import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { MarvelEventsService } from 'src/app/core/services/marvel-events.service';
import { EventListDto } from 'src/app/core/dtos/events/event-list-dto';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css'],
})
export class EventViewComponent implements OnInit {

  eventDetails = new EventListDto();
  id: string = '0';

  constructor(
    private route: ActivatedRoute,
    private marvelEventsService: MarvelEventsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || "";

    this.getEventDetails();
  }

  getEventDetails() {
    this.marvelEventsService.getById(this.id)
      .subscribe(response => {
        this.eventDetails = response;
      });
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];

  
  }
}
