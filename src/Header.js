function Header() {
    const userLogged = {
        lastname : "BOUGRINAT",
        firstname : "Mohamed",
        job : "Web Dev",

    }
    
    const isUserLogged = true;
    const itemsInCart = 10;
  
    return (
      <header>
        <h1>Super ecommerce</h1>
        <nav>
          <ul>
          {isUserLogged ? (
            <li>
              {userLogged.firstname} {userLogged.lastname} - {userLogged.job}
            </li>
          ) : (
            <li>Connectez-vous</li>
          )}
          
          
  
            <li>Home</li>
            <li>Products</li>
  
            {itemsInCart > 0 ? <li>Cart : {itemsInCart}</li> : <li>Pas d'item au panier</li>}
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;

  /**
   * EXO : 

Dans le componsant Header, créez une variable qui contient un boolean pour savoir si l'user est connecté ou non
Dans le JSX du composant, affichez votre nom dans la nav si l'user est connecté, sinon affichez un bouton de connection
   */

  /**
   * EXO : 
Créez une variable qui contient un integer pour le nombre d'items au panier
Dans le menu, affichez le nombre d'items au panier uniquement s'il est supérieur à 0
Sinon affichez "pas d'items au panier"
   */

  /*
  *EXO  : 

Dans le composant Header, créez un object qui contient votre nom, prénom et job
Dans le menu du Header en JSX, affichez votre prénom et votre nom (uniquement si la variable de connection est true)
 */

