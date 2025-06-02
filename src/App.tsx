import axios from "axios";
import type { villager } from "./types/villager";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.nookipedia.com//villagers";

async function fetchVillagers(): Promise<villager[]> {
  const response = await axios.get(BASE_URL, {
    headers: {
      "X-API-KEY": API_KEY,
      "Accept-Version": "1.7.0",
    }
  });

  return response.data;
}

export default function App () {
  const [villagers, setVillagers] = useState<villager[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);  // api 로딩 상태 알림
  const [selectedVillager, setSelectedVillager] = useState<villager | null>(null);
  const [value, setValue] = useState<string>("");
  const [filteredVillagers, setFilteredVillagers] = useState<villager[]>([]);
  const [searchedVillagers, setSearchedVillagers] = useState<villager[]>([]);

  useEffect(() => {
    fetchVillagers()
      .then((data) => {
        setVillagers(data);
        setIsLoading(false);
        setFilteredVillagers([...data]);
        setSearchedVillagers([...data]);
      })
      .catch((error) => {
        console.error("Error fetching villagers:", error);
        setIsLoading(false);
      })
  }, []);

  useEffect(() => {
    if (value.trim() === "") {
      if (villagers && villagers.length > 0) {
        setFilteredVillagers([...villagers]);
      }
    } else {
      if (villagers && villagers.length > 0) {
        const filtered = villagers.filter((villager) =>
          villager.name?.toLowerCase().includes(value.toLowerCase().replace(" ", ""))
        );
        setFilteredVillagers(filtered);
      }
    }
  }, [value, villagers]);

  if(isLoading) return <p className="flex justify-center item-center font-sdnrBold text-5xl text-fontColor">이웃들을 불러오고 있어요🍃</p>;

  return(
    <div className="bg-backgroundImg bg-center">
      <Header value={value} setValue={setValue} villagers={villagers} filteredVillagers={filteredVillagers} setSearchedVillagers={setSearchedVillagers} />
        <div className="flex min-h-screen justify-center w-full sm:px-12 py-5 md:py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 ">
            {searchedVillagers?.map((v) => (
              <Card 
                key={`${v.id}-${v.name}-${v.species}`}
                villager={v}
              />
            ))}
          </div>

         
        </div>
    </div>
  );
}


