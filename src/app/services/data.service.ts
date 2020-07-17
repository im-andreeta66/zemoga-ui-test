import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    private featured:Data[] = [
        {
            id: 0,
            name: 'Kanye West',
            description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
            vote_positive: 80,
            vote_negative: 20,
            imagen: 'assets/images/foto1.jpg',
            calendar: '1 day ago',
            category: 'Entertainment',
            active: '',
            selected: '',
        },
        {
            id: 1,
            name: 'Mark Zuckerberg',
            description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
            vote_positive: 30,
            vote_negative: 70,
            imagen: 'assets/images/foto2.jpg',
            calendar: '15 days ago',
            category: 'Bussiness',
            active: '',
            selected: '',
        },
        {
            id: 3,
            name: 'Cristina Fernández de Kirchner',
            description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
            vote_positive: 40,
            vote_negative: 60,
            imagen: 'assets/images/foto3.jpg',
            calendar: '1 month ago',
            category: 'Politics',
            active: '',
            selected: '',
        },
        {
            id: 4,
            name: 'Malala Yousafzai',
            description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
            vote_positive: 64,
            vote_negative: 36,
            imagen: 'assets/images/foto4.jpg',
            calendar: '2 month ago',
            category: 'Entertainment',
            active: '',
            selected: '',
        }
    ];

    constructor(){

    }
    getData():Data[]{
      return this.featured;
  }

}

export interface Data{
    id: number;
    name: string;
    description: string;
    vote_positive?:number;
    vote_negative?:number;
    calendar?: string;
    imagen?: string;
    category?: string;
    title?: string;
    subtitle?: string;
    active?: string;
    selected?: string;
}
