import { getClient } from "./01connect";
import { User } from './entity/User';
import { Heart } from './entity/Heart';
const main = async () => {
  const connect=await getClient()

  const UserRep =connect.getRepository(User);
  const HeartRep = connect.getRepository(Heart);

  /*CreateUser*/
  const user = new User();
  user.name = "Bears";
  user.email = "fdsa@dsaf"
  await UserRep.save(user);
  /*CreateHeart*/
  const heart = new Heart();
  heart.name = "Bear's heart";
  heart.user = user;
  await HeartRep.save(heart);

  {//user find heart
    const result = await UserRep.find({ relations: ["heart"] });
    console.log("UserRep", result);
  }

  {//heart find user
    const result = await HeartRep.find({ relations: ["user"] });
    console.log("HeartRep", result);
  }
}
main();