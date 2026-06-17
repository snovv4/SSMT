import { Search } from 'lucide-react'

function Searchbar() {
    return (
        <div className="w-96 flex items-center border border-[#D32F2F] rounded-md overflow-hidden">
            <input type="text" placeholder="Search for items..." className="w-full px-3 py-1.5 outline-none text-sm text-[#FFFFFF] bg-[#121212]" />
            <button className="flex items-center gap-2 bg-transparent hover:bg-[#D32F2F] text-[#FFFFFF] font-medium py-1.5 px-4 transition-colors">
                <Search size={20} strokeWidth={2}/>
                Search
            </button>
        </div>
    );
}

export default Searchbar;