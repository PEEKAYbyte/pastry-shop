import React, { useState } from "react";

const Products = () => {
  //products: An array to store the list of products.
  //newProductName: A string to store the name of the new product being added.
  // showAddProductForm: A boolean to control the display of the "Add Product" form.
  //Error State: Added an error state to keep track of validation messages.
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState("");
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [error, setError] = useState("");
  //handleAddProduct Function: Adds the new product to the products array and resets the form.
  const handleAddProduct = () => {
    //Validation Check: In handleAddProduct, a check ensures that newProductName is not empty before adding it to the product list.
    if (newProductName.trim() === "") {
      setError("Product name cannot be empty");
      return;
    }
    setProducts([...products, newProductName]);
    setNewProductName("");
    setShowAddProductForm(false);
    setError("");
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Pastry Shop Product </h1>

      <button onClick={() => setShowAddProductForm(true)}>
        Add New Product
      </button>
      {/* Conditional Rendering: The "Add Product" form is conditionally rendered based on the value of showAddProductForm. */}
      {showAddProductForm && (
        <div>
          <h2>Add Product</h2>

          {/* Error Message Display: Displays an error message if the validation fails */}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input
            type="text"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            placeholder="Product Name"
          />
          <button onClick={handleAddProduct}>Add Product</button>
        </div>
      )}

      <div>
        {/* //Product List: Displays the list of products added. */}
        <h2> Product list </h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
