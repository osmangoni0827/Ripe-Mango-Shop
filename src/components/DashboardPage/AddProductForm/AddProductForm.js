import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './AddProductForm.css';
const AddProductForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageurl, setImageUrl] = useState('');
  const { productType } = useParams();

  const HandleImageUpload = (e) => {

    const ImagForm = new FormData();
    ImagForm.set('key', "20eb4f4a88d3505364e15416b41a0df2")
    ImagForm.append('image', e.target.files[0])
    axios.post('https://api.imgbb.com/1/upload', ImagForm)
      .then(imageData => {
        setImageUrl(imageData.data.data.url)
      })
  }

  const onSubmit = data => {
    const NewData = { ...data };
    NewData.prize = Number(data.prize);
    NewData.image = imageurl

    fetch('https://nameless-wildwood-35129.herokuapp.com/addProducts/' + productType, {
      method: 'POST',
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(NewData)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert("Your Product Is Add Successfully")
        }
      })
  };
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="addProductForm shadow">
      <h2 className="text-center mt-3">Product Information</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input  {...register("name", { required: true })} placeholder="Product Name" />
        <p>{errors.name && <span className="text-danger">This field is required</span>}</p>

        <input  {...register("prize", { required: true })} placeholder="Product Prize" />
        <p>{errors.prize && <span className="text-danger">This field is required</span>}</p>

        <input value={productType} {...register("productType", { required: true })} placeholder="Product Type" />
        <p>{errors.productType && <span className="text-danger">This field is required</span>}</p>

        <input  {...register("description", { required: true })} placeholder="Product Description" />
        <p>{errors.description && <span className="text-danger">This field is required</span>}</p>

        <input  {...register("quality", { required: true })} placeholder="Product Quality" />
        <p>{errors.quality && <span className="text-danger">This field is required</span>}</p>

        <input  {...register("Category", { required: true })} placeholder="Product Category" />
        <p>{errors.ProductCategory && <span className="text-danger">This field is required</span>}</p>
        <input  {...register("Stock", { required: true })} placeholder="Product Stock" />
        <p>{errors.Stock && <span className="text-danger">This field is required</span>}</p>
        <input {...register("Demand", { required: true })} placeholder="Product Demand" />

        <p>{errors.Demand && <span>This field is required</span>}</p>
        <input type="file" {...register("image", { required: true })} onChange={HandleImageUpload} placeholder="Product Demand" />
        <p>{errors.image && <span className="text-danger">This field is required</span>}</p>
        <div className="Button">
          {
            imageurl ? <input type="submit" className="addButton" />
              : <input disabled type="submit" className="addButton" />
          }
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;