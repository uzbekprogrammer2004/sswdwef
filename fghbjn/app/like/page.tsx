// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import { getLike, likeSave } from '@/service/like';
// import { notification } from 'antd';
// import Favorite from '@mui/icons-material/Favorite';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

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
//   const [likedProducts, setLikedProducts] = useState<{ [key: number]: boolean }>({});
//   const [page, setPage] = useState<number>(1);
//   const [limit, setLimit] = useState<number>(4);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<FormValues>({
//     mode: "onBlur",
//   });

//   const fetchProducts = async (page: number, limit: number) => {
//     try {
//       const response = await getLike(page, limit);
//       console.log('Serverdan javob:', response);
//       if (response) {
//         const validProducts = response.filter((product: Product) =>
//           product.image_url.every((url: string) => {
//             try {
//               new URL(url);
//               return true;
//             } catch (e) {
//               console.error(`Noto'g'ri URL: ${url}`);
//               return false;
//             }
//           })
//         );

//         // Liked productsni default true qilib sozlash
//         const liked = validProducts.reduce((acc: { [key: number]: boolean }, product) => {
//           acc[product.product_id] = true;
//           return acc;
//         }, {});

//         setProducts(validProducts);
//         setLikedProducts(liked);
//       }
//     } catch (error) {
//       console.log('Mahsulotlarni yuklashda xatolik:', error);
//     }
//   };

//   const handleAddToLike = async (productId: number) => {
//     console.log(productId);

//     console.log('Serverga productId yuborilmoqda: ', productId);
//     try {
//       const response = await likeSave({ productId });
//       console.log('Serverdan javob:', response);
//       if (response && response.status === 201) {
//         setLikedProducts((prevLikedProducts) => ({
//           ...prevLikedProducts,
//           [productId]: !prevLikedProducts[productId],
//         }));
//         if (likedProducts[productId]) {
//           setProducts((prevProducts) =>
//             prevProducts.filter((product) => product.product_id !== productId)
//           );
//           notification.success({
//             message: 'Success',
//             description: 'Like bo\'yicha ma\'lumot muvaffaqiyatli olib tashlandi',
//           });
//         } else {
//           notification.success({
//             message: 'Success',
//             description: 'Like bo\'yicha ma\'lumot muvaffaqiyatli saqlandi',
//           });
//         }
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error('Xato tafsilotlari:', error.message);
//         notification.error({
//           message: 'Saqlashda xatolik',
//           description: 'Ma\'lumot saqlanmadi',
//         });
//       } else {
//         console.error('Noma\'lum xato:', error);
//         notification.error({
//           message: 'Saqlashda xatolik',
//           description: 'Ma\'lumot saqlanmadi',
//         });
//       }
//     }
//   };

//   useEffect(() => {
//     fetchProducts(page, limit);
//   }, [page, limit]);

//   const deleteCard = (id: number) => {
//     setProducts((prevProducts) =>
//       prevProducts.filter((product) => product.product_id !== id)
//     );
//   };

//   const clearAll = () => {
//     setProducts([]);
//   };

//   const totalQuantity = products.reduce(
//     (total, product) => total + product.count,
//     0
//   );

//   const totalPrice = products.reduce(
//     (total, product) => total + product.count * product.cost,
//     0
//   );

//   const onSubmit: SubmitHandler<FormValues> = (data) => {
//     console.log(data);
//     reset();
//   };

//   const handleLoadMore = () => {
//     setLimit((prevLimit) => prevLimit + 4);
//   };

