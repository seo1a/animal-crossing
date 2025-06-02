import type { villager } from "../types/villager";
import logoImg from "../assets/logoImg.png"
import SearchBar from "./SearchBar";

interface HeaderProps {
    value: string;
    setValue: (value: string) => void;
    villagers: villager[];
    filteredVillagers: villager[];
    setSearchedVillagers: (villagers: villager[]) => void;
}

export default function Header({ 
    value, 
    setValue, 
    villagers, 
    filteredVillagers, 
    setSearchedVillagers 
}: HeaderProps) {

    
    const handleLogoClick = () => {
        setValue("");  
        setSearchedVillagers(villagers);
    };
    
    return(
        <header>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="mb-10">
                    <img src={logoImg} alt="logo" className="w-[90%] lg:w-full h-auto lg:h-[22rem] cursor-pointer" onClick={handleLogoClick}/>
                </div>
                <div className="w-full sm:w-auto px-4 mb-12">
                    <div className="flex-grow">
                        <SearchBar value={value} setValue={setValue} filteredVillagers={filteredVillagers} setSearchedVillagers={setSearchedVillagers}/>
                    </div>
                </div>
            </div>
        </header>
    )
}