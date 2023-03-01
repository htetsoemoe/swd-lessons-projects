import { useEffect, useState } from "react"
import Card from "../components/Card"
import "./app.css"

const App = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const api = await fetch('https://fakestoreapi.com/products/');
    const data = await api.json();
    setItem(data);
    
    console.log(data);
  }

  return (
    <div className="container-fluid bg-secondary">
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {
          items.map(product => {
            return (
              <Card key={product.id} product={product} />
            )
          })
        }
      </div>
    </div>
  )
}

export default App