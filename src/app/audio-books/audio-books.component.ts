import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AudioBooksService } from './audio-books.service';
import { AudioBooks } from './audio-books';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-audio-books',
  templateUrl: './audio-books.component.html',
  styleUrls: ['./audio-books.component.css'],
})
export class AudioBooksComponent implements OnInit {
  audioBooks!: AudioBooks[];
  inputValue!: string;
  searchValue: string = '';
  cartItems: AudioBooks[] = [];

  // @Output() onAddToCart: EventEmitter<any> = new EventEmitter<any>();

  constructor(private audioBookService: AudioBooksService) {}

  ngOnInit(): void {
    this.fetchAudio();
  }

  onSearchAudioBooks() {
    console.log(this.inputValue);
  }

  fetchAudio() {
    this.audioBookService.fetchAudioBooks().subscribe((data) => {
      this.audioBooks = data;
      console.log(this.audioBooks);
    });
  }

  searchResults: AudioBooks[] = [];

  search() {
    this.searchResults = this.audioBooks.filter((book) => {
      for (let key in book) {
        if (
          book[key as keyof AudioBooks]
            .toString()
            .toLowerCase()
            .includes(this.searchValue.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });
    console.log(this.searchResults);
  }

  addToCart(audioBook: AudioBooks) {
    console.log(this.cartItems);
    this.cartItems.push(audioBook);
  }

  selectedSortOption: string = '';
  sortItems() {
    switch (this.selectedSortOption) {
      case 'price':
        this.audioBooks.sort((a, b) => a.price - b.price);
        break;
      case 'rating':
        this.audioBooks.sort((a, b) => b.rating - a.rating);
        break;
      case 'author':
        this.audioBooks.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case 'title':
        this.audioBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'releaseDate':
        this.audioBooks.sort((a, b) => {
          const dateA = new Date(a.releaseDate);
          const dateB = new Date(b.releaseDate);
          return dateA.getTime() - dateB.getTime();
        });
        break;
    }
  }
}
