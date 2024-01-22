import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

export const ProductComponent = () => {

    const [productList,setProductList] = useState<IProductData[]>([])

    interface IProductData {
        categoryId: string,
        color: string,
        description: string,
        image: string,
        name: string,
        price: number,
        rate: number,
        size: string[],
        _id: string
    }

    const getProductList = async () => {
        const result = await axios.get<null,AxiosResponse<IProductData[]>>('https://crudcrud.com/api/9e6dd515c4cb4eac9edac88b7b70617d/productH')
        if (result) {
            console.log(result.data)
            setProductList(result.data)
        }
    }

    useEffect(() => {
        getProductList()
    }, [])

    return (
        <div>
            {productList.map((item,index)=>{
                return <div key={index}>
                    {item.name}
                </div>
            })}
        </div>
    )
}