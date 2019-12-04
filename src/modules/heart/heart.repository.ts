import { Heart } from '../../entity/heart.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
export interface HeartRepository{
  setHeart(heart: Heart);
  getHeart();
  getHeartUser();
  updHeart(id: number, name: string);
  delHeart(id: number);
}
@Injectable()
export class HeartRepositoryImpl implements HeartRepository{
  public constructor(
    @InjectRepository(Heart)
    private readonly heartRepository: Repository<Heart>,
  ) { }
  async setHeart(heart: Heart) {
    const result = this.heartRepository.save(heart);
    return result;
  }
  async getHeart() {
    const result = this.heartRepository.find();
    return result;
  }
  async getHeartUser() {
    const result = this.heartRepository.find({ relations: ["user"] });
    return result;
  }
  async updHeart(id: number, name: string) {
    const result = this.heartRepository.update(id, { name: name })
    return result;
  }
  async delHeart(id: number) {
    const result = await this.heartRepository.delete({ id: id });
    return result;
  }
}