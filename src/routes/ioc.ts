import { TYPES } from "../types";
import * as express from "express";
import { inject } from "inversify";
import { controller, httpPost, interfaces, request, response, httpGet } from "inversify-express-utils";
import { UserServiceInterface } from "../service/user";

@controller('/ioc')
export default class IOC implements interfaces.Controller {
    private readonly userService: UserServiceInterface;
    constructor(@inject(TYPES.UserServiceInterface) userService: UserServiceInterface) {
        this.userService = userService;
    }
    @httpGet('/')
    public async user2(@request() req: express.Request, @response() res: express.Response) {
        try {

            res.json("dsgfds");
        } catch (e) {
            res.json(e);
        }
    }
    @httpGet('/user')
    public async user(@request() req: express.Request, @response() res: express.Response) {
        try {
            const result = await this.userService.user();
            res.json(result);
        } catch (e) {
            res.json(e);
        }
    }
}