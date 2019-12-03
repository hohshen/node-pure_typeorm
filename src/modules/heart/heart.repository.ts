import { Heart } from '../../entity/heart.entity';
import { Repository, EntityRepository } from 'typeorm';
@EntityRepository(Heart)
export class HeartRepository extends Repository<Heart>{
  async setHeart(heart: Heart) {
    const result = this.save(heart);
    return result;
  }
  async getHeart() {
    const result = this.find();
    return result;
  }
  async getHeartUser() {
    const result = this.find({ relations: ["user"] });
    return result;
  }
  async updHeart(id: number, name: string) {
    const result = this.update(id, { name: name })
    return result;
  }
  async delHeart(id: number) {
    const result = await this.delete({ id: id });
    return result;
  }
}