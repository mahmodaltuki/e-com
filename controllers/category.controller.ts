import { Category } from "../entities/category.entity"

export const createCategory = async (req: any, res: any) => {
    const category = await Category.create(req.body)

    category.save()

    res.json({
        msg: "create category success",
        category: category
    })


}


export const getAllCategory = async (req: any, res: any) => {

    const category = await Category.find()

    res.json({
        msg: "get Categories success",
        category: category
    })



}

export const getCategory = async (req: any, res: any) => {

    const category = await Category.findOneBy(req.params)

    res.json({
        msg: "get Category success",
        category: category
    })


}

export const updateCategory = async (req: any, res: any) => {

    const Id = req.params.id

    try {
        const category = await Category
            .createQueryBuilder()
            .update(Category)
            .set(req.body)
            .where("id = :id", { id: Id })
            .execute()

        if (category.affected == 1) {

            return res.json({
                msg: "update category success"
            })
        }
    } catch (err) {

        return res.json({
            msg: "update category faild",
            error: err
        })
    }

}


export const deleteCategory = async (req: any, res: any) => {

    const category = await Category.remove(req.params)

    res.json({
        msg: "delete category success"
    })


}