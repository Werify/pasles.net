interface PricingCard {
  type: IType;
  price: number;
  currency: string;
  subtitle: string;
  features: IFeatures[];
  btn: string;
}

interface IType {
  icone: string;
  text: string;
}

interface IFeatures {
  icon: string;
  text: string;
}
