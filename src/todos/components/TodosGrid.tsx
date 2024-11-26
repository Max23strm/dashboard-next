'use client'

import { Todo } from "@prisma/client"
import { TodoItem } from "./TodoItem"
import * as todoApi from "../helper/todos"
import { useRouter } from "next/navigation"
import { togleTodo } from "../actions/todo-actions"

interface Props {
    todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: Props ) => {

    const router = useRouter()

    // const toggleTodo = async (id: string, complete: boolean) => {
    //     const updateTodo = await todoApi.updateTodo(id, complete)
    //     console.log(updateTodo)
    //     router.refresh()

    // }


    return (
        <div className="p-2">
            <h3 className="text-xl">Todos</h3>

            <div className="grid gid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {todos.map( t => <TodoItem todo={t} toggleTodo={togleTodo} key={t.id}/>)}
            </div>
            
        </div>
    )
}
