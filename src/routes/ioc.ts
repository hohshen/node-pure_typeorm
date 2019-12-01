import { TYPES } from "../types";
import * as express from "express";
import { inject } from "inversify";
import { controller, httpPost, interfaces, request, response, httpGet } from "inversify-express-utils";
import { UserServiceInterface } from "../service/user";
import { HeartServiceInterface } from "../service/heart";
import { EyeServiceInterface } from "../service/eye";
import { GroupServiceInterface } from "../service/group";

@controller('/ioc')
export default class IOC implements interfaces.Controller {
    private readonly userService: UserServiceInterface;
    private readonly heartService: HeartServiceInterface;
    private readonly eyeService: EyeServiceInterface;
    private readonly groupService: GroupServiceInterface;
    constructor(
        @inject(TYPES.UserServiceInterface) userService: UserServiceInterface,
        @inject(TYPES.HeartServiceInterface) heartService: HeartServiceInterface,
        @inject(TYPES.EyeServiceInterface) eyeService: EyeServiceInterface,
        @inject(TYPES.GroupServiceInterface) groupService: GroupServiceInterface,
    ) {
        this.userService = userService;
        this.heartService = heartService;
        this.eyeService = eyeService;
        this.groupService = groupService;
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
    @httpGet('/heart')
    public async heart(@request() req: express.Request, @response() res: express.Response) {
        try {
            const result = await this.heartService.heart();
            res.json(result);
        } catch (e) {
            res.json(e);
        }
    }
    @httpGet('/eye')
    public async eye(@request() req: express.Request, @response() res: express.Response) {

        try {
            const result = await this.eyeService.eye();
            res.json(result);
        } catch (e) {
            res.json(e);
        }
    }
    @httpGet('/group')
    public async group(@request() req: express.Request, @response() res: express.Response) {
        try {
            const result = await this.groupService.group();
            res.json(result);
        } catch (e) {
            res.json(e);
        }
    }
}