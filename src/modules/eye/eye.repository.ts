import { Eye } from '../../entity/eye.entity';
import { Repository, EntityRepository } from 'typeorm';
@EntityRepository(Eye)
export class EyeRepository extends Repository<Eye>{
  async setEye(eye: Eye) {
    const result = this.save(eye);
    return result;
  }
  async getEye() {
    const result = this.find();
    return result;
  }
  async getEyeUser() {
    const result = this.find({ relations: ["user"] });
    return result;
  }
  async updEye(id: number, name: string) {
    const result = this.update(id, { name: name })
    return result;
  }
  async delEye(id: number) {
    const result = await this.delete({ id: id });
    return result;
  }
}