import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
    @MessagePattern('create-order')
    createOrder(order: any) {
        console.log({message: "Order Recieved", order});
        
        return { message: 'Order Created', order}
    }
}
