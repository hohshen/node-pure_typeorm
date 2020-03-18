
import { conn } from "./01connect";
import { User } from './entity/User';
import { Heart } from './entity/Heart';
import { Group } from './entity/Group';

const main = async () => {

  const con = await conn();
  const UserRep = con.getRepository(User);
  const HeartRep = con.getRepository(Heart);
  const GroupRep = con.getRepository(Group);

  // /*CreateUser*/
  // const user1 = new User();
  // user1.name = "add group1,2";
  // user1.email = "fdsa@dsaf"
  // await UserRep.save(user1);

  // const user2 = new User();
  // user2.name = "add group1,2";
  // user2.email = "fdsa@dsaf";
  // await UserRep.save(user2);

  // /*CreateHeart*/
  // const heart1 = new Heart();
  // heart1.name = "Bear's heart";
  // heart1.user = user1;
  // await HeartRep.save(heart1);

  // /*CreateHeart*/
  // const heart2 = new Heart();
  // heart2.name = "Bear's heart";
  // heart2.user = user2;
  // await HeartRep.save(heart2);

  // /*CreateGroup*/
  // const Group1 = new Group();
  // Group1.name = "have user1,2";
  // Group1.member = [user1, user2];//key
  // await GroupRep.save(Group1);
  // const Group2 = new Group();
  // Group2.name = "have user1,2";
  // Group2.member = [user1, user2];//key
  // await GroupRep.save(Group2);



  {//user find group
    const result = await UserRep.find({ relations: ["group","metadata"] });
    console.log("UserRep", JSON.stringify(result,null,4));
  }

  {//group find user
    const result = await GroupRep.find({ relations: ["member","member.metadata"] });
    console.log("GroupRep",  JSON.stringify(result,null,4));
  }

  /* note: group add user || user add group is ok*/
}
main();