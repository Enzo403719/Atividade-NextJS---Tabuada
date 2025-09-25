import { NextResponse } from 'next/server';


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const numeroParam = searchParams.get('numero');
    const numero = Number(numeroParam);


    if (!numeroParam || isNaN(numero)) {
        return NextResponse.json({
            error: 'Parâmetro "numero" inválido ou ausente.'
        }, { status: 400 });
    }


    const tabuada = [];
    for (let i = 1; i <= 10; i++) {
        tabuada.push({
            operacao: `${numero} x ${i}`,
            resultado: numero * i
        });
    }


    return NextResponse.json({
        numero,
        tabuada
    });
}