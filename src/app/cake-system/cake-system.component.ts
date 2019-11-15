import { Component, OnInit } from '@angular/core';
import {ProductsManagmentService} from "../products-managment.service";
import {FormBuilder, FormGroup, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-cake-system',
  templateUrl: './cake-system.component.html',
  styleUrls: ['./cake-system.component.scss']
})
export class CakeSystemComponent implements OnInit {
  allCakes;
  errorMessage;
  current_cake;
  constructor(private productsManagmentService: ProductsManagmentService) { }

  ngOnInit() {
    this.productsManagmentService.getProducts().subscribe(val=>{
      console.log(val.results);
      this.allCakes=val.results;
    })
  }

  createCakeHandler(data) {
    console.log(data.value);

    this.productsManagmentService.createProduct(data.value).subscribe(result => {console.log(result)
    }, error =>  {this.errorMessage = error.error.errors[0];

    })
  }
  createRateHandler(data:any,cake_id) {
    console.log(data.value);

    this.productsManagmentService.createRate(data.value,cake_id).subscribe(result => {
      console.log("rattteee",result);
    }, error => {this.errorMessage = error.error.errors[0]})
  }
  imageClickHandler(cake_id){
    console.log(99999);
    this.productsManagmentService.getProductById(cake_id).subscribe(val=>{
       this.current_cake=val.product;
       console.log("curr",this.current_cake)
    });

  }

}
