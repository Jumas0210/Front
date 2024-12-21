/* eslint-disable react/prop-types */
export function Card({ item, setSelectedItem }) {
    return (
      <>
        <li
          key={item.id}
          className="product-item"
          onClick={() => setSelectedItem(item)}
        >
          <div className="product-item-content">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
            </div>
          </div>
        </li>
      </>
    );
  }
  