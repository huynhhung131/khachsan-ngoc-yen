// data/hotels.ts

export type Hotel = {
    slug: string;
    name: string;
    shortName: string;
    address: string;
    city: string;
    phone: string;
    description: string;
    mapQuery: string;

    // SEO / JSON-LD
    starRating: number;
    priceRange: string;
    amenities: string[];
    latitude?: number;
    longitude?: number;
    hasRestaurant: boolean;

    // ✅ Ảnh
    coverImage: string;      // Đường dẫn ảnh đại diện, ví dụ: "/images/ngoc-yen-1/cover.jpg"
    gallery: string[];       // Mảng đường dẫn ảnh gallery
};

export const hotels: Hotel[] = [
    {
        slug: 'ngoc-yen-1',
        name: 'Khách Sạn Ngọc Yến 1',
        shortName: 'Ngọc Yến 1',
        address: '16A Đường Phan Văn Đáng, Tân An, Tân Hạnh, TP. Vĩnh Long',
        city: 'Vĩnh Long',
        phone: '096 226 25 85',
        description:
            'Khách Sạn Ngọc Yến 1 – cơ sở đầu tiên trong chuỗi Ngọc Yến tại Vĩnh Long. Khách sạn 3 sao với phòng nghỉ tiện nghi, phù hợp cho du khách và khách công tác.',
        mapQuery: '16A Đường Phan Văn Đáng, Tân An, Tân Hạnh, Vĩnh Long, Việt Nam',
        starRating: 3,
        priceRange: '300.000đ - 600.000đ',
        amenities: [
            'Wi-Fi miễn phí',
            'Bãi đỗ xe miễn phí',
            'Lễ tân 24/7',
            'Điều hòa',
            'Phòng không hút thuốc',
        ],
        hasRestaurant: false,
        coverImage: '/images/ngoc-yen-1/cover.jpg',
        gallery: [
            '/images/ngoc-yen-1/1.jpg',
            '/images/ngoc-yen-1/2.jpg',
            '/images/ngoc-yen-1/3.jpg',
            '/images/ngoc-yen-1/4.jpg',
        ],
    },
    {
        slug: 'ngoc-yen-2',
        name: 'Khách Sạn Ngọc Yến 2',
        shortName: 'Ngọc Yến 2',
        address: 'Đang cập nhật',
        city: 'Vĩnh Long',
        phone: 'Đang cập nhật',
        description:
            'Khách Sạn Ngọc Yến 2 – cơ sở thứ hai trong chuỗi Ngọc Yến tại Vĩnh Long. Thông tin đang được cập nhật.',
        mapQuery: 'Khách sạn Ngọc Yến 2, Vĩnh Long',
        starRating: 3,
        priceRange: 'Đang cập nhật',
        amenities: ['Wi-Fi miễn phí', 'Bãi đỗ xe miễn phí', 'Lễ tân 24/7', 'Điều hòa'],
        hasRestaurant: false,
        coverImage: '/images/ngoc-yen-2/cover.jpg',
        gallery: [
            '/images/ngoc-yen-2/1.jpg',
            '/images/ngoc-yen-2/2.jpg',
            '/images/ngoc-yen-2/3.jpg',
        ],
    },
    {
        slug: 'ngoc-yen-3',
        name: 'Khách Sạn Ngọc Yến 3',
        shortName: 'Ngọc Yến 3',
        address: 'Đang cập nhật',
        city: 'Vĩnh Long',
        phone: 'Đang cập nhật',
        description:
            'Khách Sạn Ngọc Yến 3 – cơ sở thứ ba trong chuỗi Ngọc Yến tại Vĩnh Long. Thông tin đang được cập nhật.',
        mapQuery: 'Khách sạn Ngọc Yến 3, Vĩnh Long',
        starRating: 3,
        priceRange: 'Đang cập nhật',
        amenities: ['Wi-Fi miễn phí', 'Bãi đỗ xe miễn phí', 'Lễ tân 24/7', 'Điều hòa'],
        hasRestaurant: false,
        coverImage: '/images/ngoc-yen-3/cover.jpg',
        gallery: [
            '/images/ngoc-yen-3/1.jpg',
            '/images/ngoc-yen-3/2.jpg',
            '/images/ngoc-yen-3/3.jpg',
        ],
    },
    {
        slug: 'ngoc-yen-4',
        name: 'Khách Sạn Ngọc Yến 4',
        shortName: 'Ngọc Yến 4',
        address: 'Đang cập nhật',
        city: 'Vĩnh Long',
        phone: 'Đang cập nhật',
        description:
            'Khách Sạn Ngọc Yến 4 – cơ sở thứ tư trong chuỗi Ngọc Yến tại Vĩnh Long. Thông tin đang được cập nhật.',
        mapQuery: 'Khách sạn Ngọc Yến 4, Vĩnh Long',
        starRating: 3,
        priceRange: 'Đang cập nhật',
        amenities: ['Wi-Fi miễn phí', 'Bãi đỗ xe miễn phí', 'Lễ tân 24/7', 'Điều hòa'],
        hasRestaurant: false,
        coverImage: '/images/ngoc-yen-4/cover.jpg',
        gallery: [
            '/images/ngoc-yen-4/1.jpg',
            '/images/ngoc-yen-4/2.jpg',
            '/images/ngoc-yen-4/3.jpg',
        ],
    },
    {
        slug: 'ngoc-yen-5',
        name: 'Khách Sạn Và Nhà Hàng Ngọc Yến 5',
        shortName: 'Ngọc Yến 5',
        address: '11 Đường Lê Lai, Phường Long Châu, TP. Vĩnh Long 850000',
        city: 'Vĩnh Long',
        phone: 'Đang cập nhật',
        description:
            'Khách Sạn Và Nhà Hàng Ngọc Yến 5 – khách sạn 3 sao với 53 phòng, nhà hàng và quầy bar tại trung tâm TP. Vĩnh Long. Cách Bảo tàng Vĩnh Long 6 phút đi bộ.',
        mapQuery: '11 Đường Lê Lai, Phường Long Châu, Vĩnh Long 850000, Việt Nam',
        starRating: 3,
        priceRange: '400.000đ - 1.000.000đ',
        amenities: [
            'Wi-Fi miễn phí',
            'Bãi đỗ xe miễn phí',
            'Lễ tân 24/7',
            'Nhà hàng nội khu',
            'Quầy bar',
            'Phòng gia đình',
            'Điều hòa',
            'Dịch vụ đưa đón sân bay',
            'Phòng không hút thuốc',
            'Dịch vụ giặt ủi',
            'Phòng họp/tiệc',
        ],
        hasRestaurant: true,
        coverImage: '/images/ngoc-yen-5/cover.jpg',
        gallery: [
            '/images/ngoc-yen-5/1.jpg',
            '/images/ngoc-yen-5/2.jpg',
            '/images/ngoc-yen-5/3.jpg',
            '/images/ngoc-yen-5/4.jpg',
            '/images/ngoc-yen-5/5.jpg',
        ],
    },
];

export function getHotelBySlug(slug: string): Hotel | undefined {
    return hotels.find((h) => h.slug === slug);
}