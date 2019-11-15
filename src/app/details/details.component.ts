import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
 @Input() dataFromParent;

  constructor() { }

  ngOnInit() {
  }

  average(){
    let solution=0;
    if(this.dataFromParent){
      if(this.dataFromParent.rates.length==0){
        return 0;
      }else{
        for (let val of this.dataFromParent.rates){
          solution+=val.star;
        }
        return solution/this.dataFromParent.rates.length;
      }
    }
  }
}
