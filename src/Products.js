function Products (){
    const productsFromDb =["Iphone 15 pro","TV Sony 6K FULL","Playstation 5 with Rom"]
    return(  
        <main>
      {productsFromDb.map((product) => {
        return (
          <article>
            <h2>{product}</h2>
          </article>
        );
      })}
    </main>
        
    );

}

export default Products;

/**
 * EXO :

Dans le composant Products, créez un tableau contenant une liste de produits (avant le return)
Dans le JSX du composant Products, faites une boucle sur ce tableau (avec map) pour afficher chaque produit du tableau
 */


/**
 * <div>
        <article>
          <h2>iphone 15 pro</h2>
          <p>300 €</p>
        </article>
  
        <article>
          <h2>TV Sony 6K full </h2>
          <p>200 €</p>
        </article>
  
        <article>
          <h2>Playstation 5 with rom</h2>
          <img src=""></img>
          <p>350 $</p>
        </article>
      </div>
 */