//   return (
//     <div className="bg-gray-100 px-4 pt-4 pb-4 md:px-10 md:pt-10 md:pb-10">
//       <div className="container mx-auto">
//         <div className="flex flex-col gap-8 lg:flex-row">
//           <div className="w-full max-w-xl lg:max-w-2xl bg-white rounded-lg shadow-md p-4">
//             <div className="flex justify-between items-center pt-4 pb-4">
//               <h1 className="text-xl font-bold mb-4">Ваши like</h1>
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
//                       <div
//                         className="absolute top-2 right-2 z-10 cursor-pointer"
//                         onClick={() => handleAddToLike(product.product_id)}
//                       >
//                         {likedProducts[product.product_id] ? (
//                           <Favorite style={{ color: 'red' }} />
//                         ) : (
//                           <FavoriteBorder style={{ color: 'gray' }} />
//                         )}
//                       </div>
//                   <div className="flex flex-col sm:flex-row">
//                     <div className="w-36 h-28 flex-shrink-0 mr-4 relative">
//                       {/* Display the first image from image_url array */}
//                       <Image
//                         src={product.image_url[0]}
//                         alt={product.product_name}
//                         width={145}
//                         height={100}
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
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button onClick={handleLoadMore} className="w-full mt-4 py-2 bg-blue-500 text-white font-bold rounded-lg">
//               Ko'proq yuklash
//             </button>
//             <h3 className="pt-4 pb-4 max-w-[400px] text-blue-500 cursor-pointer">
//               Все информация о доставке
//             </h3>
//             <p className="w-[225px] h-[1px] bg-blue-600 mt-[-26px] mb-7"></p>
//             <p className="max-w-[330px]">
//               Если у вас имеются вопросы, позвоните по номеру:{" "}
//               <span className="text-blue-500">+998 (99) 995 55 65</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;


// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import { getLike, likeSave } from '@/service/like';
// import { notification } from 'antd';
// import Favorite from '@mui/icons-material/Favorite';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

// import { Product } from '@/service/product'; // Iltimos, o'zingizning import yo'lini to'g'rilashni unutmang

// interface Product {
//   product_id: number;
//   product_name: string;
//   cost: number;
//   image_url: string[];
//   count: number;
// }

// interface FormValues {
//   name: string;
//   phone: string;
//   address: string;
// }

// const ShoppingCart: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [likedProducts, setLikedProducts] = useState<{ [key: number]: boolean }>({});
//   const [page, setPage] = useState<number>(1);
//   const [limit, setLimit] = useState<number>(4);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<FormValues>({
//     mode: "onBlur",
//   });

//   const fetchProducts = async (page: number, limit: number) => {
//     try {
//       const response = await getLike(page, limit);
//       console.log('Serverdan javob:', response);
//       if (response) {
//         const validProducts = response.filter((product: Product) =>
//           product.image_url.every((url: string) => {
//             try {
//               new URL(url);
//               return true;
//             } catch (e) {
//               console.error(`Noto'g'ri URL: ${url}`);
//               return false;
//             }
//           })
//         );

//         const liked = validProducts.reduce((acc: { [key: number]: boolean }, product) => {
//           acc[product.product_id] = likedProducts[product.product_id] || false;
//           return acc;
//         }, {});

//         setProducts(validProducts);
//         setLikedProducts(liked);
//       }
//     } catch (error) {
//       console.log('Mahsulotlarni yuklashda xatolik:', error);
//     }
//   };

//   const handleAddToLike = async (productId: number) => {
//     try {
//       const response = await likeSave({ productId: productId.toString() });
//       console.log('Serverdan javob:', response);
//       if (response && response.status === 201) {
//         setLikedProducts((prevLikedProducts) => {
//           const newLikedProducts = {
//             ...prevLikedProducts,
//             [productId]: !prevLikedProducts[productId],
//           };
//           if (prevLikedProducts[productId]) {
//             setProducts((prevProducts) =>
//               prevProducts.filter((product) => product.product_id !== productId)
//             );
//             notification.success({
//               message: 'Success',
//               description: 'Like bo\'yicha ma\'lumot muvaffaqiyatli olib tashlandi',
//             });
//           } else {
//             notification.success({
//               message: 'Success',
//               description: 'Like bo\'yicha ma\'lumot muvaffaqiyatli saqlandi',
//             });
//           }
//           return newLikedProducts;
//         });
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error('Xato tafsilotlari:', error.message);
//         notification.error({
//           message: 'Saqlashda xatolik',
//           description: 'Ma\'lumot saqlanmadi',
//         });
//       } else {
//         console.error('Noma\'lum xato:', error);
//         notification.error({
//           message: 'Saqlashda xatolik',
//           description: 'Ma\'lumot saqlanmadi',
//         });
//       }
//     }
//   };

