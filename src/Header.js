function Header (){
    const isUserLogged = false;
    return (
        <header>
        <h1>Super U ecommerce</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Products</li>

            {isUserLogged ? <li>Mohamed Bougrinat</li> : <li>Connectez-vous</li>}

          </ul>
        </nav>
      </header>

    );

}

export default (Header);