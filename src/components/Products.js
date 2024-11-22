import React, { useEffect, useState } from "react";

const Products = () => {
  //products: An array to store the list of products.
  //newProductName: A string to store the name of the new product being added.
  // showAddProductForm: A boolean to control the display of the "Add Product" form.
  //Error State: Added an error state to keep track of validation messages.
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState("");
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [error, setError] = useState("");
  //State for Edit Mode:
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [editProductName, setEditProductName] = useState("");
 
 // useeffect hook for data store in localstorage

 useEffect(()=>{
  const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
  setProducts(storedProducts);
 },[]);
 
 
 
 
  //handleAddProduct Function: Adds the new product to the products array and resets the form.
  const handleAddProduct = (event) => {
    // prevent default form submission behavior
    event.preventDefault();
    //Validation Check: In handleAddProduct, a check ensures that newProductName is not empty before adding it to the product list.
    if (newProductName.trim() === "") {
      setError("Product name cannot be empty");
      return;
    }
    // setProducts([...products, newProductName]);
    const updatedProducts =[...products,newProductName];
    setProducts(updatedProducts);
    localStorage.setItem('products',JSON.stringify(updatedProducts));
    
    setNewProductName("");
    setShowAddProductForm(false);
    setError("");
  };
  // Function to Handle Edit Button Click:
  const handleEditClick = (index) => {
    setIsEditing(true);
    setCurrentProduct(index);
    setEditProductName(products[index]);
  };
  // Function to Handle Edit Product Submission:
  const handleEditProduct = (event) => {
    event.preventDefault();

    if (editProductName.trim() === "") {
      setError("Product Name cannot be empty");
      return;
    }

    const updatedProducts = [...products];
    updatedProducts[currentProduct] = editProductName;
    setProducts(updatedProducts);
    localStorage.setItem('products',JSON.stringify(updatedProducts));
    
    setIsEditing(false);
    setCurrentProduct(null);
    setEditProductName("");
    setError("");
  };
  // handle delete

  const handleDeleteProduct = (index) => {
    //products.filter():
    //This is a method called filter() that is being called on the products array.
    //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    // const updatedProducts = products.filter((_, i) => i !== index);
    //setProducts(updatedProducts);

    const updatedProducts = [
      ...products.slice(0, index),
      ...products.slice(index + 1),
    ];
    setProducts(updatedProducts);
    localStorage.setItem('products',JSON.stringify(updatedProducts));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Pastry Shop Product </h1>
      <h3> product add, edit,delete using without local storage and backend</h3>

      <button onClick={() => setShowAddProductForm(true)}>
        Add New Product
      </button>
      {/* Conditional Rendering: The "Add Product" form is conditionally rendered based on the value of showAddProductForm. */}
      {showAddProductForm && (
        // use onsubmit handler
        <form onSubmit={handleAddProduct}>
          <h2>Add Product</h2>

          {/* Error Message Display: Displays an error message if the validation fails */}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input
            type="text"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            placeholder="Product Name"
          />
          {/* use submit button */}
          {/* we use prevent default so we use form insted of buton on click function */}
          <button type="submit">Add Product</button>
        </form>
      )}
      {/* Conditional Rendering for Edit Form: */}
      {isEditing && (
        <form onSubmit={handleEditProduct}>
          <h2> Edit Product </h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input
            type="text"
            value={editProductName}
            onChange={(e) => setEditProductName(e.target.value)}
            placeholder="Product Name"
          />
          <button type="submit">Save Changes</button>
        </form>
      )}

      <div>
        {/* //Product List: Displays the list of products added. */}
        <h2> Product list </h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product}
              {/* Edit Button in Product List: */}
              <button onClick={() => handleEditClick(index)}>Edit</button>
              <button onClick={() => handleDeleteProduct(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
