/* eslint-disable react/prop-types */
import axios from 'axios';
import EditProduct from './EditProducto';
export function Item( {selectedItem , setSelectedItem} ){

      const deleteItem = (id) =>{
    
        axios.delete(`http://localhost:3000/products/${id}`,)
        .then(response => {
            console.log("Producto eliminado:", response.data);
            // Realiza alguna acción después de eliminar el producto (como actualizar el estado o la UI)
          })
          .catch(error => {
            console.error("Error al eliminar el producto:", error.response ? error.response.data : error);
          });
    
    }

    return(
        <section className="product-detail">
          {selectedItem ? (
            <div className="product-detail-content">
              <div className="product-image">
                <img src={selectedItem.image} alt={selectedItem.name} />
              </div>
              <div className="product-info">
                <h2>{selectedItem.name}</h2>
                <p className="price">${selectedItem.price}</p>
                <p className="description">{selectedItem.description}</p>
                <button
                  onClick={() => deleteItem(selectedItem.id)}
                  className="add-to-cart"
                >
                  Eliminar
                </button>
                <EditProduct selectedItem={selectedItem} setSelected={setSelectedItem} />
              </div>
            </div>
          ) : (
            <div className="no-selection">
              <p>Selecciona un producto para ver los detalles</p>
            </div>
          )}
        </section>
    )
}