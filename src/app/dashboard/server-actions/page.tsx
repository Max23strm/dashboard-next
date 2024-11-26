import prisma from '@/lib/prisma'
import { NewTodo, TodosGrid } from '@/todos'

export default async function RestTodosPage () {

    const todos =  await prisma.todo.findMany({orderBy:{description:'asc'}})

    return (
        <div>
            <h3 className='text-3xl my-10'>Server Actions</h3>
            <div className='w-full px-3 mx-5 mb-5'>
                <NewTodo/>
            </div>
            <TodosGrid todos={todos}/>
        </div>
    )
}
