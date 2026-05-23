export interface MenuItem {
  name: string;
  price: number;
  category: "Catering" | "Snack Box" | "Bolen" | "Brownies" | "Tumpeng";
  description: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  quoteTitle: string;
  review: string;
  name: string;
  role: string;
  avatar: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}
