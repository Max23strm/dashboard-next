'use client';

import { IoTrashOutline } from "react-icons/io5";
import * as todoApi from "../helper/todos"
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { addTodo, deleteCompleted } from "../actions/todo-actions";

export const NewTodo = () => { 
    const router = useRouter()
    const [description, setDescription] = useState('')

    const submitFn = async ( e : FormEvent ) => {
        e.preventDefault()
        
        if(description.trim().length === 0) return;

        await addTodo(description)
        setDescription('')
        // await todoApi.createTodo(description)
        //     .then(()=>{
        //         setDescription('')
        //         router.refresh()
        //     })

    }

    // const deleteCompleted = async () => {
    //     await todoApi.deleteCompletedTodo()
    //         .then(() => router.refresh())
    // }

    return (
        <form onSubmit={submitFn} className='flex w-full'>
        <input type="text"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
            placeholder="¿Qué necesita ser hecho?" />

        <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
            Crear
        </button>
        
        <span className='flex flex-1'></span>

        <button 
            onClick={ () => deleteCompleted() }
            type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
            <IoTrashOutline />
            Delete completed
        </button>


        </form>
    )
}