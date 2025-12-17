import { FacebookIcon, InstagramIcon, XIcon } from '@/components/shared/icons'
import { Bank, Category, FAQ, FeaturedBrand, FooterItem, Hero, Product, SocialItem } from '@/types'
import { Minus } from 'lucide-react'
import Image from 'next/image'
import Hero1 from '../../public/hero/hero-1.png'
import Hero2 from '../../public/hero/hero-2.png'
import Hero3 from '../../public/hero/hero-3.png'

// ============================
// NAVIGATION ITEMS
// ============================
export const NAV_ITEMS = [
  { label: 'Онцлох брэндүүд', href: '/' },
  { label: 'Бүтээгдэхүүн', href: '/products' },
  { label: 'Бидний тухай', href: '/about' },
]

// ============================
// SOCIALS
// ============================
export const SOCIALS: SocialItem[] = [
  {
    label: 'Khalifa Mongolia',
    href: 'https://www.facebook.com/khalifa2024Mongolia',
    icon: FacebookIcon,
  },
  {
    label: 'khalifamongolia',
    href: 'https://www.instagram.com/khalifamongolia/',
    icon: InstagramIcon,
  },
  {
    label: 'Khalifa Mongolia',
    href: 'https://x.com/KhalifaMongolia',
    icon: XIcon,
  },
]

// ============================
// HERO ITEMS
// ============================
export const HERO_LIST: Hero[] = [{ src: Hero1 }, { src: Hero2 }, { src: Hero3 }]

// ============================
// FOOTER ITEMS
// ============================

export const FOOTER_ITEMS: FooterItem[] = [
  { label: 'Түгээмэл асуулт, хариулт', href: '/faq' },
  {
    label: 'Нээлттэй ажлын байр',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeA9dSYVFCcR9LzDHdSuVadQpuBCIl1glI-G6wpazdpreYq5w/viewform?fbclid=IwY2xjawFeEJNleHRuA2FlbQIxMAABHUUbjBRCjOMKOTP8oH5HmgUbAR0bDEvqU7_8G-8GQ6HhxXmBV39WdsI0pA_aem_bS5s7qA0AX2Xeg-HNNSoQw',
  },
  { label: 'Нууцлалын бодлого', href: '/privacy_policy' },
  { label: 'Ерөнхий үйлчилгээний нөхцөл', href: '/terms_and_conditions' },
]

export const FEATURED_BRAND: FeaturedBrand[] = [
  {
    id: 1,
    banner: {
      image: '/banner/banner-1.png',
      logo: '/banner/banner-logo.png',
    },
    title: 'Laurent - Perrier Champagne',
    description: `1812 оноос эхэлсэн түүхтэй Лоран-Перриер оргилуун дарс нь оргилуун дарсны хамгийн том брэндүүдийн нэг юм. Гэр бүлийн бизнес болох Лоран-Перриерийн үйлдвэр нь Бернард де Нонанкурын хүсэл тэмүүлэл, алсын харааны ачаар өнөөдрийн оргилуун дарсны зах зээлд томоохон байр суурийг эзэлж байна. Төгс төгөлдөр байдал, дэгжин байдал, бие даасан байдал нь Лоран-Перриер үйлдвэрийн хамгийн чухал гурван үнэт зүйл юм. Энэхүү оргилуун дарс нь өөрийн өвөрмөц өнгө төрх, амт чанар, бэлгэ тэмдэг бүхий өнгө төрхөө өнөөдрийг хүртэл хадгалж ирсэн нь хамгийн алдартай тансаг гэх тодотголыг авсан байна.`,
    products: [
      {
        id: 1,
        title: 'Laurent Perrier La Cuvee Brut',
        description: 'L’équilibre Parfait',
        image: '/wine/wine-1.png',
        url: '/test',
      },
      {
        id: 2,
        title: 'Laurent Perrier Rose',
        description: 'L’équilibre Parfait',
        image: '/wine/wine-1.png',
        url: '/test',
      },
    ],
  },
  {
    id: 2,
    banner: {
      image: '/banner/banner-1.png',
      logo: '/banner/banner-logo.png',
    },
    title: 'Glenfiddich Whisky',
    description: `Гленфиддич нь Гали хэлээр "бугын хөндий" гэсэн утгатай ба Гленфиддичийн нэрэх үйлдвэрийг 1886 онд Уильям Грант анх үүсгэн байгуулжээ. Өдгөө Гленфиддич бол виски ертөнцийн томоохон брэндүүдийн нэг юм. Дэлхийн хамгийн алдартай нэг амууны Шотланд вискиний брэнд бөгөөд тус нэрэх үйлдвэр нь "Өндөр уулсын зүрх" гэж нэрлэгддэг Даффтаун хотод байрладаг байна. Энэхүү брэндийн үүсгэн байгуулагч Уильям Грант нь “хөндий дэх хамгийн сайн виски" хийх алсын хараатай байсан бө өнөөдөр Гленфиддич дэлхийн 180 гаруй оронд худалдаалагдаж байгаа нь түүний хүлээлтээс ч давсан байна. Glenfiddich нэг амууны Шотланд вискины хувилбар бүр нь өөрийн зан чанараараа ялгаатай бөгөөд амт тус бүр нь өөр өөрийн хэв маягт тохирсон байдаг. Алдарт гурвалжин хэлбэртэй лонхыг нь 1957 онд зохион бүтээсэн ба энэ загвар нь ус, агаар, соёолж гурвын ач холбогдлыг илтгэн харуулжээ.`,
    products: [
      {
        id: 3,
        title: 'Glenfiddich 12 years',
        description: 'Single malt Scotch whisky',
        image: '/wine/wine-1.png',
        url: '/test',
      },
      {
        id: 4,
        title: 'Glenfiddich 15 years',
        description: 'Solera Single malt Scotch whisky',
        image: '/wine/wine-1.png',
        url: '/test',
      },
      {
        id: 5,
        title: 'Glenfiddich 18 years',
        description: 'Small batch Reserve',
        image: '/wine/wine-1.png',
        url: '/test',
      },
    ],
  },
]

