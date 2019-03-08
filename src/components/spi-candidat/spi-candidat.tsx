import { Component } from "@stencil/core";

@Component({
  tag: "spi-candidat",
  styleUrl: "spi-candidat.scss"
})
export class candidat {
  render() {
    return (
      <div class="spi-candodat">
        <div class="container is-large has-text-centered">
          <h1 class="title is-bold">Bienvenue sur l'interface du eaeaeSPI !</h1>
          <h2 class="subtitle">Pour continuer veuillez-vous .</h2>
        </div>
      </div>
    );
  }
}
