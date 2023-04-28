import React from 'react'


export default function Cart({ listProduct }) {
    return <>
        {listProduct.map((product) => (
            <div className="container my-5 py-5">
                <div className="row">
                    <table className="col-12 ">
                        <tr>
                            <td>index</td>
                            <td>image</td>
                            <td>title</td>
                            <td>quantity</td>
                            <td>price</td>
                        </tr>
                        <tr>
                            <td>{product.id}</td>
                            <td><img style={{ width: "50px" }} src={product.image} /></td>                          
                            <td>{product.title}</td>
                            <td>{product.count}</td>
                            <td>${product.price}</td>


                        </tr>
                    </table>
                </div>


            </div>
        ))}
    </>;



}