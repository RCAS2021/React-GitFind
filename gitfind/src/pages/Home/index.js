import { Header } from "../../components/Header";
import { ItemList } from "../../components/ItemList";
import background from "../../assets/96efc3f4acbbd24218025f242fae2c4f.png";
import "./styles.css";

function App() {
    return (
      <div className="App">
        <Header />
        <div className="conteudo">
          <img src={background} className="background" alt="background" />
          <div className="info">
            <div>
              <input name="usuario" placeholder="@username"></input>
              <button>Buscar</button>
            </div>
            <div className="perfil">
              <img src="https://avatars.githubusercontent.com/u/83601402?v=4" className="profile" alt="profile"></img>
              <div>
                <h3>Rafael Cruz</h3>
                <span>@RCAS2021</span>
                <p>Descrição</p>
              </div>
            </div>
            <hr />
            <div className="repositorio">
              <h4>Repositórios</h4>
              <ItemList title="Teste1" description="Teste Description" />
              <ItemList title="Teste1" description="Teste Description" />
              <ItemList title="Teste1" description="Teste Description" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
  