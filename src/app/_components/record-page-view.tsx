"use client";

import { useEffect } from "react";
import { useAnalyticsView } from "../hooks/useAnalyticsView";

export default function RecordPageView({ slug }: { slug: string }) {
  const { mutate: recordView } = useAnalyticsView();
  useEffect(() => {
    recordView(slug);
  }, []);
  return <></>;
}
