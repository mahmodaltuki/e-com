import { User } from "../entities/user.entity";

export const createUser = async (req: any, res: any) => {
    const user = await User.create(req.body)

    user.save()

    res.json({
        msg: "create User success",
        user: user
    })


}


export const getAllUser = async (req: any, res: any) => {

    const user = await User.find()

    res.json({
        msg: "get Users success",
        user: user
    })



}

export const getUser = async (req: any, res: any) => {

    const user = await User.findOneBy(req.params)

    res.json({
        msg: "get User success",
        user: user
    })


}

export const updateUser = async (req: any, res: any) => {

    const { userName, passWord, address } = req.body
    const Id = req.params.id

    try {
        const user = await User
            .createQueryBuilder()
            .update(User)
            .set(req.body)
            .where("id = :id", { id: Id })
            .execute()

        if (user.affected == 1) {

            return res.json({
                msg: "update User success"
            })
        }
    } catch (err) {

        return res.json({
            msg: "update User faild",
            error: err
        })
    }

}


export const deleteUser = async (req: any, res: any) => {

    const user = await User.remove(req.params)

    res.json({
        msg: "delete User success"
    })


}