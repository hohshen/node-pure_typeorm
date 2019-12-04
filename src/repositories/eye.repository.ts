import { Eye } from '../entity/eye.entity';
import { Repository, EntityRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
export interface EyeRepository{
  setEye(eye: Eye);
  getEye();
  getEyeUser();
  updEye(id: number, name: string);
  delEye(id: number);
}
@EntityRepository(Eye)
export class EyeRepositoryImpl implements EyeRepository{
  public constructor(
    @InjectRepository(Eye)
    private readonly eyeRepository: Repository<Eye>,
  ) { }
  async setEye(eye: Eye) {
    const result = this.eyeRepository.save(eye);
    return result;
  }
  async getEye() {
    const result = this.eyeRepository.find();
    return result;
  }
  async getEyeUser() {
    const result = this.eyeRepository.find({ relations: ["user"] });
    return result;
  }
  async updEye(id: number, name: string) {
    const result = this.eyeRepository.update(id, { name: name })
    return result;
  }
  async delEye(id: number) {
    const result = await this.eyeRepository.delete({ id: id });
    return result;
  }
}