//   useEffect(() => {
//     fetchProducts(page, limit);
//   }, [page, limit]);

//   const deleteCard = (id: number) => {
//     setProducts((prevProducts) =>
//       prevProducts.filter((product) => product.product_id !== id)
//     );
//   };

//   const clearAll = () => {
//     setProducts([]);
//   };

//   const totalQuantity = products.reduce(
//     (total, product) => total + product.count,
//     0
//   );

//   const totalPrice = products.reduce(
//     (total, product) => total + product.count * product.cost,
//     0
//   );

//   const onSubmit: SubmitHandler<FormValues> = (data) => {
//     console.log(data);
//     reset();
//   };

//   const handleLoadMore = () => {
//     setLimit((prevLimit) => prevLimit + 4);
//   };

//   return (
//     <div className="bg-gray-100 px-4 pt-4 pb-4 md:px-10 md:pt-10 md:pb-10">
//       <div className="container mx-auto">
//         <div className="flex flex-col gap-8 lg:flex-row">
//           <div className="w-full max-w-xl lg:max-w-2xl bg-white rounded-lg shadow-md p-4">
//             <div className="flex justify-between items-center pt-4 pb-4">
//               <h1 className="text-xl font-bold mb-4">Ваши like</h1>
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
//                   <div
//                     className="absolute top-2 right-2 z-10 cursor-pointer"
//                     onClick={() => handleAddToLike(product.product_id)}
//                   >
//                     {likedProducts[product.product_id] ? (
//                       <Favorite style={{ color: 'red' }} />
//                     ) : (
//                       <FavoriteBorder style={{ color: 'gray' }} />
//                     )}
//                   </div>
//                   <div className="flex flex-col sm:flex-row">
//                     <div className="w-36 h-28 flex-shrink-0 mr-4 relative">
//                       {/* Display the first image from image_url array */}
//                       <Image
//                         src={product.image_url[0]}
//                         alt={product.product_name}
//                         width={145}
//                         height={100}
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
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button onClick={handleLoadMore} className="w-full mt-4 py-2 bg-blue-500 text-white font-bold rounded-lg">
//               Ko'proq yuklash
//             </button>
//             <h3 className="pt-4 pb-4 max-w-[400px] text-blue-500 cursor-pointer">
//               Все информация о доставке
//             </h3>
//             <p className="w-[225px] h-[1px] bg-blue-600 mt-[-26px] mb-7"></p>
//             <p className="max-w-[330px]">
//               Если у вас имеются вопросы, позвоните по номеру:{" "}
//               <span className="text-blue-500">+998 (99) 995 55 65</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;


// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { getLike, likeSave } from '@/service/like';
// import { notification } from 'antd';
// import Favorite from '@mui/icons-material/Favorite';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

// interface Product {
//   product_id: number;
//   product_name: string;
//   cost: number;
//   image_url: string[];
//   count: number;
// }

// interface FormValues {
//   name: string;
//   phone: string;
//   address: string;
// }

// const ShoppingCart: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [likedProducts, setLikedProducts] = useState<{ [key: number]: boolean }>({});
//   const [page, setPage] = useState<number>(1);
//   const [limit, setLimit] = useState<number>(4);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<FormValues>({
//     mode: "onBlur",
//   });

//   const fetchProducts = async (page: number, limit: number) => {
//     try {
//       const response = await getLike(page, limit);
//       console.log('Serverdan javob:', response);
//       if (response) {
//         const validProducts = response.filter((product: Product) =>
//           product.image_url.every((url: string) => {
//             try {
//               new URL(url);
//               return true;
//             } catch (e) {
//               console.error(`Noto'g'ri URL: ${url}`);
//               return false;
//             }
//           })
//         );

//         // Set initial liked state to true for all fetched products
//         const liked = validProducts.reduce((acc: { [key: number]: boolean }, product) => {
//           acc[product.product_id] = true; // Default to true for demonstration
//           return acc;
//         }, {});

//         setProducts(validProducts);
//         setLikedProducts(liked);
//       }
//     } catch (error) {
//       console.log('Mahsulotlarni yuklashda xatolik:', error);
//     }
//   };

