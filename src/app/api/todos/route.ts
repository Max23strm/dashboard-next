import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { todo } from "node:test";
import * as yup from "yup";

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    const take = Number(searchParams.get('take') ?? '10')
    const skip = Number(searchParams.get('skip') ?? '0')

    if( isNaN(take)){ 
        return NextResponse.json(
            {Status: 'Take tiene que ser un número'}, 
            {status:400}
        )
    }
    if( isNaN(skip)){ 
        return NextResponse.json(
            {Status: 'Skip tiene que ser un número'}, 
            {status:400}
        )
    }

    const todos = await prisma.todo.findMany({ take, skip, });
    
    return NextResponse.json({  
        Status: 'Success',
        data: todos
    })
}

const postSchema = yup.object({
    description: yup.string().required(),
    complete: yup.boolean().optional().default(false),
})

export async function POST(request: Request) {

    try {
        const { complete, description } = await postSchema.validate( await request.json() )
        const todo = await prisma.todo.create({data:{ complete, description }})

        return NextResponse.json({  
            Status:'Success',
            todo_id:todo.id
        })
    } catch (error) {
        return NextResponse.json({  
            error,
        },{status:400})
    }

    
}

export async function DELETE(request: Request) {

    try {
        await prisma.todo.deleteMany({where: { complete: true } })

        return NextResponse.json({  
            Status:'Success',
        })
    } catch (error) {
        return NextResponse.json({  
            error,
        },{status:400})
    }

    
}

