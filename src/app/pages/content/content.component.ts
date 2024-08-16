import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  private id:String | null = "0";
  photoCover:String | any = "";
  contentDescription:String | any = "";
  contentTitle:String | any = "";

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:String | null){
    const result = dataFake.filter(article => article.id.toString() == id)[0]
    if(result){
      this.photoCover = result.photoCover;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
    }
  }







}
