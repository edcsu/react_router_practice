import { Link } from "react-router-dom"

const productList = [
    { id: 'eb8bd792-eca9-4100-a6d8-52722b376c6c', title: 'Product 1'},
    { id: '25061f54-ac2e-4453-b9db-e0238faa5c90', title: 'Product 2'},
    { id: '72bac53b-8add-4d65-b35b-485e7efe91a1', title: 'Product 3'},
    { id: '73e308d7-e87a-406d-8b11-2ce220f407cc', title: 'Product 4'},
]
function Products() {
  return (
    <div>
        <h1>Products page</h1>
        <ul>
            {productList.map((product) => (
                <li>
                    <Link to={`/products/${product.id}`}>
                        {product.title}
                    </Link>
                </li>))
            } 
        </ul>
    </div>
  )
}

export default Products