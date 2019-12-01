import { UserRepoInterface, UserRepo } from './repository/User';
import UserService, { UserServiceInterface } from './service/user';
import EyeService, { EyeServiceInterface } from "./service/eye";
import { EyeRepoInterface, EyeRepo } from "./repository/Eye";
import HeartService, { HeartServiceInterface } from "./service/heart";
import { HeartRepoInterface, HeartRepo } from "./repository/Heart";
import GroupService, { GroupServiceInterface } from "./service/group";
import { GroupRepoInterface, GroupRepo } from "./repository/Group";
import { Container } from "inversify";
import { TYPES } from './types';
export const IOContainer = new Container();
/* User  */
IOContainer.bind<UserServiceInterface>(TYPES.UserServiceInterface).to(UserService);
IOContainer.bind<UserRepoInterface>(TYPES.UserRepoInterface).to(UserRepo);
/* Heart  */
IOContainer.bind<HeartServiceInterface>(TYPES.HeartServiceInterface).to(HeartService);
IOContainer.bind<HeartRepoInterface>(TYPES.HeartRepoInterface).to(HeartRepo);
/* Eye  */
IOContainer.bind<EyeServiceInterface>(TYPES.EyeServiceInterface).to(EyeService);
IOContainer.bind<EyeRepoInterface>(TYPES.EyeRepoInterface).to(EyeRepo);
/* Group  */
IOContainer.bind<GroupServiceInterface>(TYPES.GroupServiceInterface).to(GroupService);
IOContainer.bind<GroupRepoInterface>(TYPES.GroupRepoInterface).to(GroupRepo);