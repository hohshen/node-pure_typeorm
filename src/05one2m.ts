import { getClient } from "./01connect";
import { User } from './entity/User';
import { Eye } from './entity/Eye';
const main = async () => {
  const connect=await getClient()

  const UserRep =connect.getRepository(User);
  const EyeRep = connect.getRepository(Eye);

  /*CreateUser*/
  const user = new User();
  user.name = "EyeMan";
  user.email = "fdsa@dsaf"
  await UserRep.save(user);
  /*CreateEye*/
  const leftEye = new Eye();
  leftEye.name = "EyeMan's leftEye";
  leftEye.user = user;
  await EyeRep.save(leftEye);

  const rightEye = new Eye();
  rightEye.name = "EyeMan's rightEye";
  rightEye.user = user;
  await EyeRep.save(rightEye);

  {//user find eye
    const result = await UserRep.find({ relations: ["eye"] });
    console.log("UserRep", result);
  }

  {//heart find user
    const result = await EyeRep.find({ relations: ["user"] });
    console.log("HeartRep", result);
  }
}
main();