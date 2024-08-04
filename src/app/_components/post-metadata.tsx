import DateFormatter from "./date-formatter";
import PageViews from "./page-views";

export function PostMetadata({ date, slug }: { date: string; slug: string }) {
  return (
    <div className="text-lg flex">
      <DateFormatter dateString={date} />
      <PageViews slug={slug} />
    </div>
  );
}
