import {pool} from './mysql.js';

export const getAllTaskModel= async ()=>{
    return await pool.query("SELECT * FROM task")
}

export const getIdTaskModel= async (id)=>{
    return await pool.query(`SELECT * FROM task WHERE id = ${id}`)

}
export const postTaskModel= async (task)=>{
    

    return await pool.query(`INSERT INTO task (task) VALUES ("${task}")`)

}
export const putTaskModel= async (id, task)=>{

    return await pool.query(`UPDATE task SET task = "${task}" WHERE id = ${id} `)

}

export const deleteTaskModel= async (id)=>{

    return await pool.query(`DELETE FROM task WHERE id = ${id}` )

}