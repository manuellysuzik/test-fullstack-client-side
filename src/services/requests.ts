import { IPaginationParams, IPaginationResponse } from 'interfaces/pagination';
import IRequest from 'interfaces/models/requests';
import { Observable } from 'rxjs';

import apiService, { ApiService } from './api';

export class RequestService {
  constructor(private apiService: ApiService) {}

  public list(params: IPaginationParams): Observable<IPaginationResponse<IRequest>> {
    return this.apiService.get('/request', params);
  }
  public save(model: Partial<IRequest>): Observable<IRequest> {
    return this.apiService.post('/request', model);
  }
}

const requestService = new RequestService(apiService);

export default requestService;
