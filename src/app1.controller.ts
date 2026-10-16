import { Controller,Get } from "@nestjs/common";
import { App1Service } from "./app1.service.js";

@Controller()

export class App1Controller{
    constructor(private readonly app1Service:App1Service ){}
    @Get()
    getHello():string{
        return this.app1Service.getHello();
    }
}