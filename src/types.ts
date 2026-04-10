export interface Pizza {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}

export interface CartItemType {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  customer: string;
  phone: string;
  address: string;
  status: string;
  priority: boolean;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: string;
  cart: CartItemType[];
}

export interface NewOrder {
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  cart: CartItemType[];
}

export interface GeocodingResult {
  latitude: number;
  longitude: number;
}

export interface AddressResult {
  locality?: string;
  city?: string;
  postcode?: string;
  countryName?: string;
}
