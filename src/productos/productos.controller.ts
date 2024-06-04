import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CrearProductoDto } from './Dto/CrearProductoDto';
import { ModificarProductoDto } from './Dto/ModificarProductoDto';

@Controller('productos')
export class ProductosController {
   
   constructor(
        private readonly productosService: ProductosService
    ) {}

    //LISTAR PRODUCTOS
    @Get()
    getAllProductos(){
        // return this.productos;
        return this.productosService.findAll();
    }

    //LISTAR PRODUCTO POR ID
    @Get(":id")
    getProductosById(@Param("id") id:String){
        // return this.productos[+id];
        return this.productosService.findById(+id);
    }

    //CREAR NUEVO PRODUCTO
    @Post()
    crearProducto(@Body() crearDto:CrearProductoDto){
        return this.productosService.create(crearDto);

    }

    //mODIFICAR PRODUCTO
    @Patch(":id")
    actualizarProducto(
        @Param("id") id:String,
        @Body() updateDto:ModificarProductoDto){
        return this.productosService.update(+id,updateDto);
    }

    //ELIMNAR PRODUCTO
    @Delete(":id")
    eliminarProducto(@Param("id") id:String){
        return this.productosService.delete(+id);
    }

}


