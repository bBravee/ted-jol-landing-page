export type OfferData = {
  id: string;
  category: string;
  productName: string;
  slug: string;
  mileage: number;
  yearOfProduction: number;
  price: number;
  details: string[];
  images: { url: string }[];
  description: {
    html: string;
  };
};

type ProductImg = {
  filename: string;
  url: string;
};
