import { fetchData } from "./query";

(async () => {
  const res = await fetchData();
  console.log("res", res);
})();
