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
  // 캐시된 데이터 확인
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
    staleTime: Infinity, // 데이터가 절대 만료되지 않도록 설정
    gcTime: Infinity, // 캐시가 GC에 의해 제거되지 않도록 설정
    initialData: getCachedVillagers() || undefined, // 초기 데이터로 캐시 사용
  });
};
