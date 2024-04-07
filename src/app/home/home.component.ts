import { Component , OnInit} from '@angular/core';
import { TableModule } from 'primeng/table';
import { MessageService, SelectItem } from 'primeng/api';
import { Product } from './product';
import { ProductService } from './ProductService';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
// import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    FormsModule,
    // DropdownModule,
    // ButtonModule
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [MessageService]
})
export class HomeComponent implements OnInit { 
  products!: Product[]; 
  statuses!: SelectItem[];
  clonedProducts: { [s: string]: Product } = {};

  constructor(private productService: ProductService, private messageService: MessageService) {}

    ngOnInit() {
      this.productService.getProductsMini().subscribe(
        (data: Product[]) => {
          this.products = data;
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );

        
    }
    editing: boolean = false
    onRowEditInit(product: Product) {
      this.editing = true;
        this.clonedProducts[product.id as string] = { ...product };
    }
    
    onRowEditSave(product: Product) {
      this.editing = false;
      this.productService.updateProduct(product).subscribe(updatedProduct => {
        if (updatedProduct) {
          console.log("vvvvvvvvvvvvvvvvvvvvvvvvvv")
        } else {
          console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
        }
      });
    }
    onRowEditCancel(product: Product, index: number) {
        this.editing = false;
        this.products[index] = this.clonedProducts[product.id as string];
        delete this.clonedProducts[product.id as string];
    }
getColumnStyle() {
  return {
    'min-width': this.editing ? '200px' : '5px'
  };
}

calculateColumnSum(property: string): number {
    let listOfObjects = this.products
    let sum: number = listOfObjects.reduce((acc, obj) => acc + Number(obj[property]) , 0);
    return sum;
}  
 
}





    



    