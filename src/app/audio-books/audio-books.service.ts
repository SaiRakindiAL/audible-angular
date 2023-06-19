import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AudioBooks } from './audio-books';

@Injectable({
  providedIn: 'root',
})
export class AudioBooksService {
  private audio_url = 'http://localhost:8090/audioBooks/';
  constructor(private http: HttpClient) {}

  itemCarts: AudioBooks[] = [];
  fetchAudioBooks(): Observable<any> {
    return this.http.get(this.audio_url);
  }

  // addToCart(audioBooks: AudioBooks) {
  //   console.log('items in cart ', this.itemCarts);
  //   return this.itemCarts.push(audioBooks);
  // }
}
