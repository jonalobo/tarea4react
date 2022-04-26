import ItemCount from "../itemcount/ItemCount"

const ItemListContainer = () => {
  return (
    <div style={{width:'100%',height:'100vh',backgroundColor:'white',display:'flex',justifyContent:'center'}}>
        <ItemCount stock={6} initial={1}/>
    </div>
  )
}
export default ItemListContainer
