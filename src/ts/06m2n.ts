import { getClient } from "./01connect";
import { User } from './entity/User';
import { Group } from './entity/Group';
const main = async () => {
  const connect=await getClient()
  const UserRep = connect.getRepository(User);
  const GroupRep =connect.getRepository(Group);

  /*CreateUser*/
  const user1 = new User();
  user1.name = "add group1,2";
  user1.email = "fdsa@dsaf"
  await UserRep.save(user1);

  const user2 = new User();
  user2.name = "add group1,2";
  user2.email = "fdsa@dsaf";
  await UserRep.save(user2);

  /*CreateGroup*/
  const Group1 = new Group();
  Group1.name = "have user1,2";
  Group1.member=[user1,user2];//key
  await GroupRep.save(Group1);
  const Group2 = new Group();
  Group2.name = "have user1,2";
  Group2.member=[user1,user2];//key
  await GroupRep.save(Group2);



  {//user find group
    const result = await UserRep.find({ relations: ["group"] });
    console.log("UserRep", result);
  }

  {//group find user
    const result = await GroupRep.find({ relations: ["member"] });
    console.log("GroupRep", result);
  }

  /* note: group add user || user add group is ok*/
}
main();