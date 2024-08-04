import { API_URL, SITE_URL } from "@/lib/constants";
import { useMutate } from "./useMutate";
import { analyticsGetPage } from "../utils/analytics";

const URL = `${API_URL}/analytics/view`;
export function useAnalyticsView() {
  const { mutate, ...rest } = useMutate(URL);

  const myMutate = (slug: string) => {
    return mutate({ page: analyticsGetPage(slug) });
  };

  return { mutate: myMutate, ...rest };
}
