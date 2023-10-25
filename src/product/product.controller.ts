import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';


@Controller('products')
export class ProductController {

  
  constructor(private readonly productService: ProductService) {}


  
  @Get('/:productId/:userId')
  findAll( 
    @Param('productId', ParseIntPipe ) id: string,
    @Param('userId' ) userId: string,
  ) {
    return { id, userId  }
  }

}
