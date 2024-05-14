import Category from "./components/landingpage/Category"

type Banner = {
    headTitle?: string,
    mainTitle?: string,
    desc?: string
    image: string
}

type Banners = Banner[]

type ProductType = {
    id: number,
    title: string,
    desc?: string,
    img: string,
    price: number,
    category: String,
    option?: { title: string, price: number }[],
}


type Category = {
    id: number;
    title: string,
    img: string
}

type Categories = Category[]

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

export const ProductDisplay: Products = [
    {
        id: 1,
        category: "vegetables",
        title: "Ayam Potong Segar",
        img: "/product/ayam.jpeg",
        price: 12000,
        option: [
            {
                title: "250 gr",
                price: 12000,
            },
            {
                title: "500 gr",
                price: 24000,
            },
            {
                title: "750 gr",
                price: 36000,
            },
            {
                title: "1000 gr",
                price: 48000,
            },
        ]

    },
    {
        id: 2,
        category: "vegetables",
        title: "Bawang Putih",
        img: "/product/bawangWhite.jpeg",
        price: 11000,
        option: [
            {
                title: "250 gr",
                price: 11000,
            },
            {
                title: "500 gr",
                price: 22000,
            },
            {
                title: "750 gr",
                price: 33000,
            },
            {
                title: "1000 gr",
                price: 44000,
            },
        ]

    },
    {
        id: 3,
        category: "vegetables",
        title: "Bayam ",
        img: "/product/bayam.jpeg",
        price: 12000,
        option: [
            {
                title: "100 gr",
                price: 3000,
            },
            {
                title: "200 gr",
                price: 6000,
            },
            {
                title: "300 gr",
                price: 12000,
            }
        ]

    },
    {
        id: 4,
        category: "vegetables",
        title: "Bayam ",
        img: "/product/bombai.jpeg",
        price: 12000,
        option: [
            {
                title: "100 gr",
                price: 3000,
            },
            {
                title: "200 gr",
                price: 6000,
            },
            {
                title: "300 gr",
                price: 12000,
            }
        ]

    },
    {
        id: 5,
        category: "vegetables",
        title: "Bayam ",
        img: "/product/bombai.jpeg",
        price: 12000,
        option: [
            {
                title: "100 gr",
                price: 3000,
            },
            {
                title: "200 gr",
                price: 6000,
            },
            {
                title: "300 gr",
                price: 12000,
            }
        ]

    }
]


export const featureProducts: Products = [
    {
        id: 1,
        category: "vegetables",
        title: "Ayam Potong Segar",
        img: "/product/ayam.jpeg",
        price: 12000,
        option: [
            {
                title: "250 gr",
                price: 12000,
            },
            {
                title: "500 gr",
                price: 24000,
            },
            {
                title: "750 gr",
                price: 36000,
            },
            {
                title: "1000 gr",
                price: 48000,
            },
        ]

    },
    {
        id: 2,
        category: "vegetables",
        title: "Bawang Putih",
        img: "/product/bawangWhite.jpeg",
        price: 11000,
        option: [
            {
                title: "250 gr",
                price: 11000,
            },
            {
                title: "500 gr",
                price: 22000,
            },
            {
                title: "750 gr",
                price: 33000,
            },
            {
                title: "1000 gr",
                price: 44000,
            },
        ]

    },
    {
        id: 3,
        category: "vegetables",
        title: "Bayam ",
        img: "/product/bayam.jpeg",
        price: 12000,
        option: [
            {
                title: "100 gr",
                price: 3000,
            },
            {
                title: "200 gr",
                price: 6000,
            },
            {
                title: "300 gr",
                price: 12000,
            }
        ]

    },
    {
        id: 4,
        category: "vegetables",
        title: "Bayam ",
        img: "/product/bombai.jpeg",
        price: 12000,
        option: [
            {
                title: "100 gr",
                price: 3000,
            },
            {
                title: "200 gr",
                price: 6000,
            },
            {
                title: "300 gr",
                price: 12000,
            }
        ]

    },
    {
        id: 5,
        category: "vegetables",
        title: "Bayam ",
        img: "/product/bombai.jpeg",
        price: 12000,
        option: [
            {
                title: "100 gr",
                price: 3000,
            },
            {
                title: "200 gr",
                price: 6000,
            },
            {
                title: "300 gr",
                price: 12000,
            }
        ]

    }
]

// Category

export const category: Categories = [
    {
        id: 1,
        title: "fishs",
        img: "/category/fish.png"
    },
    {
        id: 2,
        title: "vegetables",
        img: "/category/cabbage.png"
    },
    {
        id: 3,
        title: "fruits",
        img: "/category/watermelon.png"

    },
    {
        id: 4,
        title: "chicken",
        img: "/category/chicken.png"
    },
    {
        id: 5,
        title: "meats",
        img: "/category/beef.png"

    },
    {
        id: 6,
        title: "meats",
        img: "/category/beef.png"

    },
    {
        id: 7,
        title: "meats",
        img: "/category/beef.png"

    },

]


