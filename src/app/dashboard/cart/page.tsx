import { WidgetItem } from "@/app/components";
import { getCookieCart, ItemCard } from "@/app/shopping-cart";
import { Product, products } from "@/products/data/products";
import { cookies } from "next/headers";

export const metadata = {
    title: 'Carrito de compras'
}

interface ProductInCart {
    product: Product,
    quantity: number
}

const getProductsInCart = (cart: {[id: string]: number}) => {
    const productsInCart :ProductInCart[] = []

    for ( const id of Object.keys(cart)) {
        
        const product = products.find( p => p.id === id)
        if( product ) {
            productsInCart.push({product: product, quantity: cart[id]})
        }

    }

    return productsInCart
}



export default async function CartPage() {
    
    const cookieStore = await cookies()
    const cart = JSON.parse(cookieStore.get('cart')?.value ?? '{}') as {[id: string]: number}

    const productsInCart = getProductsInCart(cart)

    const totalToPay = productsInCart.reduce( (prev, current) => current.product.price * current.quantity + prev, 0 )
    
    return (
        <div>
            <h1 className="text-5xl">Productos en el carrito</h1>
            <hr className="my-2"/>

            <div className="flex flex-col sm:flex-row gap-2 w-full">

                <div className="flex flex-col gap-2 w-full sm:8/12">
                    {
                        productsInCart.map( ({product, quantity}) => (
                            <ItemCard product={product} quantity={quantity} key={product.id}/>
                        ))
                    }
                </div>
                <div className="flex flex-col w-full sm:w-4/12">
                    <WidgetItem 
                        title="Total a pagar" 
                        mainContet={`$${(totalToPay * 1.15).toFixed(2)}`} 
                        subtitle="Impuestos 15%"
                    />
                </div>
            </div>
        </div>
    );
}