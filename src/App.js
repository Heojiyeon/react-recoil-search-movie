import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import Modal from "./Components/Modal";
import SearchBar from "./Components/SearchBar";
import SearchResult from "./Components/SearchResult";
import { LoadingContainer } from "./style";

function App() {
  return (
    <RecoilRoot>
      <SearchBar />
      <Suspense fallback={<LoadingContainer>Loading...</LoadingContainer>}>
        <Modal />
        <SearchResult />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
