import {Product} from "../models/productDto";

export const PRODUCT_MOCK:Omit<Product, 'id'> = {
    title: "Infinix INBOOK",
    description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    discountPercentage: 11.83,
    rating: 4.54,
    stock: 96,
    brand: "Infinix",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    images:["https://i.dummyjson.com/data/products/9/1.jpg"]
}



