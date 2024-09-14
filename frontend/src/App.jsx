import ChallengeEntry from "./components/ChallengeEntry";
import Footer from "./components/Footer";
import Header from "./components/Header";

const challenge = {
  name: 'defeat the goblin',
  category: 'web',
  description: 'seek and destory',
  points: 69,
  hints: ['bbb']
}

function App() {
  return (
    <div>
      <Header />
      <ChallengeEntry challenge={challenge} className="challenge" />
      <Footer />
    </div>
  );
}

export default App;
