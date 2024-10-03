export interface Address {
  id: number | null;
  name: string;
  address: string;
  city: string;
  pincode: string;
  phone: string;
  country: string;
  isDefault: boolean;
}

export interface FormData {
  name: string;
  phone: string;
  pincode: string;
  address: string;
  city: string;
  country: string;
}

