import { Component } from "@stencil/core";
@Component({
  tag: "spi-header",
  styleUrl: "spi-header.scss"
})
export class SpiHeader {
  burger!: any;
  menu!: any;

  toggleBurger() {
    console.log("quizz!!");
    this.burger.classList.toggle("is-active");
    this.menu.classList.toggle("is-active");
  }

  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
      
      </a>
    </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <stencil-route-link url={"/candidat"}>
        <a class="navbar-link">
        Candidat
        </a>
        </stencil-route-link>
        <div class="navbar-dropdown">
          <stencil-route-link url={"/candidat/ajouter"}>
          <a class="navbar-item">
          <i class="fas fa-plus-circle"></i>
            Ajouter
          </a>
          </stencil-route-link>
          <stencil-route-link url={"/candidat/rechercher"}>
          <a class="navbar-item">
          <span class="icon">
        <i class="fas fa-search"></i>
       </span>
            Rechercher
          </a>
        </stencil-route-link>
      </div>
    </div>
    <div class="navbar-item has-dropdown is-hoverable">
      <stencil-route-link url={"/enseignant"}>
        <a class="navbar-link">
        Enseignant
        </a>
      </stencil-route-link>
        <div class="navbar-dropdown">
        <stencil-route-link url={"/enseignant/ajouter"}>
          <a class="navbar-item">
          <i class="fas fa-plus-circle"></i>
            Ajouter
          </a>
          </stencil-route-link>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <stencil-route-link url={"/formation"}>
        <a class="navbar-link">
        Formation
        </a>
        </stencil-route-link>
        <div class="navbar-dropdown">
        <stencil-route-link url={"/formation/ajouter"}>
          <a class="navbar-item">
          <i class="fas fa-plus-circle"></i>
            Ajouter
          </a>
          </stencil-route-link>
          <stencil-route-link url={"/formation/rechercher"}>
          <a class="navbar-item">
          <span class="icon">
        <i class="fas fa-search"></i>
       </span>
            Rechercher
          </a>
          </stencil-route-link>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <stencil-route-link url={"/promotion"}>
        <a class="navbar-link">
        Promotion
        </a>
        </stencil-route-link>
        <div class="navbar-dropdown">
        <stencil-route-link url={"/promotion/ajouter"}>
          <a class="navbar-item">
          <i class="fas fa-plus-circle"></i>
            Ajouter
          </a>
          </stencil-route-link>
          <stencil-route-link url={"/promotion/rechercher"}>
          <a class="navbar-item">
          <span class="icon">
        <i class="fas fa-search"></i>
       </span>
            Rechercher
          </a>
          </stencil-route-link>
        </div>
      </div>
    
  </div>
</nav>
    );
  }
}

