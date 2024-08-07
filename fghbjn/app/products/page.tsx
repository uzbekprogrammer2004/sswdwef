import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Img from '@/public/img.png';
import Img2 from '@/public/img2.png';
import Img3 from '@/public/img3.png';
import Img4 from '@/public/img4.png';
import ProductFilter from '@/components/filter';

interface Product {
  name: string;
  price: string;
  old_price: string;
  img: any;
}

const Index: React.FC = () => {
  const data: Product[] = [
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img2
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img3
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img4
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img2
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img3
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img4
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img2
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img3
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img4
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img2
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img3
    }

  ];
  const data2: Product[] = [
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img2
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img3
    },
    {
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "500 000 So'm",
      old_price: "750 000 So'm",
      img: Img4
    },
  ];

  return (
    <div className='w-full px-5 lg:px-[138px] bg-gray-200'>
      <div className='flex flex-col  lg:flex-row gap-6'>
        <div className='h-[522px] mt-6 rounded-lg flex-col w-full lg:w-1/4 bg-white'>
        <ProductFilter/>
        </div>
        <div className='w-full lg:w-3/4 rounded-lg bg-gray-200 p-6'>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mr-[-20px] '>
            {data.map((item, index) => (
              <div
                key={index}
                className='bg-white p-4 border rounded-lg shadow-sm transform transition-transform duration-100 hover:scale-105 hover:border-red-500'
              >
                <div className='relative'>
                  <Image src={item.img} alt={item.name} layout='responsive' />
                  <span className='absolute top-0 left-0 bg-red-500 text-white text-sm px-2 py-1'>Акция</span>
                </div>
                <h3 className='text-lg font-bold mt-4 mb-2'>{item.name}</h3>
                <p className='text-red-500 font-bold'>{item.price}</p>
                <p className='text-gray-500 line-through'>{item.old_price}</p>
                <button className='w-full bg-yellow-500 text-black py-2 mt-4 transition-colors duration-300 hover:bg-yellow-700'>
                  <ShoppingCartOutlined className='text-black mr-3 ' />
                  Корзина
                </button>
              </div>

            ))}
          </div>
          <button className='w-full py-5 bg-yellow-500 text-black rounded-lg mt-7 hover:bg-yellow-700 ' >Показать ещё</button>
        </div>
      </div>
      <div className='mb-32' >
        <h2 className='text-2xl font-bold mt-8 mb-4'>Реконмендуемые продукты</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {data2.map((item, index) => (
            <div
              key={index}
              className='bg-white p-4 border rounded-lg shadow-sm transform transition-transform duration-100 hover:scale-105 hover:border-red-500'
            >
              <div className='relative'>
                <Image src={item.img} alt={item.name} layout='responsive' />
                <span className='absolute top-0 left-0 bg-red-500 text-white text-sm px-2 py-1'>Акция</span>
              </div>
              <h3 className='text-lg font-bold mt-4 mb-2'>{item.name}</h3>
              <p className='text-red-500 font-bold'>{item.price}</p>
              <p className='text-gray-500 line-through'>{item.old_price}</p>
              <button className='w-full bg-yellow-500 text-black py-2 mt-4 transition-colors duration-300 hover:bg-yellow-700'>
                <ShoppingCartOutlined className='text-black mr-3 ' />
                Корзина
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

// "use client";

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { ShoppingCartOutlined } from '@ant-design/icons';
// import { FaHeart, FaShoppingCart } from 'react-icons/fa';
// import Slider from '@mui/material/Slider';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import { styled } from '@mui/material/styles';
// import Img from '@/public/img.png';
// import Img2 from '@/public/img2.png';
// import Img3 from '@/public/img3.png';
// import Img4 from '@/public/img4.png';
// import { StaticImageData } from 'next/image';
// import { SelectChangeEvent } from '@mui/material/Select';

// const CustomSlider = styled(Slider)({
//   color: '#FFD700',
//   '& .MuiSlider-thumb': {
//     borderRadius: '50%',
//     backgroundColor: '#FBD029',
//     border: '5px solid #1F1D14',
//   },
//   '& .MuiSlider-track': {
//     backgroundColor: '#FFD700',
//   },
//   '& .MuiSlider-rail': {
//     backgroundColor: '#BDBDBD',
//   },
//   '& .MuiSlider-thumb::before': {
//     display: 'none',
//   },
// });

// interface Product {
//   name: string;
//   price: string;
//   old_price: string;
//   img: StaticImageData;
// }

// const Index: React.FC = () => {
//   const [priceRange, setPriceRange] = useState<number[]>([3000, 4000]);
//   const [sku, setSku] = useState<string>('');
//   const [productCategory, setProductCategory] = useState<string>('All');
//   const [isNewProduct, setIsNewProduct] = useState<string>('All');
//   const [isOnSale, setIsOnSale] = useState<string>('All');

//   const handlePriceRangeChange = (event: Event, newValue: number | number[]) => {
//     setPriceRange(newValue as number[]);
//   };

//   const handleProductCategoryChange = (event: SelectChangeEvent<string>) => {
//     setProductCategory(event.target.value);
//   };

//   const handleIsNewProductChange = (event: SelectChangeEvent<string>) => {
//     setIsNewProduct(event.target.value);
//   };

//   const handleIsOnSaleChange = (event: SelectChangeEvent<string>) => {
//     setIsOnSale(event.target.value);
//   };

//   const data: Product[] = [
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img2 },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img3 },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img4 },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img2 },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img3 },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img4 },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img2 },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img3 },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img4 },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img2 },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img3 },
//   ];

