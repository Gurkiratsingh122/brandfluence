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

export type SignupStep = "credentials" | "company" | "payment";

// types/signup.ts

export type InfluencerSignupStep = "credentials" | "profile" | "payout";

/* ---------- STEP 1 ---------- */
export interface InfluencerCredentials {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreedToTerms: boolean;
}

/* ---------- STEP 2 ---------- */
export interface InfluencerProfile {
  niche?: string;
  country?: string;
  profilePhoto?: File;
  headerImage?: File;
  bio: string;
  website?: string;
}

/* ---------- STEP 3 ---------- */
export interface InfluencerPayout {
  method: "paypal";
  paypalEmail: string;
  agreedToPayoutTerms: boolean;
}

/* ---------- FULL DATA ---------- */
export interface InfluencerSignupData {
  credentials: InfluencerCredentials;
  profile: InfluencerProfile;
  payout: InfluencerPayout;
}
