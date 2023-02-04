import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  person:Person ={name:'',email:''}
  themeName:string='';
  public personName:string="";
  public personEmail:string="";
  

  constructor(private storage:StorageService) { }

  setStorage()
  {

  }
  async getStorage()
  {

  }
  async updateStorage()
  {

  }
  async clearStorage()
  {

  }

  async deleteFromStorage()
  {
    
  }

  ngOnInit() {
  }

}
