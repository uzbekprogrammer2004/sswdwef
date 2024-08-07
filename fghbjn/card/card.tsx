"use client";

import { useState, useEffect } from 'react';
import { Card, Col, Row, Spin, Button, Tag, notification } from 'antd';
import { getProduct, Product } from '@/service/product';
import { basketSave } from '@/service/korzina';
import { likeSave } from '@/service/like';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const YourComponent = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(4);
  const [likedProducts, setLikedProducts] = useState<Record<string, boolean>>({});

  const fetchProducts = async (page: number, limit: number) => {
    setLoading(true);
    try {
      const response = await getProduct(page, limit);
      
      console.log('Serverdan javob:', response);
      if (response) {
        const validProducts = response.filter(product =>
          product.image_url.every(url => {
            try {
              new URL(url);
              return true;
            } catch (e) {
              console.error(`Noto'g'ri URL: ${url}`);
              return false;
            }
          })
        );
        
        // Liked holatlarini sozlash
        const liked = validProducts.reduce((acc: Record<string, boolean>, product) => {
          acc[product.product_id] = product.liked || false; // `product.liked` mavjud bo'lmasa false qiymat qo'shish
          return acc;
        }, {});
        
        setData(validProducts as Product[]);
        setLikedProducts(liked);
      }
    } catch (error) {
      console.log('Mahsulotlarni yuklashda xatolik:', error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchProducts(1, limit);
  }, [limit]);

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 4);
  };

  const handleAddToBasket = async (productId: string) => {
    console.log('Serverga productId yuborilmoqda: ', productId);
    try {
      const response = await basketSave({ productId });
      console.log('Serverdan javob:', response);
      if (response && response.status === 200) {
        notification.success({
          message: 'SAVE',
          description: 'Ma\'lumot muvaffaqiyatli saqlandi',
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Xato tafsilotlari:', error.message);
        notification.error({
          message: 'Saqlashda xatolik',
          description: 'Ma\'lumot saqlanmadi',
        });
      } else {
        console.error('Noma\'lum xato:', error);
        notification.error({
          message: 'Saqlashda xatolik',
          description: 'Ma\'lumot saqlanmadi',
        });
      }
    }
  };

  const handleAddToLike = async (productId: string) => {
    console.log('Serverga productId yuborilmoqda: ', productId);
    try {
      const response = await likeSave({ productId });
      console.log('Serverdan javob:', response);
      if (response && response.status === 201) {
        setLikedProducts((prevLikedProducts) => ({
          ...prevLikedProducts,
          [productId]: !prevLikedProducts[productId],
        }));
        notification.success({
          message: 'Success',
          description: 'Like bo\'yicha ma\'lumot muvaffaqiyatli saqlandi',
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Xato tafsilotlari:', error.message);
        notification.error({
          message: 'Saqlashda xatolik',
          description: 'Ma\'lumot saqlanmadi',
        });
      } else {
        console.error('Noma\'lum xato:', error);
        notification.error({
          message: 'Saqlashda xatolik',
          description: 'Ma\'lumot saqlanmadi',
        });
      }
    }
  };

  return (
    <div className="p-4 mx-auto max-w-screen-xl">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <Row gutter={[16, 16]}>
            {data.map((product) => (
              <Col xs={24} sm={12} md={12} lg={8} xl={6} key={product.product_id} className='hover:scale-105'>
                <Card
                  className="relative card-responsive"
                  cover={
                    <div className="h-48 w-full object-cover">
                      {product.image_url[0] && (
                        <img alt={product.product_name} src={product.image_url[0]} className="h-48 w-full object-cover" />
                      )}
                    </div>
                  }
                  actions={[
                    <Button
                      type="primary"
                      className="bg-yellow-500 text-black font-bold border-none"
                      onClick={() => handleAddToBasket(product.product_id)}
                    >
                      Savatga qo'shish
                    </Button>,
                  ]}
                >
                  <Tag color="red" className="absolute top-2 left-2 z-10">Aksiya</Tag>
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
                  <Card.Meta
                    title={<span className="font-bold text-lg">{product.product_name}</span>}
                    description={
                      <>
                        <div className="text-red-500 font-bold text-lg">Aksiyadagi narxi: {product.discount} UZS</div>
                        <div className="line-through text-gray-500 text-sm">Avvalgi narxi: {product.cost} UZS</div>
                      </>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
          <div className="mt-4 flex justify-center">
            <Button type="primary" onClick={handleLoadMore}>
              Ko'proq yuklash
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default YourComponent;

