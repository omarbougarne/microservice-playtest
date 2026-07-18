import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICES_CLIENT } from './constants';
import { OrdersController } from './orders/orders.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
      name: MICROSERVICES_CLIENT.USERS_SERVICE,
      transport: Transport.TCP,
      options: {
        port: 4003,
      },
    },
      {
      name: MICROSERVICES_CLIENT.PRODUCTS_SERVICE,
      transport: Transport.TCP,
      options: {
        port: 4002
      }
    },
    {
      name: MICROSERVICES_CLIENT.ORDERS_SERVICE,
      transport: Transport.TCP,
      options: {
        port: 4001
      }
    },
  ]),
  ],
  controllers: [AppController, OrdersController],
  providers: [AppService],
})
export class AppModule {}
