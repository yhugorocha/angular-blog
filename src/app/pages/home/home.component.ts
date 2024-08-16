import { Postagem } from './../../interfaces/Postagem-interface';
import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  photoCover:String="https://asmetro.org.br/portalsn/wp-content/uploads/2023/02/81-1.jpg"
  datePublication:String="Janeiro 11, 2024"
  title:String="Lorem ipsum dolor sit amet. In quaerat mollitia At explicabo error et similique maiores!"
  description:String="Lorem ipsum dolor sit amet. Qui reiciendis reiciendis 33 laborum vero et voluptate quia ut magnam voluptate nam assumenda odio id eaque ducimus. Quo voluptatem dolor qui commodi omnis qui error officiis. At autem architecto et possimus optio eum ratione eaque. Ea quis saepe ut harum quia et consectetur quod et galisum consequatur sit deserunt sunt est odit quia."

  postagens: Postagem[] = [];

  ngOnInit(): void {
    this.setValuesPostagem();
  }


  setValuesPostagem(){
    dataFake.forEach(value => {
      if(value.id == "1"){
        this.photoCover = value.photoCover
        this.datePublication = value.datePublication
        this.description = value.description
        this.title = value.title
      }else{
        this.postagens.push(value);
      }

    })
  }
}
