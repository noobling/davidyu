import { use, useEffect, useState } from "react";

export function useQuery(url: string) {
  const [data, setData] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);
  const query = () => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    query();
  }, []);

  return { data, loading };
}
