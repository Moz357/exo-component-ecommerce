function Products() {
    
    const productsFromDb = [
      {
        title: "Iphone 15 pro",
        price: 990,
        isPublished: true,
      },
      {
        title: "TV Sony 6K Full",
        price: 1599,
        isPublished: false,
      },
      {
        title: "Playstation 5 with Rom",
        price: 479,
        isPublished: true,
      },
      
    ];
  
    return(
      <main>

          {productsFromDb.map((product) => {
              return(
                  <>
                      {product.isPublished ? 
                      (
                      <article>
                          <h2>{product.title}</h2>
                          <p>{product.price}</p>
                      </article>
                      ):(
                        <>
                          <h2>{product.title}</h2>
                          <p> Pas disponible </p>
                        </>
                      )}
                      
                  </>
              
          )})}
      </main>

  )
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
          <h2>Iphone 15 pro</h2>
          <p>300 €</p>
        </article>
  
        <article>
          <h2>TV Sony 6K Full </h2>
          <p>200 €</p>
        </article>
  
        <article>
          <h2>Playstation 5 with Rom</h2>
          <img src=""></img>
          <p>350 $</p>
        </article>
      </div>
 */

/**
 * 
EXO : 
Dans votre composant Products, remplacez le tableau de titre produits avec un tableau contenant des objets (avec titre, prix et isPublished)
Modifier votre rendu JSX du composant pour que la boucle fonctionne avec votre nouveau tableau
 */