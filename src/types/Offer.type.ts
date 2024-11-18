export type OfferData = {
  id: string;
  category: string;
  productName: string;
  mileageOrMth: number;
  price: number;
  details: string[];
  productImg: ProductImg;
};

type ProductImg = {
  filename: string;
  url: string;
};
