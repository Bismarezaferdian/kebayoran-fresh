import Category from "./components/landingpage/Category"

type Banner = {
    headTitle?: string,
    mainTitle?: string,
    desc?: string
    image: string
}

type Banners = Banner[]

type option = {
    id: string;
    createdAt: string;
    title: string;
    price: number;
    weight: number;
    prodSlug: string;
};

export type ProductType = {
    id: string,
    title: string,
    desc?: string,
    img: string,
    slug:string,
    catSlug:string,
    isFeatured:boolean,
    price: number,
    weight?: number,
    category: String,
    option?: option[],
}


export type CategoryProduct = {
    id: number
    title: string
    img: string
    slug: string
    product:ProductType[]
}

export type FormState = {
    error?: {
      [key: string]: string[]; // Example: { email: ["error message"] }
    };
    message?: string;
  };

  export type DataSingleProd = {
    prodId: string;
    optionId?: string;
    userId: string;
    quantity: number;
  }

  //dipakai saat input ke cartitems
  export type CartItemInput = {
    prodId: string;
    optionId?: string;
    userId: string;
    quantity: number;
  };
  
  export type CartItem={
    id      : string;
    quantity: number;
    optionId :string;
    prodId   :string
    cartId   :string
    product :ProductType;
    Option:option;
    // cart     :Cart
  }

  export type Cart ={
    id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    cartItems: CartItem[];
  }

//API

export type SessionData ={
    userId?: string|null;
    email?:  string|null;
    userName?: string|null;
    isPro?: boolean;
    isLoggedIn: boolean;
  }

export type ProductApi = {
    id: number,
    createdAt:Date,
    title: string,
    desc?: string,
    img: string,
    price: number,
    weight?: number,
    category: String,
    option?: { title: string, price: number }[],
}

export type CategoryApi = {
    id: number;
    createdAt:Date,
    title: string,
    desc:string,
    img: string,
    slug : string
    product:ProductApi[]
}


  
  


type Categories = CategoryProduct[]

export const bannerSlider: Banners = [
    {
        headTitle: "Fresh Today",
        mainTitle: "HEALTHY VEGETABLES",
        desc: "pure 100% orange and organic",
        image: "/banner/banner_kebayoranfresh.png"

    },
    {
        headTitle: "Free Delevery",
        mainTitle: "Buy Fresh fruits for delevery",
        desc: "we supply higly quality organic product",
        image: "/banner/banner_kebayoranfresh3.png"

    },
    {
        headTitle: "Everything you need",
        mainTitle: "Delevered to you",
        desc: "quick delevery",
        image: "/banner/banner_kebayoranfresh2.png"

    }
]

export type Products = ProductType[]

export const ProductCarts: Products = [
    {
        id: "1",
        category: "vegetables",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam similique, quod excepturi aperiam deleniti dolor ex qui voluptatibus adipisci. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos dolore enim quos voluptas, ad voluptatibus eveniet beatae iste debitis explicabo.",
        title: "Ayam Potong Segar",
        slug: "ayam potong",
        isFeatured
:true,
        catSlug:"fish",
        img: "/product/ayam.jpeg",
        price: 12000,
        weight: 250,
        // option: [
        //     {
        //         title: "250 gr",
        //         price: 12000,
        //         weight:
        //     },
        //     {
        //         title: "500 gr",
        //         price: 24000,
        //     },
        //     {
        //         title: "750 gr",
        //         price: 36000,
        //     },
        //     {
        //         title: "1000 gr",
        //         price: 48000,
        //     },
        // ]

    },
    {
        id: "2",
        category: "vegetables",
        title: "Bawang Putih",
        slug:"bawang putih",
        isFeatured
:true,

        catSlug:"fish",
        img: "/product/bawangWhite.jpeg",
        price: 11000,
        weight: 250,
        // option: [
        //     {
        //         title: "250 gr",
        //         price: 11000,
        //     },
        //     {
        //         title: "500 gr",
        //         price: 22000,
        //     },
        //     {
        //         title: "750 gr",
        //         price: 33000,
        //     },
        //     {
        //         title: "1000 gr",
        //         price: 44000,
        //     },
        // ]

    },
    {
        id: "3",
        category: "vegetables",
        title: "Bayam ",
        isFeatured
:true,

        slug:"bayam",
        catSlug:"fish",
        img: "/product/bayam.jpeg",
        price: 12000,
        weight: 250,
        // option: [
        //     {
        //         title: "100 gr",
        //         price: 3000,
        //     },
        //     {
        //         title: "200 gr",
        //         price: 6000,
        //     },
        //     {
        //         title: "300 gr",
        //         price: 12000,
        //     }
        // ]

    },
]

