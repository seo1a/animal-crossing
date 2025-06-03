import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { villager } from "../types/villager"; // 경로 주의

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.nookipedia.com/villagers";

const fetchVillagers = async (): Promise<villager[]> => {
  const response = await axios.get(BASE_URL, {
    headers: {
      "X-API-KEY": API_KEY,
      "Accept-Version": "1.7.0",
    },
  });
  return response.data;
};

export const cachingVillagers = () => {
  return useQuery<villager[], Error>({
    queryKey: ["villagers"],
    queryFn: fetchVillagers,
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 60 * 6, // 6시간 캐시 유지
  });
};
