import { useEffect, useState } from "react";
import type { villager } from "../types/villager";

interface SearchBarProps {
    value: string;
    setValue: (value: string) => void
    filteredVillagers: villager[];
    setSearchedVillagers: (villagers: villager[]) => void;
}

interface Suggestion {
    id: string;
    name: string;
}

export default function SearchBar({ 
    value, 
    setValue, 
    filteredVillagers, 
    setSearchedVillagers 
}: SearchBarProps) {

    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>([]);

    useEffect(() => {
        if(value.trim() === ""){
            setFilteredSuggestions([]);
            setShowDropdown(false);
        }
        else{
            setFilteredSuggestions(filteredVillagers.map((villager, index) => 
                ({ 
                    id: villager.id || `${villager.id}-${index}`, 
                    name: villager.name 
                })
            ));
            setShowDropdown((filteredVillagers.length > 0));
        
        }
    },[value, filteredVillagers]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const matched = filteredVillagers.filter(villager =>
            villager.name.toLowerCase().includes(value.toLowerCase())
        );
        setSearchedVillagers(matched.length > 0 ? matched : []);
        setShowDropdown(false);
    };

    return(
        <form onSubmit={handleSubmit} className="relative flex items-center px-4 md:px-6 lg:px-8 font-sdnrBold">
            <input
                id="search-bar"
                type="search"
                placeholder="궁금한 이웃을 검색해 보세요!🍃"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="search-bar w-full md:w-96 h-16 text-xl text-fontColor rounded-2xl bg-cream focus:outline-none placeholder-fontColor pl-4"
            />
            <button 
                className="ml-3 p-2 cursor-pointer absolute right-0"
                onClick={() => {
                    setShowDropdown(false);
                    setSearchedVillagers(filteredVillagers);
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
            {showDropdown && (
                <ul className="absolute left-0 top-full left-1/2 w-[90%] transform -translate-x-1/2 mt-1 z-50 rounded-xl bg-cream border border-gray-300 shadow-lg overflow-hidden bg-opacity-80">
                    {filteredSuggestions.map((suggestion) => (
                        <li
                            key={`${suggestion.id}`}
                            className="p-3 text-fontColor hover:text-gray-700 cursor-pointer transition-all"
                            onClick={() => {
                                setValue(suggestion.name);
                                setShowDropdown(false);
                                
                                const selectedSuggestion = filteredVillagers.filter((villager) =>
                                    villager.name.toLowerCase() === suggestion.name.toLowerCase()
                                );
                                
                                setSearchedVillagers(selectedSuggestion);
                            }}
                        >
                            {suggestion.name}
                        </li>                      
                    ))}
              </ul>
            )}
            
        </form>
    );
}