import { Module } from '@nestjs/common';

import { ProductosController } from './productos/productos.controller';
import { ProductosService } from './productos/productos.service';

@Module({
  imports: [],
  controllers: [ ProductosController],
  providers: [ProductosService],
})
export class AppModule {}
