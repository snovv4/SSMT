import { Search } from 'lucide-react'

function Searchbar() {
    return (
        <div className="w-96 flex items-center border border-gray-300 rounded-md overflow-hidden">
            <input type="text" placeholder="Search for items..." className="w-full px-3 py-1.5 outline-none text-sm" />
            <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-1.5 px-4 transition-colors">
                <Search size={20} strokeWidth={2}/>
                Search
            </button>
        </div>
    );
}

export default Searchbar;