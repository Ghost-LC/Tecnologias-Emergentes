import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CrearProductoDto } from './Dto/CrearProductoDto';
import { ModificarProductoDto } from './Dto/ModificarProductoDto';
 import { Producto } from './Interface/producto.interface';

@Injectable()
export class ProductosService {
    //ARRAY CONTENEDOR DE LOS DATOS
    private productos: Producto[] = [
        { id:1,nombre:'Samsung Galaxy S20',categoria:'Telefonos'},
        { id:2,nombre:'Tecno Camon 17 pro',categoria:'Telefonos'},
        { id:3,nombre:'Phone 15 pro',categoria:'Telefonos'}, 
        { id:4,nombre:'Xiaomi 12T pro',categoria:'Telefonos'}, 
        { id:5,nombre:'Honor 90',categoria:'Telefonos'} 
    ];

    //mostrar productos
    findAll(){
        return this.productos;
    }

    //mostrar productos por id
    findById(id:Number){
        const prod = this.productos.find( p => p.id === id );
        if ( !prod ) throw new NotFoundException(`Producto con el id '${ id }' no encontrado`);
                return prod;
    }

    //FUNCION CREAR PRODUCTO
    create(nuevo:CrearProductoDto){
        const prodNew: Producto = {
            //aumenta el valor del id por el tamaño del array
            id: this.productos.length+1,
            nombre:nuevo.nombre,
            categoria:nuevo.categoria
        }
        this.productos.push( prodNew );
    }

    /**
     * Actualiza un producto a partir del id proporcionado
     * @param id 
     * @param prodActualizar 
     * @returns 
     */
    //FUNCION MODIFICAR PRODUCTO
    update(id:number, prodModificar:ModificarProductoDto){
            let prod = this.findById(id);
            console.log(prod);
            this.productos = this.productos.map( p => {
                if ( p.id === id ) {
                    prod.nombre = prodModificar.nombre;
                    prod.categoria = prodModificar.categoria;
                    return prod;
                }
                    return p;
            })
            return prod;
    }

    //FUNCION ELIMINAR PRODUCTO
    delete(id:number){
        let prod = this.findById(id);
        if(prod){
            this.productos = this.productos.filter (pp => pp.id !== id)
        }
    }
}
