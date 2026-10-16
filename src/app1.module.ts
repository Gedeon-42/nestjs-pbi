import { Module } from "@nestjs/common";
import { App1Controller } from "./app1.controller.js";
import { App1Service } from "./app1.service.js";
@Module({
    imports:[],
    controllers:[App1Controller],
    providers:[App1Service]

})

export class App1Module{}