import { useState, useEffect } from "react"

const ItemCount = ({initial, stock}) => {

  const [inventario, setInventario] = useState(initial)
  
  useEffect(() => {
    console.log(stock)
  }, [])
  


  return (
    <div>
        <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{inventario}</span>
          
          <div className="card-actions">
            <button onClick={()=>{setInventario(inventario + 1)}} className="btn btn-primary">+</button>
            <button className="btn btn-primary">-</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemCount