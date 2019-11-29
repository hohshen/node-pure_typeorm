import { Router } from 'express';
import { UserRepo } from "../repository/User";
const router = Router();
router.get('/', async (req, res, next) => {
  try{
    const User = new UserRepo();
    const result = await User.getUser()
    res.json(result);
  }catch(e){
    res.json(e)
  }

});
export default router;