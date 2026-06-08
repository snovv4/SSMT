import { Link } from 'react-router-dom'
import categoryIcons from '../../../utils/categoriesIcon.jsx'
import { CreditCard, Utensils, Shirt, Laptop, BookOpen } from 'lucide-react'

const categories = [
  { name: "Cards", icon: <CreditCard size={32} />, slug: "cards" },
  { name: "Food", icon: <Utensils size={32} />, slug: "food" },
  { name: "Clothing", icon: <Shirt size={32} />, slug: "clothing" },
  { name: "Electronics", icon: <Laptop size={32} />, slug: "electronics" },
  { name: "Books", icon: <BookOpen size={32} />, slug: "books" },
]

const featuredItems = [
  { id: 1, name: "Sample Item 1", price: 99000, image: "https://placehold.co/300x200" },
  { id: 2, name: "Sample Item 2", price: 149000, image: "https://placehold.co/300x200" },
  { id: 3, name: "Sample Item 3", price: 199000, image: "https://placehold.co/300x200" },
  { id: 4, name: "Sample Item 4", price: 249000, image: "https://placehold.co/300x200" },
]

function Home() {
  return (
    <div className="min-h-screen bg-[#121212]">

        {/* Hero Banner */}
        <div className="text-center py-24 px-8 bg-[#1E1E1E]">
            <h1 className="text-4xl font-bold mb-4 font-['Playfair_Display', 'serif'] text-[#FFFFFF]">
                Sell Something, Make it Yours
            </h1>
            <p className="text-lg mb-8 text-[#A0A0A0]">
                Khám phá hàng ngàn sản phẩm từ nhiều danh mục
            </p>
            <Link to="/items" className="font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition-colors no-underline text-[#FFFFFF] bg-[#D32F2F] hover:bg-[#b71c1c]">
                Mua sắm ngay
            </Link>
        </div>

        {/* Categories */}
        <div className="max-w-6xl mx-auto px-8 py-12">
            <h2 className="text-xl font-bold mb-6 text-[#FFFFFF]">Danh mục</h2>
            <div className="grid grid-cols-5 gap-4">
            {categories.map((cat) => (
                <Link
                    key={cat.slug}
                    to={`/items?category=${cat.slug}`}
                    className="flex flex-col items-center gap-2 rounded-xl py-6 transition-all no-underline bg-[#1E1E1E] border border-[#2a2a2a] hover:border-[#D32F2F]"
                >
                <span className="text-[#D32F2F]">{cat.icon}</span>
                <span className="text-sm font-medium text-[#A0A0A0]">{cat.name}</span>
                </Link>
            ))}
            </div>
        </div>
            
        {/* Flash Sale */}
        <div className="max-w-6xl mx-auto px-8 pb-12">
        <div className="rounded-xl p-8 bg-[#D32F2F]">
            <h2 className="text-xl font-bold mb-6 text-[#FFD700]">⚡ Flash Sale</h2>
            <div className="grid grid-cols-4 gap-6">
                {featuredItems.map((item) => (
                <Link
                    key={item.id}
                    to={`/items/${item.id}`}
                    className="rounded-xl overflow-hidden transition-shadow no-underline bg-[#1E1E1E]"
                >
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                    <p className="text-sm font-medium mb-1 text-[#FFFFFF]">{item.name}</p>
                    <p className="text-sm font-bold text-[#D32F2F]">
                        {item.price.toLocaleString("vi-VN")}₫
                    </p>
                    </div>
                </Link>
                ))}
            </div>
            </div>
        </div>

        {/* Featured Items */}
        <div className="max-w-6xl mx-auto px-8 pb-16">
            <h2 className="text-xl font-bold mb-6 text-[#FFFFFF]">Sản phẩm nổi bật</h2>
            <div className="grid grid-cols-4 gap-6">
            {featuredItems.map((item) => (
                <Link
                    key={item.id}
                    to={`/items/${item.id}`}
                    className="rounded-xl overflow-hidden transition-shadow no-underline bg-[#1E1E1E] border border-[#2a2a2a]"
                >
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <p className="text-sm font-medium mb-1 text-[#FFFFFF]">{item.name}</p>
                        <p className="text-sm font-bold text-[#D32F2F]">
                        {item.price.toLocaleString("vi-VN")}₫
                        </p>
                    </div>
                </Link>
            ))}
            </div>
        </div>

    </div>
  )
}

export default Home