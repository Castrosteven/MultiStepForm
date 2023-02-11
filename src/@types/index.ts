export interface FormInterface {
  name: string;
  email: string;
  phoneNumber: string;
  plan: {
    planName: string;
    price: number;
  };
  addOns: {
    addOnName: string;
    addOnPrice: number;
  }[];
}

export interface Plan {
  plan_name: string;
  monthly_price: number;
  yearly_price: number;
  icon: string;
}

export interface AddOn {
  add_on_name: string;
  add_on_description: string;
  monthly_price: number;
  yearly_price: number;
}

export interface RootObject {
  plans: Plan[];
  add_ons: AddOn[];
}
