import { Component } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { DataService, Data } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pages = [];
  statusVote : boolean = false
  indexVote:any;
  countVote: number = 1;
  voto:any;
  featured:Data [];
  counted: Data[] = [
    {
      id: 0,
      name: 'Be counted',
      subtitle: 'Speak out.',
      description: 'Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in apublic report.'
    },
  ]

  statusModal : boolean = false;

  constructor(
    public platformLocation: PlatformLocation,
    private dataService: DataService,

  ) {
  }
  ngOnInit() {

    this.featured = this.dataService.getData()

    localStorage.getItem('featured')
    localStorage.setItem('featured', JSON.stringify( this.featured ))


  }

  addVote(id) {
    this.countVote++;
    for (var i = 0; i < this.featured.length; ++i){
      if(this.featured[i].id == id)
      {
        this.featured[i].vote_positive =  this.countVote
        this.featured[i].vote_negative =  100 - this.countVote

      }
    }
  }

  restVote(id) {
    if (this.countVote > 1) {
      this.countVote--;
    }
    for (var i = 0; i < this.featured.length; ++i){
      if(this.featured[i].id == id)
      {
        this.featured[i].vote_negative =  this.countVote
        this.featured[i].vote_positive =  100 - this.countVote
      }
    }
  }
  selectVote(data){
    this.featured.forEach(obj => {
      if(obj.id == data.id){
        console.log(obj)
        obj.selected = 'active';
      }
    });
  }

  vote(data){
    this.featured.forEach(obj => {
      if(obj.id == data.id){
        obj.active = 'active';
        obj.description = 'Thank you for voting!';
      }
    });

  }
  openModal(){
    this.statusModal = true;
  }
  CloseModal(){
    this.statusModal = false;
  }

}
