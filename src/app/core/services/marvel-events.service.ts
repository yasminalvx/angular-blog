import { Injectable } from '@angular/core';
import { MarvelApiService } from './marvel-api.service';
import { Observable, map } from 'rxjs';
import { PaginacaoDTO } from '../dtos/paginacao-dto';
import { EventListDto } from '../dtos/events/event-list-dto';

@Injectable({
  providedIn: 'root'
})
export class MarvelEventsService {

  constructor(public apiService: MarvelApiService) { }

  getAllByFilter(params?: string): Observable<PaginacaoDTO<EventListDto>> {
    const filters = params ? `?${params.toString()}` : '';
    return this.apiService.get(`events`, filters)
      .pipe(map(response => new PaginacaoDTO<EventListDto>(response.data)));

  }
}
