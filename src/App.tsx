import type { villager } from "./types/villager";
import { cachingVillagers } from "./hooks/getVillagers";
import { useState, useMemo } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

export default function App () {
  const { data: villagers = [], isLoading, isError } = cachingVillagers();
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
      <p className="flex justify-center item-center font-sdnrBold text-5xl text-fontColor">
        이웃들을 불러오고 있어요🍃
      </p>
    );
  }

  if (isError) {
    return (
      <p className="flex justify-center items-center font-sdnrBold text-5xl text-fontColor">
        이웃들을 불러오지 못했어요😢
      </p>
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
        <div className="flex min-h-screen justify-center w-full sm:px-12 py-5 md:py-8">
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {searchedVillagers?.map((villager) => (
              <Card 
                key={`${villager.id}-${villager.name}-${villager.species}`}
                villager={villager}
              />
            ))}
          </div>

        </div>
    </div>
  );
}


