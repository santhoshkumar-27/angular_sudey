import { Injectable } from '@angular/core';
import { CanMatch, GuardResult, MaybeAsync, Route,  UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MatchcGuard implements CanMatch {
  canMatch(
    route: Route,
    segments: UrlSegment[]): MaybeAsync<GuardResult> {
      console.log('MatchcGuard');
    return true;
  }
}
