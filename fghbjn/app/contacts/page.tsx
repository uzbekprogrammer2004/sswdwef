// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import Link from 'next/link';
// import http from '@/api/interseptors';
// import axios, { AxiosResponse } from 'axios';
// import nikelogo from "@/public/nikelogo.jpg";
// import clicklogo from "@/public/adidaslogo.png";
// import paymelogo from "@/public/reeboklogo.png";

// interface Product {
//   product_id: number;
//   product_name: string;
//   cost: number;
//   image_url: string[]; // Image URL as an array
//   count: number;
// }

// interface FormValues {
//   name: string;
//   phone: string;
//   address: string;
// }

// const ShoppingCart: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<FormValues>({
//     mode: "onBlur",
//   });

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const token = localStorage.getItem('access_token');
//         const response: AxiosResponse<Product[]> = await http.get("/user-baskets", {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         if (response.status === 200) {
//           setProducts(response.data); // Assuming response.data contains the array of products
//         }
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const incrementCount = (id: number) => {
//     setProducts((prevProducts) =>
//       prevProducts.map((product) =>
//         product.product_id === id ? { ...product, count: product.count + 1 } : product
//       )
//     );
//   };

//   const decrementCount = (id: number) => {
//     setProducts((prevProducts) =>
//       prevProducts.map((product) =>
//         product.product_id === id && product.count > 0
//           ? { ...product, count: product.count - 1 }
//           : product
//       )
//     );
//   };

//   const deleteCard = (id: number) => {
//     setProducts((prevProducts) =>
//       prevProducts.filter((product) => product.product_id !== id)
//     );
//   };

//   const clearAll = () => {
//     setProducts([]);
//   };

//   const totalQuantity = products.length > 0 ? products.reduce(
//     (total, product) => total + product.count,
//     0
//   ) : 0;

//   const totalPrice = products.length > 0 ? products.reduce(
//     (total, product) => total + product.count * product.cost,
//     0
//   ) : 0;

//   const onSubmit: SubmitHandler<FormValues> = (data) => {
//     console.log(data);
//     reset();
//   };

//   return (
//     <div className="bg-gray-100 px-4 pt-4 pb-4 md:px-10 md:pt-10 md:pb-10">
//       <div className="container mx-auto">
//         <div className="flex flex-col gap-8 lg:flex-row">
//           <div className="w-full max-w-xl lg:max-w-2xl bg-white rounded-lg shadow-md p-4">
//             <div className="flex justify-between items-center pt-4 pb-4">
//               <h1 className="text-xl font-bold mb-4">Ваши корзина</h1>
//               <button onClick={clearAll} className="text-red-500">
//                 Очистить все
//               </button>
//             </div>
//             <div className="grid grid-cols-1 gap-4">
//               {products.map((product) => (
//                 <div
//                   key={product.product_id}
//                   className="flex border rounded-lg overflow-hidden p-4 bg-gray-200 relative mb-4"
//                 >
//                   <button
//                     onClick={() => deleteCard(product.product_id)}
//                     className="absolute flex justify-center items-center top-2 right-2 w-8 h-8 rounded-full bg-white text-red-500"
//                   >
//                     <DeleteOutlineOutlinedIcon />
//                   </button>
//                   <div className="flex flex-col sm:flex-row">
//                     <div className="w-36 h-28 flex-shrink-0 mr-4">
//                       {/* Display the first image from image_url array */}
//                       <Image
//                         src={product.image_url[0]}
//                         alt={product.product_name}
//                         width={145}
//                         height={120}
//                       />
//                     </div>
//                     <div className="flex-1 flex flex-col justify-between">
//                       <div className="font-bold text-lg mb-2">
//                         {product.product_name}
//                       </div>
//                       <div className="flex gap-2 font-bold text-lg mb-2 text-red-500">
//                         <p>Цена</p>
//                         {product.cost}
//                         <p>UZS</p>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => decrementCount(product.product_id)}
//                           className="flex justify-center items-center bg-white border w-8 h-8 font-bold rounded-full"
//                         >
//                           -
//                         </button>
//                         <span>{product.count}</span>
//                         <button
//                           onClick={() => incrementCount(product.product_id)}
//                           className="flex justify-center items-center bg-white border w-8 h-8 font-bold rounded-full"
//                         >
//                           +
//                         </button>
//                         <span className="pl-4 text-lg font-bold">
//                           {(
//                             product.count * product.cost
//                           ).toLocaleString()}{" "}
//                           UZS
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <h3 className="pt-4 pb-4 max-w-[400px] text-blue-500 cursor-pointer">
//               Все информация о доставке
//             </h3>
//             <p className="w-[225px] h-[1px] bg-blue-600 mt-[-26px] mb-7"></p>
//             <p className="max-w-[330px]">
//               Если у вас имеются вопросы, позвоните по номеру:{" "}
//               <span className="text-blue-500">+998 (99) 995 55 65</span>
//             </p>
//           </div>
//           <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
//             <div className="p-6">
//               <div className="text-lg font-semibold mb-2">Итого</div>
//               <div className="flex justify-between mb-4">
//                 <span>Кол-во товаров:</span>
//                 <span>{totalQuantity}</span>
//               </div>
//               <div className="flex justify-between mb-6">
//                 <span>Сумма:</span>
//                 <span className="font-semibold">
//                   {totalPrice.toLocaleString()} UZS
//                 </span>
//               </div>
//               <div className="text-lg font-semibold mb-2">Ваши данные</div>
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="name"
//                   >
//                     Имя / Фамилия
//                   </label>
//                   <input
//                     id="name"
//                     type="text"
//                     placeholder="Имя / Фамилия"
//                     {...register("name", { required: "Имя обязательно" })}
//                     className="w-full px-3 py-2 border rounded-lg focus:outline-none"
//                   />
//                   {errors.name && (
//                     <p className="text-red-500">{errors.name.message}</p>
//                   )}
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="phone"
//                   >
//                     Ваш номер
//                   </label>
//                   <input
//                     id="phone"
//                     type="text"
//                     placeholder="+998 _ _ _ _ _ _ _"
//                     {...register("phone", { required: "Телефон обязателен" })}
//                     className="w-full px-3 py-2 border rounded-lg focus:outline-none"
//                   />
//                   {errors.phone && (
//                     <p className="text-red-500">{errors.phone.message}</p>
//                   )}
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     htmlFor="address"
//                   >
//                     Адрес доставки
//                   </label>
//                   <div className="relative">
//                     <input
//                       id="address"
//                       type="text"
//                       placeholder="Область/город/улица/дом"
//                       {...register("address", { required: "Адрес обязателен" })}
//                       className="w-full px-3 py-2 border rounded-lg focus:outline-none"
//                     />
//                     <button
//                       type="button"
//                       className="absolute right-0 top-0 mt-1 mr-2 rounded-[4px] text-black w-7 h-7 bg-yellow-500 "
//                     >
//                       <LocationOnIcon/>
//                     </button>
//                   </div>
//                   {errors.address && (
//                     <p className="text-red-500">{errors.address.message}</p>
//                   )}
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full py-4 bg-yellow-500 text-white rounded-lg font-semibold"
//                 >
//                   Купить
//                 </button>
//               </form>
//             </div>
//             <div>
//               <h2 className="flex pl-4" >To'lov tizimlari</h2>
//               <div className="bg-white-100 p-4 flex gap-2 ">
//                 <Link href="https://paynet.uz/" legacyBehavior>
//                   <a
//                     target="_blank"
//                     className="flex items-center gap-2 bg-[#F2F2F2] hover:bg-red-300 text-black font-bold py-2 px-4 rounded"
//                   >
//                     <Image src={paymelogo} alt="Paynet" width={50} height={50} />
//                     <span>PAYNET</span>
//                   </a>
//                 </Link>
//                 <Link href="https://payme.uz/" legacyBehavior>
//                   <a
//                     target="_blank"
//                     className="flex items-center gap-2 bg-[#F2F2F2] hover:bg-red-300 text-black font-bold py-2 px-4 rounded"
//                   >
//                     <Image src={paymelogo} alt="Payme" width={50} height={50} />
//                     <span>PAYME</span>
//                   </a>
//                 </Link>
//                 <Link href="https://click.uz/" legacyBehavior>
//                   <a
//                     target="_blank"
//                     className="flex items-center gap-2 bg-[#F2F2F2] hover:bg-red-300 text-black font-bold py-2 px-4 rounded"
//                   >
//                     <Image src={clicklogo} alt="Click" width={50} height={50} />
//                     <span>CLICK</span>
//                   </a>
//                 </Link>
//               </div>
//               <form className="flex text-center px-4 gap-1 ">
//                 <input type="checkbox"/>
//                 <p className="flex mt-4" >Naqd pul bilan to'lov qilish</p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page