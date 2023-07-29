export type Product = {
    id: string,
    title: string,
    description: string,
    price: number,
    brand: string,
    category: string,
    discountPercentage: number,
    images: string[],
    rating: number,
    stock: number,
    thumbnail: string,
}

export type ResponseGetProducts = {
    products: Product[]
}

export type ResponseDeleteProduct =
    Product & {
    "isDeleted": boolean,
    "deletedOn": string
}

