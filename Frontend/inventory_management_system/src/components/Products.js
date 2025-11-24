import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Products({ searchQuery }) {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch("http://localhost:3001/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      const data = await res.json();
      if (res.status === 201) {
        setProductData(data);
        setFilteredData(data);
      } else {
        console.log("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredData(productData);
    } else {
      setFilteredData(
        productData.filter((item) =>
          item.ProductName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, productData]);

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/deleteproduct/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      if (response.status === 201) {
        getProducts();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container-fluid p-5'>
      <h1>Products Inventory</h1>
      <div className='add_button'>
        <NavLink to="/insertproduct" className='btn btn-primary fs-5'> + Add New Product</NavLink>
      </div>
      <div className="overflow-auto mt-3" style={{ maxHeight: "38rem" }}>
        <table className="table table-striped table-hover mt-3 fs-5">
          <thead style={{ backgroundColor: "#6c63ff", color: "white" }}>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Barcode</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((element, id) => (
              <tr key={element._id}>
                <th scope="row">{id + 1}</th>
                <td>{element.ProductName}</td>
                <td>{element.ProductPrice}</td>
                <td>{element.ProductBarcode}</td>
                <td><NavLink to={`/updateproduct/${element._id}`} className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></NavLink></td>
                <td><button className="btn btn-danger" onClick={() => deleteProduct(element._id)}><i className="fa-solid fa-trash"></i></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
