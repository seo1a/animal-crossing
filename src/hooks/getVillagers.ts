import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { villager } from "../types/villager"; // 경로 주의

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.nookipedia.com/villagers";
const CACHE_KEY = "cached_villagers";

// localStorage에 데이터 저장
const setCachedVillagers = (data: villager[]): void => {
  localStorage.setItem(CACHE_KEY, JSON.stringify(data));
};

// localStorage에서 캐시된 데이터 가져오기
const getCachedVillagers = (): villager[] | null => {
  const cached = localStorage.getItem(CACHE_KEY);
  return cached ? JSON.parse(cached) : null;
};

const fetchVillagers = async (): Promise<villager[]> => {
  const cachedData = getCachedVillagers();
  if (cachedData) {
    return cachedData; // 캐시가 있으면 즉시 반환
  }

  const response = await axios.get(BASE_URL, {
    headers: {
      "X-API-KEY": API_KEY,
      "Accept-Version": "1.7.0",
    },
  });

  setCachedVillagers(response.data);
  return response.data;
};

export const useVillagers = () => {
  return useQuery<villager[], Error>({
    queryKey: ["villagers"],
    queryFn: fetchVillagers,
    staleTime: 21600000, // 6시간 (6 * 60 * 60 * 1000 ms)
    gcTime: 43200000, // 12시간 (12 * 60 * 60 * 1000 ms)
    initialData: getCachedVillagers() || undefined, // 초기 데이터로 캐시 사용
  });
};
