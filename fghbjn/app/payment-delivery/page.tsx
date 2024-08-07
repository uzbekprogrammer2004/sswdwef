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
        <div className='w-full lg:w-1/5 bg-white p-4 rounded-lg'>
          <h3 className='text-lg font-bold mb-2'>Оплата и Доставка</h3>
        </div>
        <div className='w-full lg:w-4/5 bg-white p-6 rounded-lg'>
          <h2 className='text-2xl font-extrabold mb-4'>Способы оплаты</h2>
          <p className='text-base pt-4'>
            Для того, чтобы оплатить товар, Вам нужно перейти в «Корзину» и выбрать тот товар, который Вы хотите купить.
          </p>
          <p className='text-base pt-4'>
            После перехода в Корзину, откроется список товаров, которые Вы добавили. Далее, нажимаем кнопку «Оформить заказ». В окне, появится «Контактная информация» и «Способы доставки», которые Вам не обходимо заполнить.
          </p>
          <p className='text-base pt-4'>
            Вы можете выбрать более подходящий для Вас способ оплаты: <br />
            - Оплата на месте; <br />
            - Оплата по терминалу; <br />
            - Оплата через платёжные системы, такие как CLICK, Payme. <br />
          </p>
          <p className='text-base pt-4'>
            Оплатить покупки можно наличными при получении. Убедительная просьба вначале ознакомиться с товаром, убедиться в отсутствии дефектов в присутствии курьера, после чего оплачивать сумму.
          </p>
          <div className='bg-white rounded-lg mt-4'>
            <h3 className='text-2xl font-bold mb-2'>Доставка</h3>
            <p className='text-base pt-4'>
              Тарифы на доставку товаров по Ташкенту:
            </p>
            <p className='text-base pt-4'>
              - 20.000 сум для товаров до 150.000 сум <br />
              - Бесплатная доставка для всех товаров от 150.000 сум
            </p>
            <p className='text-base pt-4'>
              Тарифы на доставку товаров по всех регионов: <br />
              - Платная доставка для всех товаров по согласованной цене <br />
              - Бесплатная установка для всех тренажеров
            </p>
          </div>
        </div>
      </div>
      <div className='mb-32'>
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
                <ShoppingCartOutlined className='text-black mr-3' />
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
