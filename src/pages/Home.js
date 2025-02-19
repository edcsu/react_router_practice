import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate('/products')
    }
    return (
        <div>
            <h1>Home page</h1>
            <p> Go to <Link to='products'>Products</Link></p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </div>
    )
}

export default Home