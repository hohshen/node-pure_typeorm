import { Heart } from "../entity/Heart";
import { getClient } from "../dbs/db";

export class HeartRepo {
  heartRepo;
  constructor() {
    this.heartRepo = getClient().getRepository(Heart);
  }
  async setHeart(heart: Heart) {
    const result = this.heartRepo.save(heart);
    return result;
  }
  async getHeart() {
    const result = this.heartRepo.find();
    return result;
  }
  async getHeartUser() {
    const result = this.heartRepo.find({ relations: ["user"] });
    return result;
  }
  async updHeart(id:number,name:string){
    const result =this.heartRepo.update(id,{ name: name } )
    return result;
  }
  async delHeart(id: number) {
    const result = await this.heartRepo.delete({ id: id });
    return result;
  }
}