// ============================
// PRODUCTS
// ============================

export const PRODUCTS_LIST: Product[] = [
  {
    id: 6,
    title: 'Signature Candle',
    category_id: 1,
    description: '',
    stock: 2,
    price: 55000,
    images: ['/wine/wine-2.png'],
    url: '/test',
  },
  {
    id: 7,
    title: 'Glen Talloch Blended Whisky Rare & Old',
    category_id: 5,
    description: '',
    stock: 0,
    price: 95000,
    images: ['/wine/wine-2.png'],
    url: '/test',
  },
  {
    id: 8,
    title: 'Sierra Silver',
    category_id: 7,
    description: '',
    stock: 0,
    price: 82000,
    images: ['/wine/wine-2.png'],
    url: '/test',
  },
  {
    id: 9,
    title: 'Grand Marnier Gordon Rouge',
    category_id: 4,
    description: '',
    stock: 2,
    price: 138000,
    images: ['/wine/wine-2.png'],
    url: '/test',
  },
]

// ============================
// CATEGORIES
// ============================

export const CATEGORIES: Category[] = [
  { id: 1, title: 'gift set' },
  { id: 2, title: 'gin' },
  { id: 3, title: 'rum' },
  { id: 4, title: 'liqueur' },
  { id: 5, title: 'whiskey' },
  { id: 6, title: 'champagne' },
  { id: 7, title: 'tequila' },
]

export const ABOUT = [
  {
    id: 1,
    title: 'Эрхэм зорилго',
    description:
      'Дэлхийн тансаг зэрэглэлийн шингэн бүтээгдэхүүнийг Монголдоо хямд үнээр, албан ёсны баталгаат үйлдвэрээс нь худалдан борлуулж үйлчлүүлэгч хэрэглэгч нартаа хамгийн хялбар үйлчилгээг санал болгох юм.',
  },
  {
    id: 2,
    title: 'Алсын хараа',
    description:
      'Бараа бүтээгдэхүүнийхээ төрлийн нэмэгдүүлж илүү хялбар аргаар бусдаас хямд үнээр премиум зэрэглэлийн бараа бүтээгдэхүүнийг хэрэглэгчдэд нийлүүлэх болон шингэн хүнсийг зохистой хэрэглэх соёлыг дэлгэрүүлэхэд оршино.',
  },
  {
    id: 3,
    title: 'Үнэт зүйл',
    description: 'Чанарыг эрхэмлэж, соёлыг түгээж, ёс зүйг баримтална.',
  },
]

// ============================
// FAQ
// ============================

