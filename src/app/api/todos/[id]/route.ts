import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse } from "next/server";
import * as yup from "yup";

interface Segments {
    params:{ id: string}
}

const getTodo = async ( id : string): Promise<Todo | null> =>{

    return await prisma.todo.findFirst({ where:{ id: id ,}});

}

export async function GET(_request: Request, { params } : Segments) {

    const { id } = params
    const todo = await getTodo(id);

    if( !todo ){ 
        return NextResponse.json(
            {Status: 'No encontrado'}, 
            {status:404}
        )
    }
    
    return NextResponse.json({  
        Status: 'success',
        data:todo
    })
}

const putSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional(),
})

export async function PUT(request: Request, { params } : Segments) {
    const { id } = params

    try {
        const todo = await getTodo(id)

        if( !todo ){ 
            return NextResponse.json(
                {Status: 'No encontrado'}, 
                {status:404}
            )
        }

        const { complete, description } = await putSchema.validate( await request.json() )
        
        const updatedTodo= await prisma.todo.update({
            where: { id },
            data: { complete, description }
        })

        return NextResponse.json({  
            Status:'Success',
            updatedTodo
        })
    } catch (error) {
        return NextResponse.json({  
            error: error,
        },{status:400})
    }

    
}