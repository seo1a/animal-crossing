import type { villager } from "../types/villager";
import logoImg from "../assets/logoImg.png"
import SearchBar from "./SearchBar";

interface HeaderProps {
    value: string;
    setValue: (value: string) => void;
    selectedSpecies: string;
    setSelectedSpecies: (species: string) => void;
    selectedPersonality: string;
    setSelectedPersonality: (personality: string) => void;
    selectedGender: string;
    setSelectedGender: (gender: string) => void;
    searchedVillagers: villager[];
}

export default function Header({ 
    value, 
    setValue, 
    selectedSpecies, 
    setSelectedSpecies,
    selectedPersonality,
    setSelectedPersonality,
    selectedGender,
    setSelectedGender,
    searchedVillagers
}: HeaderProps) {

    const handleLogoClick = () => {
        setValue("");  
        setSelectedSpecies(""); 
        setSelectedPersonality("");
        setSelectedGender("");
    };
    
    return(
        <header>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="mb-4 md:mb-10">
                    <img 
                        src={logoImg} 
                        alt="logo" 
                        className="mx-auto w-[70%] md:w-[50%] h-auto cursor-pointer" 
                        onClick={handleLogoClick}
                    />
                </div>
                <div className="flex flex-row px-4">
                    <select 
                        value={selectedSpecies}
                        onChange={(e) => setSelectedSpecies(e.target.value)}
                        className="w-[30%] md:w-[50%] h-12 md:h-14 text-lg md:text-xl text-fontColor rounded-2xl 
                        bg-cream focus:outline-none placeholder-fontColor font-sdnrBold 
                        pl-4 mb-4 md:mb-6 mx-2 md:mx-4"
                    >
                        <option value="">종</option>
                        <option value="Alligator">악어</option>
                        <option value="Anteater">개미핥기</option>
                        <option value="Bear">곰</option>
                        <option value="Bear cub">꼬마곰</option>
                        <option value="Bird">새</option>
                        <option value="Bull">소</option>
                        <option value="Cat">고양이</option>
                        <option value="Chicken">닭</option>
                        <option value="Cow">소</option>
                        <option value="Deer">사슴</option>
                        <option value="Dog">개</option>
                        <option value="Duck">오리</option>
                        <option value="Eagle">독수리</option>
                        <option value="Elephant">코끼리</option>
                        <option value="Frog">개구리</option>
                        <option value="Goat">염소</option>
                        <option value="Gorilla">고릴라</option>
                        <option value="Hamster">햄스터</option>
                        <option value="Hippo">하마</option>
                        <option value="Horse">말</option>
                        <option value="Koala">코알라</option>
                        <option value="Kangaroo">캥거루</option>
                        <option value="Lion">사자</option>
                        <option value="Monkey">원숭이</option>
                        <option value="Mouse">생쥐</option>
                        <option value="Octopus">문어</option>
                        <option value="Ostrich">타조</option>
                        <option value="Penguin">펭귄</option>
                        <option value="Pig">돼지</option>
                        <option value="Rabbit">토끼</option>
                        <option value="Rhinoceros">코뿔소</option>
                        <option value="Sheep">양</option>
                        <option value="Squirrel">다람쥐</option>
                        <option value="Tiger">호랑이</option>
                        <option value="Wolf">늑대</option>
                    </select>
                    <select 
                        value={selectedPersonality}
                        onChange={(e) => setSelectedPersonality(e.target.value)}
                        className="w-[30%] md:w-[50%] h-12 md:h-14 text-lg md:text-xl text-fontColor rounded-2xl 
                        bg-cream focus:outline-none placeholder-fontColor font-sdnrBold 
                        pl-4 mb-4 md:mb-6 mx-2 md:mx-4"
                    >
                        <option value="">성격</option>
                        <option value="Big sister">단순활발</option>
                        <option value="Cranky">무뚝뚝</option>
                        <option value="Jock">운동광</option>
                        <option value="Lazy">먹보</option>
                        <option value="Normal">친절함</option>
                        <option value="Peppy">아이돌</option>
                        <option value="Sisterly">단순활발</option>
                        <option value="Smug">느끼함</option>
                        <option value="Snooty">성숙함</option>
                    </select>
                    <select 
                        value={selectedGender}
                        onChange={(e) => setSelectedGender(e.target.value)}
                        className="w-[30%] md:w-[50%] h-12 md:h-14 text-lg md:text-xl text-fontColor rounded-2xl 
                        bg-cream focus:outline-none placeholder-fontColor font-sdnrBold 
                        pl-4 mb-4 md:mb-6 mx-2 md:mx-4"
                    >
                        <option value="">성별</option>
                        <option value="Male">수컷</option>
                        <option value="Female">암컷</option>
                    </select>
                </div>
                
                <div className="w-full sm:w-auto md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] px-4 mb-4 md:mb-12 ">
                    <div className="flex-grow">
                        <SearchBar value={value} setValue={setValue} searchedVillagers={searchedVillagers} />
                    </div>
                </div>
            </div>
        </header>
    )
}