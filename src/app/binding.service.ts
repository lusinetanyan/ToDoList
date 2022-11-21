import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BindingService {

  public static input : string[] = [];
  public static checked : boolean[] = [];
  public static comments : string[][] = [];
  public static commentsOn : boolean[] = [];
  constructor() { }

}