//   const handleAddToLike = async (productId: number) => {
//     try {
//       const response = await likeSave({ productId: productId.toString() });
//       console.log('Serverdan javob:', response);
//       if (response && response.status === 201) {
//         setLikedProducts((prevLikedProducts) => {
//           const newLikedProducts = {
//             ...prevLikedProducts,
//             [productId]: !prevLikedProducts[productId],
//           };

//           if (prevLikedProducts[productId]) {
//             setProducts((prevProducts) =>
//               prevProducts.filter((product) => product.product_id !== productId)
//             );
//             notification.success({
//               message: 'Success',
//               description: 'Like bo\'yicha ma\'lumot muvaffaqiyatli olib tashlandi',
//             });
//           } else {
//             notification.success({
//               message: 'Success',
//               description: 'Like bo\'yicha ma\'lumot muvaffaqiyatli saqlandi',
//             });
//           }
//           return newLikedProducts;
//         });
//       }
//     } catch (error) {
//       console.error('Xato tafsilotlari:', error);
//       notification.error({
//         message: 'Saqlashda xatolik',
//         description: 'Ma\'lumot saqlanmadi',
//       });
//     }
//   };

//   useEffect(() => {
//     fetchProducts(page, limit);
//   }, [page, limit]);

//   const deleteCard = (id: number) => {
//     setProducts((prevProducts) =>
//       prevProducts.filter((product) => product.product_id !== id)
//     );
//   };

//   const clearAll = () => {
//     setProducts([]);
//   };

//   const totalQuantity = products.reduce(
//     (total, product) => total + product.count,
//     0
//   );

//   const totalPrice = products.reduce(
//     (total, product) => total + product.count * product.cost,
//     0
//   );

//   const onSubmit: SubmitHandler<FormValues> = (data) => {
//     console.log(data);
//     reset();
//   };

//   const handleLoadMore = () => {
//     setLimit((prevLimit) => prevLimit + 4);
//   };

//   return (
//     <div className="bg-gray-100 px-4 pt-4 pb-4 md:px-10 md:pt-10 md:pb-10">
//       <div className="container mx-auto">
//         <div className="flex flex-col gap-8 lg:flex-row">
//           <div className="w-full max-w-xl lg:max-w-2xl bg-white rounded-lg shadow-md p-4">
//             <div className="flex justify-between items-center pt-4 pb-4">
//               <h1 className="text-xl font-bold mb-4">Ваши like</h1>
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
//                   <div
//                     className="absolute top-2 right-2 z-10 cursor-pointer"
//                     onClick={() => handleAddToLike(product.product_id)}
//                   >
//                     {likedProducts[product.product_id] ? (
//                       <Favorite style={{ color: 'red' }} />
//                     ) : (
//                       <FavoriteBorder style={{ color: 'gray' }} />
//                     )}
//                   </div>
//                   <div className="flex flex-col sm:flex-row">
//                     <div className="w-36 h-28 flex-shrink-0 mr-4 relative">
//                       {/* Display the first image from image_url array */}
//                       <Image
//                         src={product.image_url[0]}
//                         alt={product.product_name}
//                         width={145}
//                         height={100}
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
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button onClick={handleLoadMore} className="w-full mt-4 py-2 bg-blue-500 text-white font-bold rounded-lg">
//               Ko'proq yuklash
//             </button>
//             <h3 className="pt-4 pb-4 max-w-[400px] text-blue-500 cursor-pointer">
//               Все информация о доставке
//             </h3>
//             <p className="w-[225px] h-[1px] bg-blue-600 mt-[-26px] mb-7"></p>
//             <p className="max-w-[330px]">
//               Если у вас имеются вопросы, позвоните по номеру:{" "}
//               <span className="text-blue-500">+998 (99) 995 55 65</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getLike, likeSave, Product } from '@/service/like';
import { notification } from 'antd';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

interface FormValues {
  name: string;
  phone: string;
  address: string;
}

