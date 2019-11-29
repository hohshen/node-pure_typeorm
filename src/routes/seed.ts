import { Router } from 'express';
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { Heart } from "../entity/Heart";
import { Eye } from '../entity/Eye';
import { Group } from '../entity/Group';
const router = Router();
router.get('/user', async (req, res, next) => {
  try {
    const UserRepo = getRepository(User);
    //creat
    let user = new User();
    user.name = "Bears";
    user.email = "fdsa@dsaf";
    const create = await UserRepo.save(user);
    await UserRepo.save(user);
    //update
    const update = await UserRepo.update(2,{ name: "Mmenps" } );
    //read
    const read = await UserRepo.find();
    //delete
    const deleteU = await UserRepo.delete({ id: create.id });
    res.json({ c: create, u: update, r: read, d: deleteU });
  } catch (err) {
    console.log(err);
  }
});
router.get('/heart', async (req, res, next) => {
  try {
    const HeartRepo = getRepository(Heart);
    const UserRepo = getRepository(User);
    /*CreateUser*/
    const user = new User();
    user.name = "heart";
    user.email = "fdsa@dsaf"
    await UserRepo.save(user);
    /*CreateHeart*/
    const heart = new Heart();
    heart.name = "Bear's heart";
    heart.user = user;
    await HeartRepo.save(heart);
    const result1 = await HeartRepo.save(heart);
    const result2 = await HeartRepo.find();
    res.json([result1, result2]);
  } catch (err) {
    console.log(err);
  }
});

router.get('/eye', async (req, res, next) => {
  try {
    const EyeRepo = getRepository(Eye);
    const UserRepo = getRepository(User);
    /*CreateUser*/
    const user = new User();
    user.name = "eye";
    user.email = "fdsa@dsaf"
    await UserRepo.save(user);
    /*CreateEye*/
    const leftEye = new Eye();
    leftEye.name = "EyeMan's leftEye";
    leftEye.user = user;
    const result1 = await EyeRepo.save(leftEye);

    const rightEye = new Eye();
    rightEye.name = "EyeMan's rightEye";
    rightEye.user = user;
    const result2 = await EyeRepo.save(rightEye);

    const result3 = await EyeRepo.find();
    res.json([result1, result2, result3]);
  } catch (err) {
    console.log(err);
  }
});
router.get('/group', async (req, res, next) => {
  const UserRepo = getRepository(User);
  const GroupRepo = getRepository(Group);
  /*CreateUser*/
  const user1 = new User();
  user1.name = "add group1,2";
  user1.email = "fdsa@dsaf"
  await UserRepo.save(user1);

  const user2 = new User();
  user2.name = "add group1,2";
  user2.email = "fdsa@dsaf";
  await UserRepo.save(user2);

  /*CreateGroup*/
  const Group1 = new Group();
  Group1.name = "have user1,2";
  Group1.member = [user1, user2];//key
  const result1 = await GroupRepo.save(Group1);
  const Group2 = new Group();
  Group2.name = "have user1,2";
  Group2.member = [user1, user2];//key
  const result2 = await GroupRepo.save(Group2);
  const result3 = await UserRepo.find({ relations: ["group"] });
  const result4 = await GroupRepo.find({ relations: ["member"] });
  res.json({ "addg1": result1, "addg2": result2, "findug1": result3, "findgu1": result4 })
})
export default router;