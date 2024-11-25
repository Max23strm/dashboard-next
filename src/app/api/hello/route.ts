import { NextResponse } from "next/server";

export async function GET(request: Request) {

    return NextResponse.json({
        hola:'mundo'
    })
}

export async function POST(request: Request) {

    return NextResponse.json({
        hola:'mundo',
        metodo:'Post'
    })
}