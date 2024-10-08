import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {

  @Input() photoCover:String="";
  @Input() datePublication:String="";
  @Input() cardTitle:String="";
  @Input() id:String= "0";

}
