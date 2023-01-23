import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import MovieDetail from "./Components/MovieDetail";
import SearchBar from "./Components/SearchBar";
import SearchResult from "./Components/SearchResult";
import { LoadingContainer } from "./style";

function App() {
  return (
    <RecoilRoot>
      <SearchBar />
      <Suspense fallback={<LoadingContainer>Loading...</LoadingContainer>}>
        <MovieDetail />
        <SearchResult />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
