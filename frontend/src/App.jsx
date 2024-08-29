import ChallengeEntry from "./components/ChallengeEntry";
import Footer from "./components/Footer";
import Header from "./components/Header";

const challenge = {
  name: 'defeat the gay',
  category: 'web',
  description: 'seek and destory',
  points: 69,
  hints: ['bbb']
}

function App() {
  return (
    <div>
      <Header className='hooder'/>
<ChallengeEntry challenge={challenge} className="challenge"/>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
