import { conn } from "./01connect";
import { User } from './entity/User';
const UserTable=async () => {
    let user = new User();
    user.name = "Bears";
    user.email = "fdsa@dsaf";
    const con=await conn();
    const UserRep=con.getRepository(User);
    const result=await UserRep.save(user);
    console.log("Photo has been saved",result);
    return result;
}

UserTable();