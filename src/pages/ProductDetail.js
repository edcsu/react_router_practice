import { useParams } from "react-router-dom"

function ProductDetail() {
    const params = useParams()

    return (
        <>
            <h1>
                Product Detail
            </h1>
            <p>{params.id}</p>
        </>
    )
}

export default ProductDetail