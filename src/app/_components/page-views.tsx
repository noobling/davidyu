"use client";
import { usePageViews } from "../hooks/usePageViews";

export default function PageViews({ slug }: { slug: string }) {
  const { views, loading } = usePageViews(slug);
  let viewsToShow = views.toString();
  if (loading || !views) {
    return null;
  }
  return <p className="text-lg mx-2 font-bold">({viewsToShow} views)</p>;
}