//   const data2: Product[] = [
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img2 },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img3 },
//     { name: 'Бутса Nike Mercurial Superfly 8 FG', price: '500 000 So\'m', old_price: '750 000 So\'m', img: Img4 },
//   ];

//   return (
//     <div className='w-full bg-gray-200'>
//       <div className='flex flex-col lg:flex-row'>
//         <div className="flex px-[138px] w-[30%] ">
//           <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs h-[522px] transform transition-transform">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-bold">Филтрь</h2>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Цена</label>
//               <CustomSlider
//                 value={priceRange}
//                 onChange={handlePriceRangeChange}
//                 valueLabelDisplay="auto"
//                 min={100}
//                 max={4000}
//                 step={100}
//               />
//               <div className="flex justify-between text-sm mt-2">
//                 <span>{priceRange[0]} uzs</span>
//                 <span>{priceRange[1]} uzs</span>
//               </div>
//             </div>
//             <div className="mb-4">
//               <TextField
//                 label="SKU"
//                 variant="outlined"
//                 fullWidth
//                 value={sku}
//                 onChange={(e) => setSku(e.target.value)}
//               />
//             </div>
//             <div className="mb-4">
//               <FormControl variant="outlined" fullWidth>
//                 <InputLabel>Select Category</InputLabel>
//                 <Select
//                   value={productCategory}
//                   onChange={handleProductCategoryChange}
//                   label="Select Category"
//                 >
//                   <MenuItem value="All">Все</MenuItem>
//                   <MenuItem value="Category1">Category 1</MenuItem>
//                   <MenuItem value="Category2">Category 2</MenuItem>
//                 </Select>
//               </FormControl>
//             </div>
//             <div className="mb-4">
//               <FormControl variant="outlined" fullWidth>
//                 <InputLabel>New Product</InputLabel>
//                 <Select
//                   value={isNewProduct}
//                   onChange={handleIsNewProductChange}
//                   label="New Product"
//                 >
//                   <MenuItem value="All">Все</MenuItem>
//                   <MenuItem value="Yes">Да</MenuItem>
//                   <MenuItem value="No">Нет</MenuItem>
//                 </Select>
//               </FormControl>
//             </div>
//             <div className="mb-4">
//               <FormControl variant="outlined" fullWidth>
//                 <InputLabel>On Sale</InputLabel>
//                 <Select
//                   value={isOnSale}
//                   onChange={handleIsOnSaleChange}
//                   label="On Sale"
//                 >
//                   <MenuItem value="All">Все</MenuItem>
//                   <MenuItem value="Yes">Да</MenuItem>
//                   <MenuItem value="No">Нет</MenuItem>
//                 </Select>
//               </FormControl>
//             </div>
//           </div>
//         </div>
//         <div className='w-[65%] '>
//           <div className='flex flex-wrap gap-4'>
//             {data.map((item, index) => (
//               <div key={index} className="w-full md:w-1/2 lg:w-1/4">
//                 <div className="bg-white p-4 rounded-lg shadow-lg">
//                   <div className="relative">
//                     <Image src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-lg " />
//                     <div className="absolute top-2 right-2">
//                       <FaHeart className="text-red-500" />
//                     </div>
//                   </div>
//                   <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
//                   <p className="text-gray-600 mt-1">{item.price}</p>
//                   <p className="text-gray-400 line-through">{item.old_price}</p>
//                   <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg mt-2 flex items-center">
//                     <ShoppingCartOutlined className="mr-2" />
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;
