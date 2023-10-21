import PoemList from '../components/PoemList/PoemList';
import '../styles/global.scss'

function Home() {
  return (
    <div className="content-container">
      <h1>Listado de Poemas</h1>
      <PoemList />
    </div>
  );
}

export default Home;
