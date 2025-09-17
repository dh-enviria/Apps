
import type { BusinessEntity, SignatureData } from './types';

export const LOGO_URL = 'https://a.storyblok.com/f/233186/2000x586/2cdbcb7940/enviria_logo.png';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/enviria-energy/';
export const WEBSITE_URL = 'https://www.enviria.energy';
export const CALENDLY_URL = 'https://calendly.com/enviria-energy-sales';
export const BANNER_URL = 'https://a.storyblok.com/f/233186/600x117/568af0a42c/email-signatur-banner-deutsch.jpg';

export const COMPANY_LANDLINE = '+49 69 170777 800';


export const BUSINESS_ENTITIES: Record<string, BusinessEntity> = {
  'business_solutions': {
    name: 'ENVIRIA Business Solutions GmbH',
    addressLine1: 'Ferdinand-Happ-Straße 53',
    addressLine2: '60314 Frankfurt am Main',
    ceo: 'Melchior Schulze Brock',
    registeredOffice: 'Frankfurt am Main',
    registration: 'Handelsregister B AG Frankfurt am Main · HRB 110419',
  },
  'power_solutions': {
    name: 'ENVIRIA Power Solutions GmbH',
    addressLine1: 'Ferdinand-Happ-Straße 53',
    addressLine2: '60314 Frankfurt am Main',
    ceo: 'Melchior Schulze Brock',
    registeredOffice: 'Frankfurt am Main',
    registration: 'Handelsregister B AG Frankfurt am Main · HRB 110418',
  },
  'engineering_services': {
    name: 'ENVIRIA Engineering & Services GmbH',
    addressLine1: 'Bockauer Talstraße 4',
    addressLine2: '08280 Aue-Bad Schlema',
    ceo: 'Marcel Jastram, Melchior Schulze Brock',
    registeredOffice: 'Aue-Bad Schlema',
    registration: 'Handelsregister AG Chemnitz · HRB 31397',
  },
  'energy_holding': {
    name: 'ENVIRIA Energy Holding GmbH',
    addressLine1: 'Ferdinand-Happ-Straße 53',
    addressLine2: '60314 Frankfurt am Main',
    ceo: 'Melchior Schulze Brock',
    registeredOffice: 'Frankfurt am Main',
    registration: 'Handelsregister B AG Frankfurt am Main · HRB 110069',
  },
  'green_energy_holdco': {
    name: 'ENVIRIA Green Energy HoldCo GmbH & Co. KG',
    addressLine1: 'Ferdinand-Happ-Straße 53',
    addressLine2: '60314 Frankfurt am Main',
    ceo: 'Melchior Schulze Brock',
    registeredOffice: 'Frankfurt am Main',
    registration: 'Handelsregister A AG Frankfurt am Main · HRA 53563',
  },
  'ipp_platform': {
    name: 'ENVIRIA IPP Platform GmbH',
    addressLine1: 'Ferdinand-Happ-Straße 53',
    addressLine2: '60314 Frankfurt am Main',
    ceo: 'Melchior Schulze Brock',
    registeredOffice: 'Frankfurt am Main',
    registration: 'Handelsregister B AG Frankfurt am Main · HRB 133595',
  },
  'montage': {
    name: 'ENVIRIA Montage GmbH',
    addressLine1: 'Ferdinand-Happ-Straße 53',
    addressLine2: '60314 Frankfurt am Main',
    ceo: 'Marcel Jastram, Dimitar Zreykov',
    registeredOffice: 'Frankfurt am Main',
    registration: 'Handelsregister B AG Frankfurt am Main · HRB 131004',
  },
};

export const INITIAL_SIGNATURE_DATA: SignatureData = {
  name: '',
  title: '',
  phone: '',
  email: '',
  entityKey: 'business_solutions',
};