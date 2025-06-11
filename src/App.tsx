import type { villager } from "./types/villager";
import { useVillagers } from "./hooks/getVillagers";
import { useState, useMemo } from "react";
import background from "./assets/background.png"
import loading from "./assets/loading3.png"
import Header from "./components/Header";
import Card from "./components/Card";

export default function App () {
  const { data: villagers = [], isLoading, isError } = useVillagers();
  const [value, setValue] = useState<string>("");
  const [selectedSpecies, setSelectedSpecies] = useState<string>("");
  const [selectedPersonality, setSelectedPersonality] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");

  const searchedVillagers = useMemo<villager[]>(() => {
    return villagers.filter((v) => {
      const matchedName = v.name?.toLowerCase().includes(value.toLowerCase().trim());
      const matchedSpecies = selectedSpecies === "" || v.species === selectedSpecies;
      const matchedPersonality = selectedPersonality === "" || v.personality === selectedPersonality;
      const matchedGender = selectedGender === "" || v.gender === selectedGender;
      return matchedName && matchedSpecies && matchedPersonality && matchedGender;
    })
  }, [villagers, value, selectedSpecies, selectedPersonality, selectedGender])

  if(isLoading) {
    return (
      <div
        className="bg-cover bg-center min-h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${background})` }}
      > 
      <p className="font-sdnrBold text-lg md:text-5xl text-fontColor">
        이웃들을 불러오고 있어요
      </p>
      <img
        src={loading}
        alt="로딩 중"
        className="w-24 h-24 animate-pulse"
      />
    </div>
    );
  }

  if (isError) {
    return (
      <div
        className="bg-cover bg-center min-h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <p className="flex justify-center items-center font-sdnrBold text-2xl md:text-5xl text-fontColor">
          이웃들을 불러오지 못했어요😢
        </p>
      </div>
    );
  }

  return(
    <div className="bg-backgroundImg bg-center">
      <Header 
        value={value} 
        setValue={setValue} 
        selectedSpecies={selectedSpecies}
        setSelectedSpecies={setSelectedSpecies}
        selectedPersonality={selectedPersonality}
        setSelectedPersonality={setSelectedPersonality}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        searchedVillagers={searchedVillagers}
      />      
          <div className="
            grid 
            grid-cols-3 
            sm:grid-cols-5
            sm:gap-3 
            p-2 
            sm:p-4 
            md:p-6 
            lg:p-8
            max-w-screen-xl 
            mx-2
            md:mx-auto 
            justify-items-center
          ">
            {searchedVillagers?.map((villager) => (
              <Card 
                key={`${villager.id}-${villager.name}-${villager.species}`}
                villager={villager}
              />
            ))}
          </div> 
    </div>
  );
}


