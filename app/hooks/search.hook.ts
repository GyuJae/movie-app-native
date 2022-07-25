import { useQuery } from "@tanstack/react-query";
import { SearchService } from "services/api/search/search.service";
import { ISearchKeywordResult } from "services/api/search/search.type";

const services = new SearchService()

export const useSearchKeyword = (query: string) => {
  return useQuery<ISearchKeywordResult, Error>(['search', 'keyword', query], () => services.getSearchKeyword(query), {
    enabled: !!query,
  })
}