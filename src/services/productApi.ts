import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product, ResponseDeleteProduct, ResponseGetProducts} from "../models/productDto";

export const productApi = createApi({
    reducerPath: "productApi",
    tagTypes: ["Product"],
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/products'}),
    endpoints: (build) => ({
        getProducts: build.query<ResponseGetProducts, void>({
                query: () => '/',
                providesTags: ["Product"],
            }
        ),
        getProduct: build.query<Product, string>({
                query: (id) => `/${id}`,
                providesTags: ["Product"],
            }
        ),
        addProduct: build.mutation<Product, Omit<Product, 'id'>>({
                query: (newProduct) => ({
                    url: '/',
                    method: 'POST',
                    body: newProduct
                }),
                invalidatesTags: ["Product"],
            }
        ),
        updateProduct: build.mutation<Product, Partial<Product>>({
                query: (updatedProduct) => ({
                    url: '/',
                    method: 'PATCH',
                    body: updatedProduct
                }),
                invalidatesTags: ["Product"],
            }
        ),
        deleteProduct: build.mutation<ResponseDeleteProduct, string>({
                query: (id) => ({
                    url: `/${id}`,
                    method: 'DELETE',
                }),
                invalidatesTags: ["Product"],
            }
        ),
    })
})

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productApi