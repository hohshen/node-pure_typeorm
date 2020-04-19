import { conn } from "./01connect";
import { Eye } from './entity/Eye';
import { getConnection } from "typeorm";

const normal = async (con) => {
    try {
        const EyeRep = con.getRepository(Eye);
        const leftEye = new Eye();
        leftEye.name = "test_no_ts";
        const m1 = await EyeRep.save(leftEye);
        const m2 = await EyeRep.find({ where: { name: "test_no_ts" } });
        console.log("no_ts", m1, m2)
        throw new Error("haha")
        await EyeRep.update({ name: "test_no_ts" }, { name: "test_no_ts_isUpdate" })
    } catch (e) {
        console.log(e.message)
    }
}
const transaction = async (con) => {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
        const leftEye = new Eye();
        leftEye.name = "test_has_ts";
        const m1 = await queryRunner.manager.getRepository(Eye).save(leftEye);
        const m2 = await queryRunner.manager.getRepository(Eye).find({ where: { name: "test_has_ts" } });
        console.log("has_ts", m1, m2);
        throw new Error("haha")
        await queryRunner.manager.getRepository(Eye).update({ name: "test_has_ts" }, { name: "test_has_ts_isUpdate" })
        await queryRunner.commitTransaction();
    } catch (err) {
        console.log("catch error and rollback", err.message)
        await queryRunner.rollbackTransaction();
    } finally {
        console.log("finial")
        await queryRunner.release();
    }

}
const main = async () => {
    const con = await conn();
    await normal(con);
    console.log("+++++++")
    await transaction(con);
}
main();