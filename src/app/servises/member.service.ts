import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient : HttpClient) { }
  memberData(): Observable<any> {
    return this.httpClient.get(environment.serverUrl + "members/1")
  }
}

