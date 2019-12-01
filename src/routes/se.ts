import { Router } from "express";
import { UserRepo } from "../repository/User";
import { HeartRepo } from "../repository/Heart";
import { EyeRepo } from "../repository/Eye";
import { GroupRepo } from "../repository/Group";
import UserService from "../service/user";
import HeartService from "../service/heart";
import EyeService from "../service/eye";
import GroupService from "../service/group";
const router = Router();
router.get("/user", async (req, res, next) => {
  try {
    const userService = new UserService(new UserRepo);
    const result = await userService.user();
    res.json(result);
  } catch (e) {
    res.json(e);
  }
});
router.get("/heart", async (req, res, next) => {
  try {
    const heartService = new HeartService(new UserRepo, new HeartRepo);
    const result = await heartService.heart();
    res.json(result);
  } catch (e) {
    res.json(e);
  }
});
router.get("/eye", async (req, res, next) => {

  try {
    const eyeService = new EyeService(new UserRepo, new EyeRepo);
    const result = await eyeService.eye();
    res.json(result);
  } catch (e) {
    res.json(e);
  }
});
router.get("/group", async (req, res, next) => {
  try {
    const groupService = new GroupService(new UserRepo, new GroupRepo);
    const result = await groupService.group();
    res.json(result);
  } catch (e) {
    res.json(e);
  }
});

export default router;
