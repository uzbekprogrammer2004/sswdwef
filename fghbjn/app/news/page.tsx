import { CalendarOutlined, EyeOutlined } from '@ant-design/icons';
import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Img from '@/public/img.png';
import Img2 from '@/public/img2.png';
import Img3 from '@/public/img3.png';
import Img4 from '@/public/img4.png';
const Index: React.FC = () => {
  const data = [
    { name: "Как правильно выбрать эллиптический тренажер?", title: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...", time: "27.01.2022", eye: "250" },
    { name: "Преимущества силовых тренировок", title: "Силовые тренировки помогают поддерживать здоровье костей и мышц, улучшать метаболизм и общий тонус тела...", time: "28.01.2022", eye: "300" },
    { name: "Советы по питанию для спортсменов", title: "Правильное питание играет важную роль в достижении спортивных целей и поддержании хорошего здоровья...", time: "29.01.2022", eye: "350" },
    { name: "Важность кардиотренировок", title: "Кардиотренировки помогают укрепить сердце и сосуды, улучшить выносливость и общее самочувствие...", time: "30.01.2022", eye: "400" },
    { name: "Как выбрать подходящий фитнес-клуб", title: "Выбор фитнес-клуба должен основываться на его расположении, наличии нужного оборудования и квалификации тренеров...", time: "31.01.2022", eye: "450" },
    { name: "Основы йоги для начинающих", title: "Йога помогает улучшить гибкость, снять стресс и укрепить мышечный корсет...", time: "01.02.2022", eye: "500" },
    { name: "Роль воды в тренировках", title: "Вода необходима для поддержания гидратации, регулирования температуры тела и улучшения производительности во время тренировок...", time: "02.02.2022", eye: "550" },
    { name: "Как избежать травм при тренировках", title: "Избегать травм можно, следуя правильной технике выполнения упражнений и не забывая про разминку...", time: "03.02.2022", eye: "600" },
    { name: "Польза плавания для здоровья", title: "Плавание улучшает работу сердечно-сосудистой системы, развивает мышечную силу и гибкость...", time: "04.02.2022", eye: "650" },
    { name: "Как начать бегать: советы для новичков", title: "Бег помогает улучшить общее здоровье, выносливость и настроение. Важно начать с небольших дистанций и постепенно увеличивать нагрузку...", time: "05.02.2022", eye: "700" }
  ];

  const chunkData = (array: typeof data, chunkSize: number) => {
    return array.reduce((result: typeof data[], item, index) => {
      const chunkIndex = Math.floor(index / chunkSize);
      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }
      result[chunkIndex].push(item);
      return result;
    }, []);
  };
  const data2 = [
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
  const rows = chunkData(data, 2);

  return (
    <main className="w-full lg:px-[138px] bg-[#f2f2f2] ">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-col lg:flex-row gap-[24px] mb-8">
          {row.map((item, itemIndex) => (
            <div key={itemIndex} className="flex flex-col justify-between w-full lg:w-[50%] rounded-lg h-auto lg:h-[417px] bg-white text-black pt-[38px] pl-[35px] pb-[45px]">
              <div>
                <h2 className="text-[#1e1c14] text-[24px] lg:text-[32px] font-[700] font-[Fira Sans] w-full">
                  {item.name}
                </h2>
                <p className="text-black text-base font-normal mt-2 font-[Roboto] w-full lg:h-[110px] leading-snug">
                  {item.title}
                </p>
              </div>
              <div className="flex gap-[39px]">
                <article className="flex gap-[5px]">
                  <CalendarOutlined />
                  <span>{item.time}</span>
                </article>
                <article className="flex gap-[4px]">
                  <EyeOutlined />
                  <span>{item.eye}</span>
                </article>
              </div>
            </div>
          ))}
        </div>
      ))}
            <div className='mb-32' >
        <h2 className='text-2xl font-bold mt-8 mb-4'>Акция</h2>
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
              <button className='w-full bg-yellow-500 text-black py-2 mt-4 transition-colors duration-300 hover:bg-red-700'>
              <ShoppingCartOutlined className='text-black mr-3 ' />
                Корзина
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Index;
