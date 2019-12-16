import { getClient } from "./01connect";
import { User } from './entity/User';
const UserTable=async () => {
    let user = new User();
    user.name = "Bears";
    user.email = "fdsa@dsaf";
    const connect=await getClient()
    const UserRep=connect.getRepository(User);
    const result=await UserRep.save(user);
    console.log("Photo has been saved",result);
    return result;
}

UserTable();