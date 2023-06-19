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
  audioBooks: AudioBooks[] = [
    {
      audioId: 1,
      title: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki',
      genre: 'Story',
      rating: 4.7,
      description:
        'What the Rich Teach Their Kids About Money - That the Poor and Middle Class Do N',
      releaseDate: '2013-07-06T18:30:00.000+00:00',
      price: 100,
      img_src: 'https://m.media-amazon.com/images/I/51AHZGhzZEL._SL500_.jpg',
    },
    {
      audioId: 2,
      title: 'The Subtle Art of Not Giving a F*ck',
      author: 'Mark Manson',
      genre: 'Success',
      rating: 4.7,
      description: 'A Counterintuitive Approach to Living a Good Life\n',
      releaseDate: '2016-05-07T18:30:00.000+00:00',
      price: 200,
      img_src: 'https://m.media-amazon.com/images/I/51MT0MbpD7L._SL500_.jpg',
    },
    {
      audioId: 3,
      title: 'The Intelligent Investor Rev Ed.',
      author: 'Benjamin Graham',
      genre: 'Finance',
      rating: 4.5,
      description: 'The definitive book of value investing.',
      releaseDate: '2018-08-04T18:30:00.000+00:00',
      price: 300,
      img_src: 'https://m.media-amazon.com/images/I/41Iu3INMYNL._SL500_.jpg',
    },
    {
      audioId: 4,
      title: 'Atomic Habits',
      author: '\nJames Clear ',
      genre: 'Self-help',
      rating: 4.6,
      description:
        'Transform your life with tiny changes in behaviour, starting now.',
      releaseDate: '2018-10-15T18:30:00.000+00:00',
      price: 400,
      img_src: 'https://m.media-amazon.com/images/I/41wuB-s8vRL.jpg',
    },
    {
      audioId: 5,
      title: 'The Psychology of Money',
      author: '\nMorgan Housel  ',
      genre: 'Study guide',
      rating: 4.6,
      description:
        'Money - investing, personal finance, and business decisions - is typically taught as a math-based field, where data and formulas tell us exactly what to do.',
      releaseDate: '2020-09-07T18:30:00.000+00:00',
      price: 200,
      img_src: 'https://m.media-amazon.com/images/I/51jRBz6Ug3L.jpg',
    },
    {
      audioId: 6,
      title: 'Ikigai: The Japanese Secret to a Long and Happy Life',
      author: '\nHéctor García, Francesc Miralles',
      genre: 'Self-help',
      rating: 4.6,
      description:
        "It's the Japanese word for ‘a reason to live’ or ‘a reason to jump out of bed in the morning’.",
      releaseDate: '2017-09-17T18:30:00.000+00:00',
      price: 100,
      img_src: 'https://m.media-amazon.com/images/I/511HccWipML.jpg',
    },
    {
      audioId: 7,
      title: 'The Intelligent Investor Rev Ed',
      author: '\nBenjamin Graham ',
      genre: 'Self-help',
      rating: 4.5,
      description:
        "The Classic Text Annotated to Update Graham's Timeless Wisdom for Today's Market Conditions’.",
      releaseDate: '2015-07-06T18:30:00.000+00:00',
      price: 700,
      img_src: 'https://m.media-amazon.com/images/I/41Iu3INMYNL.jpg',
    },
    {
      audioId: 8,
      title: 'Perfect Together',
      author: '\nKristen Ashley',
      genre: 'Romance',
      rating: 4.4,
      description:
        'Wyn and Remy Gastineau were perfect together, Until, without warning, Remy walks out on their life, their love, and their marriage.',
      releaseDate: '2023-06-12T18:30:00.000+00:00',
      price: 100,
      img_src: 'https://m.media-amazon.com/images/I/51mH6tOf2yL.jpg',
    },
    {
      audioId: 9,
      title: 'Tomb of Sand',
      author: '\nGeetanjali Shree ',
      genre: 'Literature & Fiction',
      rating: 4.4,
      description:
        'In northern India, an eighty-year-old woman slips into a deep depression after the death of her husband, and then resurfaces to gain a new lease on life.',
      releaseDate: '2023-06-06T18:30:00.000+00:00',
      price: 100,
      img_src: 'https://m.media-amazon.com/images/I/51WFg8qQpyL.jpg',
    },
    {
      audioId: 11,
      title: 'The Woman in White',
      author: '\nWilkie Collins ',
      genre: 'Horror Fiction',
      rating: 4.3,
      description:
        'Late one moonlit night, Walter Hartright encounters a solitary and terrified woman dressed all in white. He saves her from capture by her pursuers and determines to solve the mystery of her distress and terror.',
      releaseDate: '2010-07-26T18:30:00.000+00:00',
      price: 150,
      img_src: 'https://m.media-amazon.com/images/I/61+nlAFP1uL.jpg',
    },
    {
      audioId: 12,
      title: 'Right Behind You',
      author: "Neil D'Silva",
      genre: 'Horror Fiction',
      rating: 4,
      description:
        'Right Behind You is a collection of 13 horror stories of different genres.',
      releaseDate: '2021-02-28T18:30:00.000+00:00',
      price: 800,
      img_src: 'https://m.media-amazon.com/images/I/61QrK0VU9mL.jpg',
    },
    {
      audioId: 13,
      title: 'Ringa Ringa Roses',
      author: "Neil D'Silva",
      genre: 'Horror Fiction',
      rating: 4.3,
      description:
        'Nitya, a single child ignored by her parents, makes an unlikely friend - a boy with a strange power who has mysteriously manifested in her room.',
      releaseDate: '2021-03-28T18:30:00.000+00:00',
      price: 100,
      img_src: 'https://m.media-amazon.com/images/I/51RI530-+6L.jpg',
    },
  ];
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
      this.audioBooks = [
        {
          audioId: 1,
          title: 'Rich Dad Poor Dad',
          author: 'Robert T. Kiyosaki',
          genre: 'Story',
          rating: 4.7,
          description:
            'What the Rich Teach Their Kids About Money - That the Poor and Middle Class Do N',
          releaseDate: '2013-07-06T18:30:00.000+00:00',
          price: 100,
          img_src:
            'https://m.media-amazon.com/images/I/51AHZGhzZEL._SL500_.jpg',
        },
        {
          audioId: 2,
          title: 'The Subtle Art of Not Giving a F*ck',
          author: 'Mark Manson',
          genre: 'Success',
          rating: 4.7,
          description: 'A Counterintuitive Approach to Living a Good Life\n',
          releaseDate: '2016-05-07T18:30:00.000+00:00',
          price: 200,
          img_src:
            'https://m.media-amazon.com/images/I/51MT0MbpD7L._SL500_.jpg',
        },
        {
          audioId: 3,
          title: 'The Intelligent Investor Rev Ed.',
          author: 'Benjamin Graham',
          genre: 'Finance',
          rating: 4.5,
          description: 'The definitive book of value investing.',
          releaseDate: '2018-08-04T18:30:00.000+00:00',
          price: 300,
          img_src:
            'https://m.media-amazon.com/images/I/41Iu3INMYNL._SL500_.jpg',
        },
        {
          audioId: 4,
          title: 'Atomic Habits',
          author: '\nJames Clear ',
          genre: 'Self-help',
          rating: 4.6,
          description:
            'Transform your life with tiny changes in behaviour, starting now.',
          releaseDate: '2018-10-15T18:30:00.000+00:00',
          price: 400,
          img_src: 'https://m.media-amazon.com/images/I/41wuB-s8vRL.jpg',
        },
        {
          audioId: 5,
          title: 'The Psychology of Money',
          author: '\nMorgan Housel  ',
          genre: 'Study guide',
          rating: 4.6,
          description:
            'Money - investing, personal finance, and business decisions - is typically taught as a math-based field, where data and formulas tell us exactly what to do.',
          releaseDate: '2020-09-07T18:30:00.000+00:00',
          price: 200,
          img_src: 'https://m.media-amazon.com/images/I/51jRBz6Ug3L.jpg',
        },
        {
          audioId: 6,
          title: 'Ikigai: The Japanese Secret to a Long and Happy Life',
          author: '\nHéctor García, Francesc Miralles',
          genre: 'Self-help',
          rating: 4.6,
          description:
            "It's the Japanese word for ‘a reason to live’ or ‘a reason to jump out of bed in the morning’.",
          releaseDate: '2017-09-17T18:30:00.000+00:00',
          price: 100,
          img_src: 'https://m.media-amazon.com/images/I/511HccWipML.jpg',
        },
        {
          audioId: 7,
          title: 'The Intelligent Investor Rev Ed',
          author: '\nBenjamin Graham ',
          genre: 'Self-help',
          rating: 4.5,
          description:
            "The Classic Text Annotated to Update Graham's Timeless Wisdom for Today's Market Conditions’.",
          releaseDate: '2015-07-06T18:30:00.000+00:00',
          price: 700,
          img_src: 'https://m.media-amazon.com/images/I/41Iu3INMYNL.jpg',
        },
        {
          audioId: 8,
          title: 'Perfect Together',
          author: '\nKristen Ashley',
          genre: 'Romance',
          rating: 4.4,
          description:
            'Wyn and Remy Gastineau were perfect together, Until, without warning, Remy walks out on their life, their love, and their marriage.',
          releaseDate: '2023-06-12T18:30:00.000+00:00',
          price: 100,
          img_src: 'https://m.media-amazon.com/images/I/51mH6tOf2yL.jpg',
        },
        {
          audioId: 9,
          title: 'Tomb of Sand',
          author: '\nGeetanjali Shree ',
          genre: 'Literature & Fiction',
          rating: 4.4,
          description:
            'In northern India, an eighty-year-old woman slips into a deep depression after the death of her husband, and then resurfaces to gain a new lease on life.',
          releaseDate: '2023-06-06T18:30:00.000+00:00',
          price: 100,
          img_src: 'https://m.media-amazon.com/images/I/51WFg8qQpyL.jpg',
        },
        {
          audioId: 11,
          title: 'The Woman in White',
          author: '\nWilkie Collins ',
          genre: 'Horror Fiction',
          rating: 4.3,
          description:
            'Late one moonlit night, Walter Hartright encounters a solitary and terrified woman dressed all in white. He saves her from capture by her pursuers and determines to solve the mystery of her distress and terror.',
          releaseDate: '2010-07-26T18:30:00.000+00:00',
          price: 150,
          img_src: 'https://m.media-amazon.com/images/I/61+nlAFP1uL.jpg',
        },
        {
          audioId: 12,
          title: 'Right Behind You',
          author: "Neil D'Silva",
          genre: 'Horror Fiction',
          rating: 4,
          description:
            'Right Behind You is a collection of 13 horror stories of different genres.',
          releaseDate: '2021-02-28T18:30:00.000+00:00',
          price: 800,
          img_src: 'https://m.media-amazon.com/images/I/61QrK0VU9mL.jpg',
        },
        {
          audioId: 13,
          title: 'Ringa Ringa Roses',
          author: "Neil D'Silva",
          genre: 'Horror Fiction',
          rating: 4.3,
          description:
            'Nitya, a single child ignored by her parents, makes an unlikely friend - a boy with a strange power who has mysteriously manifested in her room.',
          releaseDate: '2021-03-28T18:30:00.000+00:00',
          price: 100,
          img_src: 'https://m.media-amazon.com/images/I/51RI530-+6L.jpg',
        },
      ];
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