const ShoppingCart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [likedProducts, setLikedProducts] = useState<{ [key: number]: boolean }>({});
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(4);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const fetchProducts = async (page: number, limit: number) => {
    try {
      const response = await getLike(page, limit);
      console.log('Serverdan javob:', response);

      if (response) {
        const validProducts = response.filter((product) =>
          product.image_url.every((url) => {
            try {
              new URL(url);
              return true;
            } catch (e) {
              console.error(`Noto'g'ri URL: ${url}`);
              return false;
            }
          })
        );

        const liked = validProducts.reduce((acc, product) => {
          acc[product.product_id] = product.like || false; // Default to false if not defined
          return acc;
        }, {} as { [key: number]: boolean });

        setProducts(validProducts);
        setLikedProducts(liked);
      }
    } catch (error) {
      console.log('Mahsulotlarni yuklashda xatolik:', error);
    }
  };

  const handleAddToLike = async (productId: number) => {
    try {
      const response = await likeSave({ productId: productId.toString() });
      console.log('Serverdan javob:', response);
      if (response && response.status === 201) {
        setLikedProducts((prevLikedProducts) => {
          const newLikedProducts = {
            ...prevLikedProducts,
            [productId]: !prevLikedProducts[productId],
          };

          if (prevLikedProducts[productId]) {
            setProducts((prevProducts) =>
              prevProducts.filter((product) => product.product_id !== productId)
            );
            notification.success({
              message: 'Success',
              description: 'Like bo‘yicha ma’lumot muvaffaqiyatli olib tashlandi',
            });
          } else {
            notification.success({
              message: 'Success',
              description: 'Like bo‘yicha ma’lumot muvaffaqiyatli saqlandi',
            });
          }
          return newLikedProducts;
        });
      }
    } catch (error) {
      console.error('Xato tafsilotlari:', error);
      notification.error({
        message: 'Saqlashda xatolik',
        description: 'Ma’lumot saqlanmadi',
      });
    }
  };

  useEffect(() => {
    fetchProducts(page, limit);
  }, [page, limit]);

  const deleteCard = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.product_id !== id)
    );
  };

  const clearAll = () => {
    setProducts([]);
  };

  const totalQuantity = products.reduce(
    (total, product) => total + product.count,
    0
  );

  const totalPrice = products.reduce(
    (total, product) => total + product.count * product.cost,
    0
  );

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 4);
  };

  return (
    <div className="bg-gray-100 px-4 pt-4 pb-4 md:px-10 md:pt-10 md:pb-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full max-w-xl lg:max-w-2xl bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center pt-4 pb-4">
              <h1 className="text-xl font-bold mb-4">Ваши like</h1>
              <button onClick={clearAll} className="text-red-500">
                Очистить все
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {products.map((product) => (
                <div
                  key={product.product_id}
                  className="flex border rounded-lg overflow-hidden p-4 bg-gray-200 relative mb-4"
                >
                  <div
                    className="absolute top-2 right-2 z-10 cursor-pointer"
                    onClick={() => handleAddToLike(product.product_id)}
                  >
                    {likedProducts[product.product_id] ? (
                      <Favorite style={{ color: 'red' }} />
                    ) : (
                      <FavoriteBorder style={{ color: 'gray' }} />
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-36 h-28 flex-shrink-0 mr-4 relative">
                      <Image
                        src={product.image_url[0]}
                        alt={product.product_name}
                        width={145}
                        height={100}
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="font-bold text-lg mb-2">
                        {product.product_name}
                      </div>
                      <div className="flex gap-2 font-bold text-lg mb-2 text-red-500">
                        <p>Цена</p>
                        {product.cost}
                        <p>UZS</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleLoadMore} className="w-full mt-4 py-2 bg-blue-500 text-white font-bold rounded-lg">
              Ko‘proq yuklash
            </button>
            <h3 className="pt-4 pb-4 max-w-[400px] text-blue-500 cursor-pointer">
              Все информация о доставке
            </h3>
            <p className="w-[225px] h-[1px] bg-blue-600 mt-[-26px] mb-7"></p>
            <p className="max-w-[330px]">
              Если у вас имеются вопросы, позвоните по номеру:{" "}
              <span className="text-blue-500">+998 (99) 995 55 65</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
