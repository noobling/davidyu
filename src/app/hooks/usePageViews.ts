import { API_URL, SITE_URL } from "@/lib/constants";
import { useQuery } from "./useQuery";
import { analyticsGetPage } from "../utils/analytics";
import { AnalyticsPageViewsResponse } from "@/interfaces/dto";

const URL = `${API_URL}/analytics/views`;
export function usePageViews(slug: string) {
  const { data, ...rest } = useQuery(`${URL}?page=${analyticsGetPage(slug)}`);
  const casted = data as AnalyticsPageViewsResponse;

  return { views: casted?.views ?? 0, ...rest };
}