export const FAQ_LIST: FAQ[] = [
  {
    id: 1,
    question: '1. Бүртгүүлэх/Нэвтрэх заавар',
    type: 'ordered',
    answer: [
      '• Энгийн хэрэглэгч Утасны дугаар болон и мэйл-ээр нэвтрэх заавар болон нууц үгээ мартсан бол гэх заавар оруулах',
      '• Байгууллага бол хамтран ажиллах гэрээний хүсэлтийг contact@khalifa.mn гэсэн имэйл-ээр холбогдож авах эсвэл 75990007 дугаараар холбогдон бүртгэлээ үүсгэнэ гэх заавар байх',
    ],
  },
  {
    id: 2,
    question: '2. Хамтран ажиллах байгууллага болсноор ямар давуу талтай вэ?',
    type: 'ordered',
    answer: [
      '• Бэлэн болон Зээлийн үнийн санал',
      '• Сарын борлуулалтын бонус урамшуулал',
      '• Эвэнт үйл ажиллагаанд хамтран ажиллах боломж',
      '• Сарын борлуулалтаас хамааран Брэндийн POS материал авах',
      '• Түргэн шуурхай хүргэлтйин систем',
    ],
  },
  {
    id: 3,
    question: '3. Хоёр тусдаа захиалга хийгээд нэг хүргэлтээр авч болох уу?',
    type: 'ordered',
    answer: [
      'Захиалга нь хүргэлтийн нэг хаяг дээр үүссэн тохиолдолд лавлах утсанд хандан хамтад нь хүргүүлэн авах боломжтой.',
    ],
  },
  {
    id: 4,
    question: '4. Захиалсан бараа дутуу ирсэн бол яах вэ?',
    type: 'ordered',
    answer: [
      'Захиалсан барааны тoo ширхэг зөрүүтэй тохиолдолд лавлах утсанд хандах эсвэл албан ёсны цахим хуудсанд мессэж илгээн тоо ширхэгийн зөруутэй барааг нөхөн авах боломжтой.',
    ],
  },
  {
    id: 5,
    question: '5. Захиалга хэзээ ирэх вэ?',
    type: 'custom',
    answer: (
      <div className="space-y-4">
        <div className="space-y-4">
          <li>Таны захиалга баталгаажсаны дараа, заасан хаягт хүргэлт хийгдэнэ.</li>
          <div className="flex flex-wrap gap-2 items-center font-bold">
            <span className="font-normal">• А бүс буюу</span> <span>( Баруун 4 Зам )</span>{' '}
            <Minus /> <span>( Зүүн 4 Зам )</span> <Minus /> <span>( Зайсан )</span> <Minus />
            <span>( 32 тойрог )</span>
            <span className="font-normal">3-24 цагийн дотор</span>{' '}
            <span className="uppercase">үнэгүй</span>
          </div>
          <div className="flex flex-wrap gap-2 items-center font-bold">
            <span className="font-normal">• Б бүс буюу</span> <span>( Таван шар )</span> <Minus />{' '}
            <span>( Атгалан )</span> <Minus /> <span>( 7 буудал )</span> <Minus />
            <span>( Яармаг )</span>
            <span className="font-normal">24– 48 цагийн дотор </span>
            <span>20,000₮</span>
          </div>
        </div>
        <Image src={'/map.png'} width={500} height={250} className="aspect-2/1" alt="delivery" />
      </div>
    ),
  },
  {
    id: 6,
    question: '6. Захиалгаас нэг барааг нь хасах гэж байгаад мартсан бол?',
    type: 'ordered',
    answer: [
      '• Захиалга хүргэлтэнд гараагүй байгаа тохиолдолд лавлах утсанд хандаж мэдэгдэнэ.',
      '• Хүргэлтэд гарсан тохиолдолд барааг жолоочид буцаан явуулах боломжтой.',
    ],
  },
  {
    id: 7,
    question: '7. Бэлнээр төлбөр төлж захиалга хийж болох уу?',
    type: 'ordered',
    answer: [
      'Захиалгын төлбөр урьдчилан 100% төлөгдсөн тохиолдолд захиалга баталгаажиж хүргэлтэд гарна.',
    ],
  },
  {
    id: 8,
    question: '8. Захиалсан бараагаа өөр бараагаар сольж болох уу?',
    type: 'ordered',
    answer: ['Худалдан авсан бараагаа буцаах болон солих боломжгүй тул та сонголтоо зөв хийнэ үү'],
  },
]

export const PAYMENT_LIST: Bank[] = [
  { name: 'qPay wallet', image: '/logo/banks/qpay.svg' },
  { name: 'Khan bank', image: '/logo/banks/khan.svg' },
  { name: 'State bank 3.0', image: '/logo/banks/state.svg' },
  { name: 'Xac bank', image: '/logo/banks/xac.svg' },
  { name: 'Trade and Development bank', image: '/logo/banks/tdb.svg' },
  { name: 'Social Pay', image: '/logo/banks/socialpay.svg' },
  { name: 'Most money', image: '/logo/banks/mostmoney.svg' },
  { name: 'National investment bank', image: '/logo/banks/nib.svg' },
  { name: 'Chinggis khaan bank', image: '/logo/banks/ckb.svg' },
  { name: 'Capitron bank', image: '/logo/banks/capitron.svg' },
  { name: 'Bogd bank', image: '/logo/banks/bogd.svg' },
  { name: 'Trans bank', image: '/logo/banks/trans.svg' },
  { name: 'M bank', image: '/logo/banks/mbank.svg' },
  { name: 'Ard App', image: '/logo/banks/ardapp.svg' },
  { name: 'Toki App', image: '/logo/banks/toki.svg' },
  { name: 'Arig bank', image: '/logo/banks/arig.svg' },
  { name: 'Monpay', image: '/logo/banks/monpay.svg' },
  { name: 'Hipay', image: '/logo/banks/hipay-logo.svg' },
]
