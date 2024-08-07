
"use client";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { SelectChangeEvent } from "@mui/material/Select";
import { StaticImageData } from "next/image";
const CustomSlider = styled(Slider)({
  color: "#FFD700",
  "& .MuiSlider-thumb": {
    borderRadius: "50%",
    backgroundColor: "#FBD029",
    border: "5px solid #1F1D14",
  },
  "& .MuiSlider-track": {
    backgroundColor: "#FFD700",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#BDBDBD",
  },
  "& .MuiSlider-thumb::before": {
    display: "none",
  },
});

interface Product {
  name: string;
  oldPrice: string;
  newPrice: string;
  image: StaticImageData;
}

const products: Product[] = [
  // Your products data
];

const ProductFilter: React.FC = () => {
  const [priceRange, setPriceRange] = useState<number[]>([3000, 4000]);
  const [sku, setSku] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>("All");
  const [isNewProduct, setIsNewProduct] = useState<string>("All");
  const [isOnSale, setIsOnSale] = useState<string>("All");

  const handlePriceRangeChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setPriceRange(newValue as number[]);
  };

  const handleProductCategoryChange = (event: SelectChangeEvent<string>) => {
    setProductCategory(event.target.value as string);
  };

  const handleIsNewProductChange = (event: SelectChangeEvent<string>) => {
    setIsNewProduct(event.target.value as string);
  };

  const handleIsOnSaleChange = (event: SelectChangeEvent<string>) => {
    setIsOnSale(event.target.value as string);
  };

  return (
    <div className=" flex flex-col h-[552px] bg-white " >
      <div className="flex gap-4 mr-[-40px] ">
        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs h-[552px] transform transition-transform">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Филтрь</h2>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Цена
            </label>
            <CustomSlider
              value={priceRange}
              onChange={handlePriceRangeChange}
              valueLabelDisplay="auto"
              min={100}
              max={4000}
              step={100}
            />
            <div className="flex justify-between text-sm mt-2">
              <span>{priceRange[0]} uzs</span>
              <span>{priceRange[1]} uzs</span>
            </div>
          </div>
          <div className="mb-4">
            <p>Артикул:</p>
            <TextField
              label="аф566"
              variant="outlined"
              fullWidth
              value={sku}
              onChange={(e) => setSku(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Выберите категорию:</InputLabel>
              <Select
                value={productCategory}
                onChange={handleProductCategoryChange}
                label="Select Category"
              >
                <MenuItem value="All">Все</MenuItem>
                <MenuItem value="Select Category">Category 1</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="mb-4">
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Новинка:</InputLabel>
              <Select
                value={isNewProduct}
                onChange={handleIsNewProductChange}
                label="Новинка:"
              >
                <MenuItem value="All">Новинка</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="mb-4">
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Акция:</InputLabel>
              <Select
                value={isOnSale}
                onChange={handleIsOnSaleChange}
                label="Акция"
              >
                <MenuItem value="All">Акция</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-10 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg w-[292px] bg-white relative cursor-pointer transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative pt-[25px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={242}
                  height={194}
                  className="w-full object-cover"
                />
                <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md transition-colors hover:bg-gray-200">
                  <FaHeart className="text-red-500" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 w-[216px]">
                  {item.name}
                </h3>
                <div className="text-red-500 font-bold text-xl">
                  {item.newPrice} uzs
                </div>
                <div className="text-gray-500 line-through mb-1">
                  {item.oldPrice} uzs
                </div>
                <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg flex items-center justify-center transition-colors hover:bg-yellow-600 hover:shadow-lg">
                  <FaShoppingCart className="mr-2" /> Корзина
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className=" ml-4  mt-[-50px] w-[287px] md:w-[287px] sm:max-w-[287px] py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-700 z-10 ">
        Показать ещё
      </button>
    </div>
  );
};

export default ProductFilter;
