import { SITE_URL } from "@/lib/constants";

export function analyticsGetPage(slug: string) {
  return `${SITE_URL}/${slug}`;
}
