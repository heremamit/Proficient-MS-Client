import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { microserviceOptions } from './microservice.config/clinet.options';
@Injectable()
export class ConnectionService {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create(microserviceOptions);
  }
  squareOfTheNumber(methodName, data) {
    return this.client.send(methodName, data);
  }
}
