import { Heart } from "../entity/Heart";
import { getRepository } from "typeorm";
import { injectable } from "inversify";
export interface HeartRepoInterface {
  setHeart(heart: Heart);
  getHeart();
  getHeartUser();
  updHeart(id: number, name: string);
  delHeart(id: number);
}
@injectable()
export class HeartRepo implements HeartRepoInterface {
  heartRepo;
  constructor() {
    this.heartRepo = getRepository(Heart);
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
  async updHeart(id: number, name: string) {
    const result = this.heartRepo.update(id, { name: name })
    return result;
  }
  async delHeart(id: number) {
    const result = await this.heartRepo.delete({ id: id });
    return result;
  }
}
