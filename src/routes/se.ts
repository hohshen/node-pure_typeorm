import { Router } from "express";
import { UserRepo } from "../repository/User";
import { User } from "../entity/User";
import { HeartRepo } from "../repository/Heart";
import { Heart } from "../entity/Heart";
import { EyeRepo } from "../repository/Eye";
import { Eye } from "../entity/Eye";
import { GroupRepo } from "../repository/Group";
import { Group } from "../entity/Group";
import { getClient } from "../dbs/db";
import { Folder } from "../entity/Folder";

const router = Router();
router.get("/user", async (req, res, next) => {
  try {
    const userRepo = new UserRepo();
    const user = new User();
    user.name = "Bears";
    user.email = "fdsa@dsaf";
    const c1 = await userRepo.setUser(user);
    const c2 = await userRepo.setUser(user);
    const u = await userRepo.updUser(2, "abc");
    const r = await userRepo.getUser();
    const d = await userRepo.delUser(c1.id);
    const all = await userRepo.findAll();
    res.json({ c1, c2, u, r, d, all });
  } catch (e) {
    res.json(e);
  }
});
router.get("/heart", async (req, res, next) => {
  const userRepo = new UserRepo();
  const heartRepo = new HeartRepo();
  const user = new User();
  user.name = "Bears";
  user.email = "fdsa@dsaf";
  const heart = new Heart();
  heart.name = "Bear's heart";
  heart.user = user;
  try {
    const c1 = await userRepo.setUser(user);
    const c2 = await heartRepo.setHeart(heart);
    const result = await heartRepo.getHeart();
    const result2 = await heartRepo.getHeartUser();
    const revert = await userRepo.findHeart();
    res.json({ c1, c2, result, result2, revert });
  } catch (e) {
    res.json(e);
  }
});
router.get("/eye", async (req, res, next) => {
  const eyeRepo = new EyeRepo();
  const userRepo = new UserRepo();
  /*CreateUser*/
  const user = new User();
  user.name = "eye";
  user.email = "fdsa@dsaf";

  /*CreateEye*/
  const leftEye = new Eye();
  leftEye.name = "EyeMan's leftEye";
  leftEye.user = user;
  const rightEye = new Eye();
  rightEye.name = "EyeMan's rightEye";
  rightEye.user = user;
  try {
    const c1 = await userRepo.setUser(user);
    const c2 = await eyeRepo.setEye(leftEye);
    const c3 = await eyeRepo.setEye(rightEye);
    const result3 = await eyeRepo.getEye();
    const result4 = await eyeRepo.getEyeUser();
    const revert = await userRepo.findEye();
    res.send({ c1, c2, c3, result3, result4, revert });
  } catch (e) {
    res.json(e);
  }
});
router.get("/group", async (req, res, next) => {
  const groupRepo = new GroupRepo();
  const userRepo = new UserRepo();
  /*CreateUser*/
  const user1 = new User();
  user1.name = "add group1,2";
  user1.email = "fdsa@dsaf";
  const user2 = new User();
  user2.name = "add group1,2";
  user2.email = "fdsa@dsaf";
  const Group1 = new Group();
  Group1.name = "have user1,2";
  Group1.member = [user1, user2]; //key
  const Group2 = new Group();
  Group2.name = "have user1,2";
  Group2.member = [user1, user2]; //key
  try {
    const c1 = await userRepo.setUser(user1);
    const c2 = await userRepo.setUser(user2);
    const c3 = await groupRepo.setGroup(Group1);
    const c4 = await groupRepo.setGroup(Group2);
    const r1 = await groupRepo.getGroup();
    const result = await groupRepo.getGroupUser();
    const revert = await userRepo.findGroup();
    res.json({ u1: c1, u2: c2, g1: c3, g2: c4, r: r1, result: result, revert: revert });
  } catch (e) {
    res.json(e);
  }
});
router.get("/folder", async (req, res, next) => {
  const folderRepo = getClient().getRepository(Folder);
  const r1 =await folderRepo.find({ relations: ["parent"] });
  const r2 =await folderRepo.find({ relations: ["child"] });
  res.json({r1,r2})
});
router.get("/crf", async (req, res, next) => {
  const folderRepo = getClient().getRepository(Folder);
  const f1 = new Folder();f1.name='grandfather',f1.parent=null; const r1 =await folderRepo.save(f1);
  const f2 = new Folder();f2.name='father',f2.parent=f1; const r2 =await folderRepo.save(f2);
  const f3 = new Folder();f3.name='son',f3.parent=f2;  const r3 =await folderRepo.save(f3);
   res.json({r1,r2,r3})
});
export default router;
