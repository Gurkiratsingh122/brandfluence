export interface BrandCredentials {
    companyName: string;
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreedToTerms: boolean;
}

export interface CompanyDetails {
    businessType: string;
    industry: string;
    website: string;
    address: string;
    phoneNumber: string;
    countryCode: string;
}

export interface PaymentDetails {
    cardNumber: string;
    nameOnCard: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
    zipCode: string;
    subscribeToEmails: boolean;
}

export interface SignupFormData {
    credentials: BrandCredentials;
    companyDetails: CompanyDetails;
    payment: PaymentDetails;
}

export type SignupStep = 'credentials' | 'company' | 'payment';
