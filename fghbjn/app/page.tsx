import React from 'react';
import { CalendarOutlined, EyeOutlined, FileTextOutlined, PercentageOutlined, TruckOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { Carousel } from 'antd';
import PumaLogo from '@/public/pumalogo.webp';
import UnderArmourLogo from '@/public/underlogo.jpg';
import NikeLogo from '@/public/nikelogo.jpg';
import AdidasLogo from '@/public/adidaslogo.png';
import ReebokLogo from '@/public/reeboklogo.png';
import Img from '@/public/png.png';
import CaruselImg from '@/public/13.jpg';
import ProductCard from '@/card/card'
const Index = () => {
  return (
    <main className="bg-[#f2f2f2] pt-7 pb-9 overflow-x-hidden">
      <div className='px-4 lg:px-[138px] pt-[13px] pb-[53px] w-full bg-[#F2F2F2]'>
        <Carousel autoplay autoplaySpeed={1000} speed={500} infinite>
          <div className="w-full">
            <Image src={CaruselImg} alt="Image 1" layout="responsive" style={{ objectFit: 'cover' }} />
          </div>
          <div className="w-full">
            <Image src={CaruselImg} alt="Image 2" layout="responsive" style={{ objectFit: 'cover' }} />
          </div>
          <div className="w-full">
            <Image src={CaruselImg} alt="Image 3" layout="responsive" style={{ objectFit: 'cover' }} />
          </div>
          <div className="w-full">
            <Image src={CaruselImg} alt="Image 4" layout="responsive" style={{ objectFit: 'cover' }} />
          </div>
        </Carousel>
      </div>
      <div className='lg:px-[138px] md:flex-row flex md:flex-wrap-reverse pt-[13px] pb-[53px] w-full' >
      <ProductCard/>
      </div>
      <div className="mx-[20px] lg:mx-[138px] overflow-x-hidden">
        <h2 className="text-[#1e1c14] text-[24px] lg:text-[32px] pt-11 pb-7 font-medium font-[Fira Sans]">
          Полезное
        </h2>
        <div className="flex flex-col lg:flex-row gap-[24px]">
          <div className="flex flex-col justify-between w-full rounded-lg h-auto lg:h-[417px] bg-white text-black pt-[38px] pl-[35px] pb-[45px]">
            <div>
              <h2 className="text-[#1e1c14] text-[24px] lg:text-[32px] font-bold font-[Fira Sans] w-full lg:w-[462px]">
                Как правильно выбрать эллиптический тренажер?
              </h2>
              <p className="text-black text-base font-normal mt-2 font-[Roboto] w-full lg:w-[484px] h-auto lg:h-[110px] leading-snug">
                Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...
              </p>
            </div>
            <div className="flex gap-[39px]">
              <article className="flex gap-[5px]">
                <CalendarOutlined />
                <span>27.01.2022</span>
              </article>
              <article className="flex gap-[4px]">
                <EyeOutlined />
                <span>250</span>
              </article>
            </div>
          </div>
          <div className="w-full h-auto lg:h-[420px] flex flex-col gap-[15px]">
            <div className="bg-white w-full h-[349px] pt-[18px] rounded-lg flex justify-center items-center">
              <Image src={Img} alt="sport anjomi rasmi" width={318} height={315} />
            </div>
            <div className="w-full h-[52px] bg-white rounded-[5px] flex justify-center items-center">
              <div className="text-black text-base font-normal font-[Fira Sans] leading-snug">Посмотреть все</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[20px] lg:mx-[138px] overflow-x-hidden">
        <div className="text-[#1e1c14] text-[24px] lg:text-[32px] font-medium mt-[80px] mb-[30px] font-['Fira Sans']">Примущества</div>
        <div className="flex flex-col lg:flex-row gap-[15px]">
          <div className="w-full lg:w-[287px] h-auto lg:h-[289px] bg-white rounded-lg flex flex-col items-center pt-[72px] pb-[30px]">
            <div className="w-[26px] h-[26px] bg-[#fbd029] rounded-[5px] mb-[-20px] ml-[10px]"></div>
            <div className="text-black">
              <TruckOutlined className="text-[50px] pl-[150px] transform -scale-x-100 mr-[-100px]" />
            </div>
            <div className="text-black text-xl font-normal font-['Fira Sans'] pl-10 mt-[30px] text-start">
              Доставка по всему Узбекистану
            </div>
          </div>
          <div className="w-full lg:w-[287px] h-auto lg:h-[289px] bg-white rounded-lg flex flex-col items-center pt-[72px] pb-[30px]">
            <div className="w-[26px] h-[26px] bg-[#fbd029] rounded-[5px] mb-[-20px] ml-[10px]"></div>
            <div className="text-black">
              <TruckOutlined className="text-[50px] pl-[150px] transform -scale-x-100 mr-[-100px]" />
            </div>
            <div className="text-black text-xl font-normal font-['Fira Sans'] pl-10 mt-[30px] text-start">
              Доставка по всему Узбекистану
            </div>
          </div>
          <div className="w-full lg:w-[287px] h-auto lg:h-[289px] bg-white rounded-lg flex flex-col items-center pt-[72px] pb-[30px]">
            <div className="w-[26px] h-[26px] bg-[#fbd029] rounded-[5px] mb-[-15px] ml-[-50px]"></div>
            <div className="text-black">
              <PercentageOutlined className="text-[40px] pl-[130px] ml-[-110px] mr-[100px]" />
            </div>
            <div className="text-black text-xl font-normal font-['Fira Sans'] pl-10 mr-[80px] mt-[30px] text-start">
              Скидки и акции
            </div>
          </div>
          <div className="w-full lg:w-[287px] h-auto lg:h-[289px] bg-white rounded-lg flex flex-col items-center pt-[62px] pb-[30px]">
            <div className="w-[26px] h-[26px] bg-[#fbd029] rounded-[5px] mb-[-15px] ml-[-50px]"></div>
            <div className="text-black">
              <FileTextOutlined className="text-[40px] pl-[130px] ml-[-110px] mr-[100px]" />
            </div>
            <div className="text-black text-xl font-normal font-['Fira Sans'] mt-[30px] pl-10 text-start">
              Широкий ассортимент товаров
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[5%] md:mx-[138px] overflow-x-hidden">
        <h2 className="text-[24px] md:text-[32px] font-medium text-black mt-[40px] md:mt-[80px] mb-[20px] md:mb-[30px]">
          О нас
        </h2>
        <div className="w-full h-auto rounded-md pt-[20px] md:pt-[70px] pl-[10px] md:pl-[80px] pb-[80px] pr-[100px] bg-black">
          <div className="space-y-4">
            <span className="text-white text-base md:text-xl font-normal font-['SF Pro Display'] leading-6 md:leading-7 block">
              Интернет магазин спортивных товаров
            </span>
            <span className="text-white text-base md:text-xl font-medium font-['SF Pro Display'] underline leading-6 md:leading-7 block">
              7MARKETSPORT.UZ
            </span>
            <span className="text-white text-base md:text-xl font-normal font-['SF Pro Display'] leading-6 md:leading-7 block">
              предлагает широкий ассортимент продукции с доставкой по Ташкенту, области и другим регионам Узбекистана. Ведется работа как с розничными покупателями, так и с оптовыми клиентами. Разнообразие форм оплаты заметно упрощает процесс приобретения товара. Действует гибкая система скидок.
            </span>
          </div>
        </div>
      </div>
      <div className="mx-[20px] lg:mx-[138px] mt-[40px] lg:mt-[80px] overflow-x-hidden">
        <Carousel autoplay autoplaySpeed={3000} className='w-full h-[200px]'>
          <div className="flex justify-center items-center h-full bg-white rounded-lg p-4">
            <Image src={PumaLogo} alt="Puma Logo" width={150} height={100} />
          </div>
          <div className="flex justify-center items-center h-full bg-white rounded-lg p-4">
            <Image src={UnderArmourLogo} alt="Under Armour Logo" width={150} height={100} />
          </div>
          <div className="flex justify-center items-center h-full bg-white rounded-lg p-4">
            <Image src={NikeLogo} alt="Nike Logo" width={150} height={100} />
          </div>
          <div className="flex justify-center items-center h-full bg-white rounded-lg p-4">
            <Image src={AdidasLogo} alt="Adidas Logo" width={150} height={100} />
          </div>
          <div className="flex justify-center items-center h-full bg-white rounded-lg p-4">
            <Image src={ReebokLogo} alt="Reebok Logo" width={150} height={100} />
          </div>
          {/* Add more logos as needed */}
          <div className="flex justify-center items-center h-full bg-white rounded-lg p-4">
            <Image src={PumaLogo} alt="Puma Logo" width={150} height={100} />
          </div>
          <div className="flex justify-center items-center h-full bg-white rounded-lg p-4">
            <Image src={UnderArmourLogo} alt="Under Armour Logo" width={150} height={100} />
          </div>
          <div className="flex justify-center items-center h-full bg-white rounded-lg p-4">
            <Image src={NikeLogo} alt="Nike Logo" width={150} height={100} />
          </div>
          <div className="flex justify-center items-center h-full bg-white rounded-lg p-4">
            <Image src={AdidasLogo} alt="Adidas Logo" width={150} height={100} />
          </div>
          <div className="flex justify-center items-center h-full bg-white rounded-lg p-4">
            <Image src={ReebokLogo} alt="Reebok Logo" width={150} height={100} />
          </div>
        </Carousel>
      </div>
    </main>
  );
};

export default Index;