export const ProductDisplay: Products = [
    {
        id: "1",
        category: "vegetables",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam similique, quod excepturi aperiam deleniti dolor ex qui voluptatibus adipisci. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos dolore enim quos voluptas, ad voluptatibus eveniet beatae iste debitis explicabo.",
        title: "Ayam Potong Segar",
        slug:"ayam potong segar ",
        catSlug:"fish",
        img: "/product/ayam.jpeg",
        price: 12000,
        isFeatured
:true,

        weight: 250,
        // option: [
        //     {
        //         title: "250 gr",
        //         price: 12000,
        //     },
        //     {
        //         title: "500 gr",
        //         price: 24000,
        //     },
        //     {
        //         title: "750 gr",
        //         price: 36000,
        //     },
        //     {
        //         title: "1000 gr",
        //         price: 48000,
        //     },
        // ]

    },
    {
        id: "2",
        category: "vegetables",
        title: "Bawang Putih",
        slug: "bawang putih",
        catSlug:"fish",
        img: "/product/bawangWhite.jpeg",
        isFeatured
:true,

        price: 11000,
        weight: 250,
        // option: [
        //     {
        //         title: "250 gr",
        //         price: 11000,
        //     },
        //     {
        //         title: "500 gr",
        //         price: 22000,
        //     },
        //     {
        //         title: "750 gr",
        //         price: 33000,
        //     },
        //     {
        //         title: "1000 gr",
        //         price: 44000,
        //     },
        // ]

    },
    {
        id: "3",
        category: "vegetables",
        title: "Bayam ",
        slug:"bayam",
        catSlug:"fish",
        isFeatured
:true,

        img: "/product/bayam.jpeg",
        price: 12000,
        weight: 250,
        // option: [
        //     {
        //         title: "100 gr",
        //         price: 3000,
        //     },
        //     {
        //         title: "200 gr",
        //         price: 6000,
        //     },
        //     {
        //         title: "300 gr",
        //         price: 12000,
        //     }
        // ]

    },
    {
        id: "4",
        category: "vegetables",
        title: "Bayam ",
        slug:"bayan",
        catSlug:"fish",
        img: "/product/bombai.jpeg",
        price: 12000,
        isFeatured
:true,

        weight: 250,
        // option: [
        //     {
        //         title: "100 gr",
        //         price: 3000,
        //     },
        //     {
        //         title: "200 gr",
        //         price: 6000,
        //     },
        //     {
        //         title: "300 gr",
        //         price: 12000,
        //     }
        // ]

    },
    {
        id: "5",
        category: "vegetables",
        title: "Bayam ",
        slug:"basan",
        isFeatured
:true,

        catSlug:"fish",
        img: "/product/bombai.jpeg",
        price: 12000,
        weight: 250,
        // option: [
        //     {
        //         title: "100 gr",
        //         price: 3000,
        //     },
        //     {
        //         title: "200 gr",
        //         price: 6000,
        //     },
        //     {
        //         title: "300 gr",
        //         price: 12000,
        //     }
        // ]

    },
    {
        id: "6",
        category: "vegetables",
        title: "Bayam ",
        slug:"basreng",
        catSlug:"fish",
        img: "/product/bombai.jpeg",
        price: 12000,
        isFeatured
:true,

        weight: 250,
        // option: [
        //     {
        //         title: "100 gr",
        //         price: 3000,
        //     },
        //     {
        //         title: "200 gr",
        //         price: 6000,
        //     },
        //     {
        //         title: "300 gr",
        //         price: 12000,
        //     }
        // ]

    },
    {
        id: "7",
        category: "vegetables",
        title: "Bayam ",
        slug:"baseng",
        catSlug:"fish",
        img: "/product/bombai.jpeg",
        price: 12000,
        isFeatured
:true,

        weight: 250,
        // option: [
        //     {
        //         title: "100 gr",
        //         price: 3000,
        //     },
        //     {
        //         title: "200 gr",
        //         price: 6000,
        //     },
        //     {
        //         title: "300 gr",
        //         price: 12000,
        //     }
        // ]

    },
    {
        id:" 8",
        category: "vegetables",
        title: "Bayam ",
        slug:"bassreng",
        isFeatured
:true,

        catSlug:"fish",
        img: "/product/bombai.jpeg",
        price: 12000,
        weight: 250,
        // option: [
        //     {
        //         title: "100 gr",
        //         price: 3000,
        //     },
        //     {
        //         title: "200 gr",
        //         price: 6000,
        //     },
        //     {
        //         title: "300 gr",
        //         price: 12000,
        //     }
        // ]

    },
]


