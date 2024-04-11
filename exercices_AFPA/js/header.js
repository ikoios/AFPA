const header = document.getElementById("header")

header.innerHTML =

`
<section class="navbar">
    <div class="logo">
        <img src="./image/logo.png" alt="logo solid health">
    </div>
    <div class="categorie">
        <ul>
            <li>
                <a href="#">Nouveauté</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="#">Homme</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="#">Femme</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="#">Préstations</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="#">Offres</a>
            </li>
        </ul>
    </div>
    <div class="search">
        <label for="seach">
            <input type="search" id="search" name="search" placeholder="Recherche">
        </label>
    </div>
    <div class="button">
        <div class="kart">
            <button>
                <img src="./image/MainCart.png" alt="">
            </button>
        </div>
        <div class="home">
            <button>
                <img src="./image/MainHome.png" alt="">
            </button>
        </div>
        <div class="user">
            <button>
                <img src="./image/MainUser.png" alt="">
            </button>
        </div>
    </div>
    
</section>
`