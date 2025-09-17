export interface BusinessEntity {
  name: string;
  addressLine1: string;
  addressLine2: string;
  ceo: string;
  registeredOffice: string;
  registration: string;
}

export interface SignatureData {
  name: string;
  title: string;
  phone: string; // Mobile
  email: string;
  entityKey: string;
}