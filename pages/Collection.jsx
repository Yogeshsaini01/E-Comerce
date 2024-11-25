import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, SetsubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      SetsubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      SetsubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProduct(productsCopy);
  };

  const sortProducts = () => {
    let sortedCopy = filterProduct.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProduct(sortedCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProduct(sortedCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [subCategory, search, showSearch, category]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilters(!showFilters)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          Filters
          <img
            className={`h-3 sm:hidden transition-transform duration-200 ${showFilters ? 'rotate-90' : ''
              }`}
            src={assets.dropdown_icon}
            alt="Dropdown Icon"
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 transition-all duration-300 ${showFilters ? 'block' : 'hidden'
            } sm:block`}
        >
          <p className='mb-3 text-sm font-bold'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input
                className='w-3'
                value={'Men'}
                onChange={toggleCategory}
                type="checkbox"
              />
              Men
            </label>
            <label className='flex gap-2'>
              <input
                className='w-3'
                value={'Women'}
                onChange={toggleCategory}
                type="checkbox"
              />
              Women
            </label>
            <label className='flex gap-2'>
              <input
                className='w-3'
                value={'Kids'}
                onChange={toggleCategory}
                type="checkbox"
              />
              Kids
            </label>
          </div>
        </div>

        {/* Sub-Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 transition-all duration-300 ${showFilters ? 'block' : 'hidden'
            } sm:block`}
        >
          <p className='mb-3 text-sm font-bold'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input
                className='w-3'
                value={'Topwear'}
                type="checkbox"
                onChange={toggleSubCategory}
              />
              Topwear
            </label>
            <label className='flex gap-2'>
              <input
                className='w-3'
                value={'Bottomwear'}
                type="checkbox"
                onChange={toggleSubCategory}
              />
              Bottomwear
            </label>
            <label className='flex gap-2'>
              <input
                className='w-3'
                value={'Winterwear'}
                type="checkbox"
                onChange={toggleSubCategory}
              />
              Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'Collections'} />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2'
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Mapping */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProduct.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
