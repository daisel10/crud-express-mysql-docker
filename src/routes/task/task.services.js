import { getAllTaskModel, getIdTaskModel, postTaskModel, putTaskModel, deleteTaskModel } from "../../common/model/task.model.js"
export const getTask= async (req, res, next) => {
    try {
        const result = await getAllTaskModel()
        return res.json({result})
    } catch (error) {
        res.status(500).json({message:"something goes wrong"})
    }

}
export const getTaskId= async (req, res, next)=> {
    try {
        
        const { id } = req.params;

        if (typeof id === Number) throw new Error("Id is not number");
        
        const result = await getIdTaskModel(id)

        return res.json({result})
    } catch (error) {
        res.status(500).json({message:"something goes wrong"}, error)
    }
}

export const postTask= async (req, res, next)=> {
    try {
        const { task } = req.body

        const result = await postTaskModel(task)

        return res.json({result})
    } catch (error) {
        res.status(500).json({message:"something goes wrong"})
    }
}
export const putTaskId= async (req, res, next)=> {
    try {
        const { id } = req.params;
        const { task } = req.body
        
        if (typeof id === Number) throw new Error("Id is not number");

        const result = await putTaskModel(id,task)
        return res.json({result})

    } catch (error) {
        res.status(500).json({message:"something goes wrong"})
    }
}
export const deleteTaskId= async (req, res, next)=> {
    try {
        const { id } = req.params;

        if (typeof id === Number) throw new Error("Id is not number");

        const result = await deleteTaskModel(id)
        return res.json({result})
    } catch (error) {
        res.status(500).json({message:"something goes wrong"})
    }
}