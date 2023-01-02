import SearchBar from "./Components/SearchBar";
import { RecoilRoot } from "recoil";
import SearchResult from "./Components/SearchResult";
function App() {
  
  return (
    <RecoilRoot>
      <SearchBar />
      <SearchResult />
    </RecoilRoot>
  );
}

export default App;
