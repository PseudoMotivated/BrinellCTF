import ChallengeEntry from "./components/ChallengeEntry";
import Footer from "./components/Footer";
import Header from "./components/Header";

const challenge = {
  name: "bobobobg",
  category: "web",
  description: "seek and destory",
  points: 69,
  hints: ["bbb"],
};

function App() {
  return (
    <div>
      <Header className="hooder" />
      {<ChallengeEntry challenge={challenge} className="challenge" />}
      <Footer></Footer>
    </div>
  );
}

export default App;
