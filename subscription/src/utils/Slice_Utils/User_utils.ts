export interface RegisterFormData {
  fname: string;
  lname: string;
  email: string;
  pwd: string;
  cpwd: string;
  check: string;
  phone:string;
}
interface AddressData {
  name: string;
  phone: string;
  pincode: string;
  address: string;
  city: string;
  country: string;
  id:number|null;
}

export function signupBody(formData:RegisterFormData){
  let body = {
    full_name: formData.fname + " " + formData?.lname,
    email: formData.email,
    phone: formData.phone,
    password: formData.pwd,
    password_confirmation: formData.cpwd,
  };
  return body;

}

export function addAddressBody(Data:AddressData){
  let body = {
    full_name: Data.name ,
    phone:Data.phone,
    pincode: Data.pincode,
    address: Data.address,
    city:Data.city,
    country:Data.country
  };
  return body;
}
