import {Component, OnInit} from '@angular/core';
import {ProductsManagmentService} from "./products-managment.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angTemplateProj';
  constructor(private productsManagmentService: ProductsManagmentService ){}

  ngOnInit(): void {
    // this.productsManagmentService.changeHideProducts(true);

    // this.productsManagmentService.changeHideMain(true);

  }


}