export const featureProducts: Products = [
    {
        id: "1",
        category: "vegetables",
        title: "Ayam Potong Segar",
        slug:"ayam potong segar ",
        isFeatured
:true,

        catSlug:"fish",
        img: "/product/ayam.jpeg",
        price: 12000,
        weight: 250,
        // option: [
        //     {
        //         title: "250 gr",
        //         price: 12000,
        //     },
        //     {
        //         title: "500 gr",
        //         price: 24000,
        //     },
        //     {
        //         title: "750 gr",
        //         price: 36000,
        //     },
        //     {
        //         title: "1000 gr",
        //         price: 48000,
        //     },
        // ]

    },
    {
        id: "2",
        category: "vegetables",
        isFeatured
:true,

        title: "Bawang Putih",
        slug:"bawang putih",
        catSlug:"fish",
        img: "/product/bawangWhite.jpeg",
        price: 11000,
        // option: [
        //     {
        //         title: "250 gr",
        //         price: 11000,
        //     },
        //     {
        //         title: "500 gr",
        //         price: 22000,
        //     },
        //     {
        //         title: "750 gr",
        //         price: 33000,
        //     },
        //     {
        //         title: "1000 gr",
        //         price: 44000,
        //     },
        // ]

    },
    {
        id: "3",
        category: "vegetables",
        title: "Bayam ",
        slug:"bacan",
        isFeatured
:true,

        catSlug:"fish",
        img: "/product/bayam.jpeg",
        price: 12000,
        // option: [
        //     {
        //         title: "100 gr",
        //         price: 3000,
        //     },
        //     {
        //         title: "200 gr",
        //         price: 6000,
        //     },
        //     {
        //         title: "300 gr",
        //         price: 12000,
        //     }
        // ]

    },
    {
        id: "4",
        category: "vegetables",
        title: "Bayam ",
        slug:"bass",
        isFeatured
:true,

        catSlug:"fish",
        img: "/product/bombai.jpeg",
        price: 12000,
        // option: [
        //     {
        //         title: "100 gr",
        //         price: 3000,
        //     },
        //     {
        //         title: "200 gr",
        //         price: 6000,
        //     },
        //     {
        //         title: "300 gr",
        //         price: 12000,
        //     }
        // ]

    },
    {
        id: "5",
        category: "vegetables",
        isFeatured
:true,

        title: "Bayam ",
        slug:"bayam",
        catSlug:"fish",
        img: "/product/bombai.jpeg",
        price: 12000,
        // option: [
        //     {
        //         title: "100 gr",
        //         price: 3000,
        //     },
        //     {
        //         title: "200 gr",
        //         price: 6000,
        //     },
        //     {
        //         title: "300 gr",
        //         price: 12000,
        //     }
        // ]

    },
    {
        id: "6",
        category: "vegetables",
        isFeatured:true,

        title: "Bayam ",
        slug:"bayan",
        catSlug:"fish",
        img: "/product/bombai.jpeg",
        price: 12000,
        // option: [
        //     {
        //         title: "100 gr",
        //         price: 3000,
        //     },
        //     {
        //         title: "200 gr",
        //         price: 6000,
        //     },
        //     {
        //         title: "300 gr",
        //         price: 12000,
        //     }
        // ]

    }
]

// Category

// export const category: Categories = [
//     {
//         id: "1",
//         title: "fishs",
//         img: "/category/fish.png"
//     },
//     {
//         id: "2",
//         title: "vegetable",
//         img: "/category/cabbage.png"
//     },
//     {
//         id: "3",
//         title: "fruits",
//         img: "/category/watermelon.png"

//     },
//     {
//         id: "4",
//         title: "chicken",
//         img: "/category/chicken.png"
//     },
//     {
//         id: "5",
//         title: "meats",
//         img: "/category/beef.png"

//     },
//     {
//         id: 6,
//         title: "meats",
//         img: "/category/beef.png"

//     },
//     {
//         id: 7,
//         title: "meats",
//         img: "/category/beef.png"

//     },

// ]



