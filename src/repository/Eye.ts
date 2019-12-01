import { Eye } from "../entity/Eye";
import { getRepository } from "typeorm";

export class EyeRepo {
  eyeRepo;
  constructor() {
    this.eyeRepo = getRepository(Eye);
  }
  async setEye(eye: Eye) {
    const result = this.eyeRepo.save(eye);
    return result;
  }
  async getEye() {
    const result = this.eyeRepo.find();
    return result;
  }
  async getEyeUser() {
    const result = this.eyeRepo.find({ relations: ["user"] });
    return result;
  }
  async updEye(id:number,name:string){
    const result =this.eyeRepo.update(id,{ name: name } )
    return result;
  }
  async delEye(id: number) {
    const result = await this.eyeRepo.delete({ id: id });
    return result;
  }
}
