/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Item } from "../components/Item";
import { Header } from "../components/Header";
import "../components/items.css"



export function ProductList() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    const products = data.data;
    setData(products);
  };

  const handleBack = () => {
    console.log("hola")
  };

  const handleNext = () => {
    console.log("hola2")
  };



  return (
    <main className="view">
      <Header
        handleLeft={handleBack}
        handleRight={handleNext}
        nameleft={"Cancelar"}
        nameRight={"Continuar"}
      />
      <section className="product-view">
        <section className="product-list">
          <h2>Nuestros Zapatos</h2>
          <ul>
            {data.map((item) => (
              <Card item={item} setSelectedItem={setSelectedItem} />
            ))}
          </ul>

        </section>
        <Item setSelectedItem={setSelectedItem} selectedItem={selectedItem} deleteItem={()=>deleteItem(id) }/>
      </section>
    </main>
  );
}

export default ProductList;
