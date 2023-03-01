import React, { createRef, useState } from 'react'
import Card from '../components/Card'

const Products = () => {

    // Product's state
    const [products, setProducts] = useState([
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "rating": {
                "rate": 4.1,
                "count": 259
            }
        },
        {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 500
            }
        },
        {
            "id": 4,
            "title": "Mens Casual Slim Fit",
            "price": 15.99,
            "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            "rating": {
                "rate": 2.1,
                "count": 430
            }
        },
        {
            "id": 5,
            "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            "price": 695,
            "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            "rating": {
                "rate": 4.6,
                "count": 400
            }
        },
        {
            "id": 6,
            "title": "Solid Gold Petite Micropave ",
            "price": 168,
            "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 70
            }
        },
        {
            "id": 7,
            "title": "White Gold Plated Princess",
            "price": 9.99,
            "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
            "rating": {
                "rate": 3,
                "count": 400
            }
        },
        {
            "id": 8,
            "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
            "price": 10.99,
            "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
            "rating": {
                "rate": 1.9,
                "count": 100
            }
        },
        {
            "id": 9,
            "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
            "price": 64,
            "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
            "rating": {
                "rate": 3.3,
                "count": 203
            }
        },
        {
            "id": 10,
            "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            "price": 109,
            "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            "rating": {
                "rate": 2.9,
                "count": 470
            }
        },
        {
            "id": 11,
            "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
            "price": 109,
            "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
            "rating": {
                "rate": 4.8,
                "count": 319
            }
        },
        {
            "id": 12,
            "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
            "price": 114,
            "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
            "rating": {
                "rate": 4.8,
                "count": 400
            }
        },
        {
            "id": 13,
            "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
            "price": 599,
            "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
            "rating": {
                "rate": 2.9,
                "count": 250
            }
        },
        {
            "id": 14,
            "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
            "price": 999.99,
            "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
            "rating": {
                "rate": 2.2,
                "count": 140
            }
        },
        {
            "id": 15,
            "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
            "price": 56.99,
            "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
            "rating": {
                "rate": 2.6,
                "count": 235
            }
        },
        {
            "id": 16,
            "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
            "price": 29.95,
            "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
            "rating": {
                "rate": 2.9,
                "count": 340
            }
        },
        {
            "id": 17,
            "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
            "price": 39.99,
            "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
            "rating": {
                "rate": 3.8,
                "count": 679
            }
        },
        {
            "id": 18,
            "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
            "price": 9.85,
            "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 130
            }
        },
        {
            "id": 19,
            "title": "Opna Women's Short Sleeve Moisture",
            "price": 7.95,
            "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
            "rating": {
                "rate": 4.5,
                "count": 146
            }
        },
        {
            "id": 20,
            "title": "DANVOUY Womens T Shirt Casual Cotton Short",
            "price": 12.99,
            "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
            "rating": {
                "rate": 3.6,
                "count": 145
            }
        },

        { id: 21, title: 'Custom Honda Bike', description: 'Custom Honda Motorcycle Garage - Mandalay', image: 'data:image/jpeg;base64,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' },
    ]
    );

    const titleRef = createRef();
    const imgRef = createRef();
    const descriptionRef = createRef();

    const add = () => {
        let id = products.length + 1;
        let title = titleRef.current.value;
        let image = imgRef.current.value;
        let description = descriptionRef.current.value;

        setProducts([...products, { id, title, description, image }])
    }
    console.log(products);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        add();
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler} className='row'>
                <div className="form-group col my-3">
                    <label htmlFor="title" className='from-label'>Title</label>
                    <input ref={titleRef} type="text" name="title" id="title" placeholder='Enter Name' className='form-control' />
                </div>

                <div className="form-group col my-3">
                    <label htmlFor="url" className='from-label'>Image URL</label>
                    <input ref={imgRef} type="text" name="url" id="url" placeholder='Enter Img URL' className='form-control' />
                </div>

                <div className="form-group col my-3">
                    <label htmlFor="description" className='from-label'>Description</label>
                    <input ref={descriptionRef} type="text" name="description" id="description" placeholder='Enter Description' className='form-control' />
                </div>

                <div className="form-group d-flex justify-content-center">
                    <button type="submit" className='btn btn-outline-primary'>Add Product</button>
                </div>
            </form>

            <div className='d-flex justify-content-center flex-wrap gap-4 my-4'>
                {products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>

    )
}

export default Products
