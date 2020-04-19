import { conn } from "./01connect";
import { User } from './entity/User';
const main = async () => {

  const con = await conn();
  const UserRep = con.getRepository(User);
  {/*CreateUser*/
    let user = new User();
    user.name = "Bears";
    user.email = "fdsa@dsaf";
    const result = await UserRep.save(user);
    console.log("CreateUser", result);
  }

  {/*ReadUser*/
    const result = await UserRep.find();
    console.log("ReadUser", result);
  }

  { /*CountUser*/
    const result = await UserRep.findAndCount();
    console.log("CountUser", result);
  }

  {/*UpdateUser*/
    const result = await UserRep.update({ name: "Mmenps" }, { id: 1 });//query, value
    console.log("UpdateUser", result);
  }

  {/*DeleteUser*/
    const result = await UserRep.delete({ id: 1 });
    console.log("DeleteUser", result);
  }
}

main();

/* create */
//{ name: 'Bears', email: 'fdsa@dsaf', id: 1 }
/* read  */
//[ User { id: 2, name: 'Bears', email: 'fdsa@dsaf' } ]
/* count */
//[ [ User { id: 2, name: 'Bears', email: 'fdsa@dsaf' } ], 1 ]
/* update */
// {
//   generatedMaps: [],
//   raw:OkPacket {
//      fieldCount: 0,
//      affectedRows: 0,
//      insertId: 0,
//      serverStatus: 34,
//      warningCount: 0,
//      message: '(Rows matched: 0  Changed: 0  Warnings: 0',
//      protocol41: true,
//      changedRows: 0
//   } 
// }
/* delete */
// {
//   raw:OkPacket {
//      fieldCount: 0,
//      affectedRows: 0,
//      insertId: 0,
//      serverStatus: 2,
//      warningCount: 0,
//      message: '',
//      protocol41: true,
//      changedRows: 0 
//   },
//   affected: 0 
// }