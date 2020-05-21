import { useEffect, useState } from "react";

// Helper function to load either file or default data
// into a URL and ensure that it is revoked if needed
function useDataSource(data, defaultSources) {
  const [dataSource, setDataSource] = useState(null);
  useEffect(() => {
    if (!data) {
      setDataSource(null);
      return;
    }
    let url = null;
    if (data.type === "file") {
      url = URL.createObjectURL(new Blob([data.file]));
    } else if (data.type === "default") {
      url = defaultSources[data.key];
    }
    setDataSource(url);

    return () => {
      if (data.type === "file" && url) {
        URL.revokeObjectURL(url);
      }
    };
  }, [data, defaultSources]);

  return dataSource;
}

export default useDataSource;