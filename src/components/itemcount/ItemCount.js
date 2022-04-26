import { useState } from "react"

const ItemCount = ({stock,initial,onAdd}) => {

  const [inventario, setInventario] = useState(initial)


  return (
    <div>
        <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{initial}</span>
          
          <div className="card-actions">
            <button className="btn btn-primary">+</button>
            <button className="btn btn-primary">-</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemCount