import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';



function App() {
  return (
    <div className="App-header">
      <Header />
      <Home />
      <Footer/>

    </div>
  );
}

export default App;

/**
 * EXO : 

Créez un nouveau projet react
-- dans le dossier qui contient vos projets, utilisez "npx create-react-app nomDuProjet"
-- placez vous dans le dossier qui a été créé
-- démarrez le serveur react avec "npm start"
-- vérifiez que la page d'accueil de react s'affiche
-- ouvrez votre projet avec vs code

-- dans votre dossier src de react, créez un composant Header qui contient un titre et un (faux) menu 
-- appelez ce composant dans le composant App (et supprimez le contenu actuel de App), en l'encadrant dans une balise div
-- créez un composant Footer (contenant juste un texte), et appelez le dans le composant App
-- créez un composant Home qui contient (pour l'instant) juste un titre
-- appelez ce composant Home dans le composant App
-- créez un composant Products, qui affiche trois faux produits
-- appelez ce composant Products dans le composant Home
 */