import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize(import.meta.env.VITE_GA_ID);
};

export const trackPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/villagers",
  });
};

export const trackSearch = (keyword: string, resultCount: number) => {
  ReactGA.event("search", {
    search_term: keyword,
    result_count: resultCount,
  });
};

export const trackFilterChange = (
  species: string,
  personality: string,
  gender: string
) => {
  ReactGA.event("filter_change", {
    species: species || "all",
    personality: personality || "all",
    gender: gender || "all",
  });
};

export const trackVillagerSelect = (villager: any) => {
  ReactGA.event("villager_select", {
    villager_id: villager.id,
    villager_name: villager.name,
    species: villager.species,
    personality: villager.personality,
    gender: villager.gender,
  });
};
