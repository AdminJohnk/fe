import React, { useEffect, useState } from 'react';
import Header from '../General/Header/Header';
import Body from './Body/Body';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';

const CategoryPage = () => {
  const location = useLocation();
  const data = location.state && location.state.data;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list_product = await axios({
          method: 'get',
          url: 'https://ecommerce-api.herokuapp.com/products/category/' + data,
        });
        setProducts(list_product.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [data]);

  return (
    <div>
      <Header />
      <Body data={products} />
    </div>
  );
};

export default CategoryPage;
