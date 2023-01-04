import SearchBar from "./Components/SearchBar";
import { RecoilRoot } from "recoil";
import SearchResult from "./Components/SearchResult";
import { Suspense } from "react";
import MovieDetail from "./Components/MovieDetail";
function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBar />
        <MovieDetail />
        <SearchResult />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
