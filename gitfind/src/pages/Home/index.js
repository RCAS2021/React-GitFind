import { useState } from "react";
import { Header } from "../../components/Header";
import { ItemList } from "../../components/ItemList";
import background from "../../assets/96efc3f4acbbd24218025f242fae2c4f.png";
import "./styles.css";

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repositorios, setRepositorios] = useState(null);

  async function handleGetData() {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser?.name){
      const { avatar_url, name, login, bio} = newUser;
      setCurrentUser( {avatar_url, name, login, bio} )

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepositorios(newRepos);
      }
    }
  }

    return (
      <div className="App">
        <Header />
        <div className="conteudo">
          <img src={background} className="background" alt="background" />
          <div className="info">
            <div>
              <input name="usuario" placeholder="@username" value={user} onChange={event => setUser(event.target.value)}></input>
              <button onClick={handleGetData}>Buscar</button>
            </div>
            {currentUser?.name ? 
            <>            
            <div className="perfil">
              <img src={currentUser.avatar_url} className="profile" alt="profile"></img>
              <div>
                <h3>{currentUser.name}</h3>
                <span>{"@"+currentUser.login}</span>
                <p>{currentUser.bio}</p>
              </div>
            </div>
            <hr />
            </>
            : null}
            {repositorios?.length ? 
            <div className="repositorio">
              <h4>Repositórios</h4>
              <div className="repositorio-list">
                {repositorios.map((repositorio) => <ItemList title={repositorio.name} description={repositorio.description} />)}
              </div>
            </div> : null}
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
  