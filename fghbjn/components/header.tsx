"use client";
import React, { useState, useEffect } from "react";
import "antd/dist/reset.css";
import Image from "next/image";
import Link from "next/link";
import {
  HddOutlined,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Modal, Form, Input, Button, notification } from "antd";
import Logo from "@/public/logo.png";
import { Login } from "@/service/auth";
import { useRouter } from "next/navigation";
import { getProduct } from "@/service/product";

interface Product {
  product_id: string;
  product_name: string;
  image_url: string[];
  basket: string;
  cost: string;
  discount: string;
  liked?: boolean; // Yangi xususiyat qo'shish
}

const links = [
  { path: "/products", title: "Продукты" },
  { path: "/contacts", title: "Контакты" },
  { path: "/payment-delivery", title: "Оплата и Доставка" },
  { path: "/news", title: "Новости" },
  { path: "/about", title: "О нас" },
];

const Index: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [products, setProducts] = useState<Product[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Provide page and limit arguments
        const page = 1;
        const limit = 10;
        const products = await getProduct(page, limit);
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  const onFinish = async (values: any) => {
    console.log("Received values from form: ", values);
    try {
      const response = await Login(values);
      console.log("Response from server:", response);
      if (response && response.status === 200) {
        notification.success({
          message: "Login Successful",
          description: "Muvaqiyatli ro'yxatdan o'tdingiz.",
        });
        handleOk(); // Modalni yopish
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error details:", error.message);
        notification.error({
          message: "Login Failed",
          description: "Ro'yxatdan o'tishda muammo bor.",
        });
      } else {
        console.error("Unexpected error:", error);
        notification.error({
          message: "Login Failed",
          description: "Ro'yxatdan o'tishda noma'lum muammo yuz berdi.",
        });
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    notification.error({
      message: "Login Failed",
      description: "Please check your login details and try again.",
    });
    console.log("Failed:", errorInfo);
  };

  const handleButtonKorzinaClick = () => {
    router.push("/korzina");
  };
  const handleButtonLikeClick = () => {
    router.push("/like");
  };

  // products null emasligini tekshirish
  const totalQuantity = products ? products.reduce(
    (total, product) => total + (parseInt(product.basket) || 0),
    0
  ) : 0;

  return (
    <header>
      <div className="bg-[#1F1D14] xl:px-[138px] text-white flex flex-col lg:flex-row items-center justify-between px-[38px] py-4">
        <div className="flex items-center mb-4 lg:mb-0">
          <div className="flex items-center text-xl lg:text-2xl font-semibold font-[Fira Sans]">
            <Image src={Logo} alt="Sayt logosi" width={62} height={54} />
            <h2 className="ml-2 w-[116px]">Sport Market</h2>
          </div>
          <nav className="hidden lg:flex ml-6 space-x-6">
            {links.map((item, index) => (
              <Link href={item.path} key={index} legacyBehavior>
                <a className="text-white text-base font-normal">{item.title}</a>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm lg:text-base">
            <PhoneOutlined />
            <span className="ml-2">+998 (90) 565-85-85</span>
          </div>
          <div className="flex items-center text-sm lg:text-base">
            <MailOutlined />
            <span className="ml-2">info@gmail.com</span>
          </div>
          <button className="lg:hidden p-2" onClick={toggleMenu}>
            <MenuOutlined className="text-white" />
          </button>
        </div>
      </div>

      {/* Search and Icons */}
      <div className="bg-white flex flex-col lg:flex-row items-center justify-between px-[138px] py-4 border-b border-gray-200">
        <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
          <button className="py-2 mr-2 px-4 bg-black text-white flex items-center rounded lg:w-auto mb-2 lg:mb-0">
            <HddOutlined className="mr-2" /> Каталог
          </button>
          <form className="flex-1">
            <input
              className="bg-[#F2F2F2] text-black w-full py-2 px-4 border rounded"
              type="search"
              placeholder="Поиск"
            />
          </form>
        </div>
        <div className="flex space-x-3 mt-2 lg:mt-0">
          <button
            className="p-2 bg-[#F2F2F2] text-black rounded"
            onClick={showModal}
          >
            <UserOutlined />
          </button>
          <button 
          onClick={handleButtonLikeClick}
          className="p-2 bg-[#F2F2F2] text-black flex items-center rounded">
            <HeartOutlined />
          </button>
          <button
            onClick={handleButtonKorzinaClick}
            className="p-2 bg-[#F2F2F2] text-black flex items-center rounded"
          >
            <ShoppingCartOutlined className="mr-1" /> Корзина
          </button>
        </div>
      </div>

      {/* Hamburger Menu Content */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col items-center pt-8 px-4 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } custom-lg:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={toggleMenu}
        >
          <CloseOutlined />
        </button>
        <div className="flex flex-col items-center space-y-4">
          <nav className="flex flex-col items-center space-y-4">
            {links.map((item, index) => (
              <Link href={item.path} key={index} legacyBehavior>
                <a className="text-black text-xl font-normal">{item.title}</a>
              </Link>
            ))}
          </nav>
          <div className="flex flex-col items-center text-base text-black ">
            <div className="flex items-center mb-2">
              <PhoneOutlined className="text-black" />
              <span className="ml-2 text-black ">+998 (90) 565-85-85</span>
            </div>
            <div className="flex items-center">
              <MailOutlined className="text-black" />
              <span className="ml-2 text-black ">info@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <Modal
        title="Login"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="login"
          initialValues={{
            email: "xasannosirov094@gmail.com",
            password: "Sehtols@01",
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </header>
  );
};

export default Index;


// "use client";
// import React, { useState, useEffect } from "react";
// import "antd/dist/reset.css";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   HddOutlined,
//   HeartOutlined,
//   MailOutlined,
//   PhoneOutlined,
//   ShoppingCartOutlined,
//   UserOutlined,
//   MenuOutlined,
//   CloseOutlined,
// } from "@ant-design/icons";
// import { Modal, Form, Input, Button, notification } from "antd";
// import Logo from "@/public/logo.png";
// import { Login } from "@/service/auth";
// import { basketSave } from "@/service/korzina";
// import { useRouter } from "next/navigation";
// import { getProduct } from "@/service/product";

// interface Product {
//   product_id: number;
//   product_name: string;
//   cost: number;
//   image_url: string;
//   count: number;
// }

// const links = [
//   { path: "/products", title: "Продукты" },
//   { path: "/contacts", title: "Контакты" },
//   { path: "/payment-delivery", title: "Оплата и Доставка" },
//   { path: "/news", title: "Новости" },
//   { path: "/about", title: "О нас" },
// ];

// const Index: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [products, setProducts] = useState<Product[] | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await getProduct();
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const showModal = () => setIsModalVisible(true);
//   const handleOk = () => setIsModalVisible(false);
//   const handleCancel = () => setIsModalVisible(false);

//   const onFinish = async (values: any) => {
//     console.log("Received values from form: ", values);
//     try {
//       const response = await Login(values);
//       console.log("Response from server:", response);
//       if (response && response.status === 200) {
//         notification.success({
//           message: "Login Successful",
//           description: "Muvaqiyatli ro'yxatdan o'tdingiz.",
//         });
//         handleOk(); // Modalni yopish
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error("Error details:", error.message);
//         notification.error({
//           message: "Login Failed",
//           description: "Ro'yxatdan o'tishda muammo bor.",
//         });
//       } else {
//         console.error("Unexpected error:", error);
//         notification.error({
//           message: "Login Failed",
//           description: "Ro'yxatdan o'tishda noma'lum muammo yuz berdi.",
//         });
//       }
//     }
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     notification.error({
//       message: "Login Failed",
//       description: "Please check your login details and try again.",
//     });
//     console.log("Failed:", errorInfo);
//   };

//   const handleButtonKorzinaClick = () => {
//     router.push("/korzina");
//   };
//   const handleButtonLikeClick = () => {
//     router.push("/like");
//   };

//   // products null emasligini tekshirish
//   const totalQuantity = products ? products.reduce(
//     (total, product) => total + product.count,
//     0
//   ) : 0;

//   return (
//     <header>
//       <div className="bg-[#1F1D14] xl:px-[138px] text-white flex flex-col lg:flex-row items-center justify-between px-[38px] py-4">
//         <div className="flex items-center mb-4 lg:mb-0">
//           <div className="flex items-center text-xl lg:text-2xl font-semibold font-[Fira Sans]">
//             <Image src={Logo} alt="Sayt logosi" width={62} height={54} />
//             <h2 className="ml-2 w-[116px]">Sport Market</h2>
//           </div>
//           <nav className="hidden lg:flex ml-6 space-x-6">
//             {links.map((item, index) => (
//               <Link href={item.path} key={index} legacyBehavior>
//                 <a className="text-white text-base font-normal">{item.title}</a>
//               </Link>
//             ))}
//           </nav>
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center text-sm lg:text-base">
//             <PhoneOutlined />
//             <span className="ml-2">+998 (90) 565-85-85</span>
//           </div>
//           <div className="flex items-center text-sm lg:text-base">
//             <MailOutlined />
//             <span className="ml-2">info@gmail.com</span>
//           </div>
//           <button className="lg:hidden p-2" onClick={toggleMenu}>
//             <MenuOutlined className="text-white" />
//           </button>
//         </div>
//       </div>

//       {/* Search and Icons */}
//       <div className="bg-white flex flex-col lg:flex-row items-center justify-between px-[138px] py-4 border-b border-gray-200">
//         <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
//           <button className="py-2 mr-2 px-4 bg-black text-white flex items-center rounded lg:w-auto mb-2 lg:mb-0">
//             <HddOutlined className="mr-2" /> Каталог
//           </button>
//           <form className="flex-1">
//             <input
//               className="bg-[#F2F2F2] text-black w-full py-2 px-4 border rounded"
//               type="search"
//               placeholder="Поиск"
//             />
//           </form>
//         </div>
//         <div className="flex space-x-3 mt-2 lg:mt-0">
//           <button
//             className="p-2 bg-[#F2F2F2] text-black rounded"
//             onClick={showModal}
//           >
//             <UserOutlined />
//           </button>
//           <button 
//           onClick={handleButtonLikeClick}
//           className="p-2 bg-[#F2F2F2] text-black flex items-center rounded">
//             <HeartOutlined />
//           </button>
//           <button
//             onClick={handleButtonKorzinaClick}
//             className="p-2 bg-[#F2F2F2] text-black flex items-center rounded"
//           >
//             <ShoppingCartOutlined className="mr-1" /> Корзина
//           </button>
//         </div>
//       </div>

//       {/* Hamburger Menu Content */}
//       <div
//         className={`fixed inset-0 bg-white z-50 flex flex-col items-center pt-8 px-4 transition-transform transform ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         } custom-lg:hidden`}
//       >
//         <button
//           className="absolute top-4 right-4 text-2xl"
//           onClick={toggleMenu}
//         >
//           <CloseOutlined />
//         </button>
//         <div className="flex flex-col items-center space-y-4">
//           <nav className="flex flex-col items-center space-y-4">
//             {links.map((item, index) => (
//               <Link href={item.path} key={index} legacyBehavior>
//                 <a className="text-black text-xl font-normal">{item.title}</a>
//               </Link>
//             ))}
//           </nav>
//           <div className="flex flex-col items-center text-base text-black ">
//             <div className="flex items-center mb-2">
//               <PhoneOutlined className="text-black" />
//               <span className="ml-2 text-black ">+998 (90) 565-85-85</span>
//             </div>
//             <div className="flex items-center">
//               <MailOutlined className="text-black" />
//               <span className="ml-2 text-black ">info@gmail.com</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Login Modal */}
//       <Modal
//         title="Login"
//         open={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         <Form
//           name="login"
//           initialValues={{
//             email: "xasannosirov094@gmail.com",
//             password: "Sehtols@01",
//             remember: true,
//           }}
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//         >
//           <Form.Item
//             name="email"
//             rules={[{ required: true, message: "Please input your email!" }]}
//           >
//             <Input placeholder="Email" />
//           </Form.Item>

//           <Form.Item
//             name="password"
//             rules={[{ required: true, message: "Please input your password!" }]}
//           >
//             <Input.Password placeholder="Password" />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
//               Login
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>

//       {/* Products List */}
//       <div>
//         <div className="products">
//           {products && products.map((product) => (
//             <div key={product.product_id} className="product">
//               <Image
//                 src={Array.isArray(product.image_url) ? product.image_url[0] : product.image_url}
//                 alt={product.product_name}
//                 width={100}
//                 height={100}
//               />
//               <h2>{product.product_name}</h2>
//               <p>Cost: {product.cost}</p>
//               <p>Count: {product.count}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Index;

