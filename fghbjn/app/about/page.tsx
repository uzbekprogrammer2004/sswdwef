// import { PrinterOutlined, ShareAltOutlined } from '@ant-design/icons'
// import Image from 'next/image'
// import React from 'react'
// import Img from '@/public/img.png'
// import Img2 from '@/public/img2.png'
// import Img3 from '@/public/img3.png'
// import Img4 from '@/public/img4.png'
// const Index = () => 
//   const data = [
//     {
//       name: "Бутса Nike Mercurial Superfly 8 FG",
//       price: "500 000 So'm",
//       old_price: "750 000 So'm",
//       img: Img
//     },
//     {
//       name: "Бутса Nike Mercurial Superfly 8 FG",
//       price: "500 000 So'm",
//       old_price: "750 000 So'm",
//       img: Img2
//     },
//     {
//       name: "Бутса Nike Mercurial Superfly 8 FG",
//       price: "500 000 So'm",
//       old_price: "750 000 So'm",
//       img: Img3
//     },
//     {
//       name: "Бутса Nike Mercurial Superfly 8 FG",
//       price: "500 000 So'm",
//       old_price: "750 000 So'm",
//       img: Img4
//     },
//   ]
//   return (
//     <div className='w-[100%] mx-[20px] lg:px-[138px] bg-[#f2f2f2]' >
//       <div className='flex gap-[24px] ' >
//         <div className='h-[186px] w-[20%] bg-white '  >
//           <h3 className='h-[19px] pl-[30px] pt-[10px] pb-[10px] flex ' >О нас</h3>
//           <p className='w-[73px] h-[19px] pt-[10px] pb-[6px] pl-[34px] pr-[37px] ' >Вканация</p>
//         </div>
//         <div className='h-[667px] w-[80%] bg-white pl-[50px] pt-[40px] pr-[66px] '>
//           <h2 className='w-[182px] h-[29px] text-black size-[32px] font-[900] '>7 SPORT MARKET</h2>
//           <p className='text-[16px] pt-[17px] pb-[29px] ' >В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.</p>
//           <p className='text-[16px]' >Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.</p>
//           <p className='text-[16px] pt-[35px] pb-[29px]' >В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.</p>
//           <p className='text-[16px]' >Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.</p>
//           <div className='flex gap-8 justify-end pt-[62px]'>
//           <div className='flex gap-[5px] ' >
//           <p className='text-[12px]' >Поделиться</p>
//           <i><ShareAltOutlined /></i>
//           </div>
//           <div className='flex gap-[5px]'>
//           <p className='text-[12px]' >Распечатать:</p>
//           <i><PrinterOutlined /></i>
//           </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div>
//         <h2>Акция</h2>
//         </div>
//         <div>
//           <Image src={} alt="maxsulot rasmi bor"/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Index



import { PrinterOutlined, ShareAltOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';
import Image from 'next/image';
import Img from '@/public/img.png';
import Img2 from '@/public/img2.png';
import Img3 from '@/public/img3.png';
import Img4 from '@/public/img4.png';

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
  ];

  return (
    <div className='w-full px-5 lg:px-[138px] bg-gray-200'>
      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='h-[256px] rounded-lg w-full lg:w-1/5 bg-white p-4'>
          <h3 className='text-xl font-bold mb-2'>О нас</h3>
          <p className='mb-2'>Вакансия</p>
        </div>
        <div className='w-full lg:w-4/5 rounded-lg bg-white p-6'>
          <h2 className='text-2xl font-extrabold mb-4'>7 SPORT MARKET</h2>
          <p className='text-base pt-[17px] pb-[29px]'>
            В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.
          </p>
          <p className='text-base'>
            Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.
          </p>
          <p className='text-base pt-[35px] pb-[29px]'>
            В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.
          </p>
          <p className='text-base'>
            Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.
          </p>
          <div className='flex justify-end gap-8 pt-16'>
            <div className='flex items-center gap-3'>
              <p className='text-sm'>Поделиться</p>
              <ShareAltOutlined className='mb-[15px]' />
            </div>
            <div className='flex items-center gap-3'>
              <p className='text-sm'>Распечатать:</p>
              <PrinterOutlined className='mb-[15px]' />
            </div>
          </div>
        </div>
      </div>
      <div className='mb-32' >
        <h2 className='text-2xl font-bold mt-8 mb-4'>Акция</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
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
              <button className='w-full bg-yellow-500 text-black py-2 mt-4 transition-colors duration-300 hover:bg-red-700'>
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
