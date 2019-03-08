import { Component, State } from "@stencil/core";
import { Enseignant } from "../../global/enseignant";
@Component({
  tag: "spi-enseignant",
  styleUrl: "spi-enseignant.scss"
})
export class SpiEnseignant {

  @State() enseignants: Enseignant[] = [];
  @State() nom: String;

  componentWillLoad() {
    fetch(`http://api-dosispi.cleverapps.io/enseignants`)
      .then(res => res.json())
      .then(data => { this.enseignants = data })
  }

  render() {
    return (
      <div>
        <div class="control">
          <input class="input is-info is-rounded" type="text"  placeholder="Rechercher par nom" onInput={(e: any) => (this.nom = e.target.value)} />
        </div>
        <div class="control">
        <stencil-route-link url={'/enseignant/rechercher/'+this.nom}>
          <button class="button is-info is-rounded is-focused is-tooltip-info  tooltip"  data-tooltip="Rechercher par email">  <i class="fas fa-search"></i> Recherche</button>
        </stencil-route-link>
        </div>        {
          this.enseignants.map((ens) =>
            <div class="pricing-table">
              <div class="pricing-plan">
                <div class="plan-header">


                  <div class="field is-grouped is-pulled-right ">
                    <p class="control">
                      <stencil-route-link url={'/enseignant/detail/' + ens.noEnseignant}>
                        <button class="button is-info is-rounded is-focused is-tooltip-info tooltip" data-tooltip="Plus d'infos"> <i class="fas fa-info-circle"></i> </button>
                      </stencil-route-link>
                    </p>
                    <p class="control">
                      <stencil-route-link url={'/enseignant/supprimer/' + ens.noEnseignant}>
                        <button class="button is-danger is-rounded is-focused is-tooltip-danger tooltip" data-tooltip="Supprimer Enseignant">   <i class="fas fa-trash-alt"></i> </button>
                      </stencil-route-link>
                    </p>
                  </div>
                </div>
                <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency"> </span>{ens.nom} {ens.prenom}</span></div>
                <div class="plan-items">
                  <div class="plan-item">{ens.emailUbo}</div>
                  <div class="plan-item">{ens.mobile}</div>
                  <div class="plan-item">{ens.pays}</div>
                  <div class="plan-item">{ens.ville}</div>
                </div>

              </div>
            </div>
          )};
      </div>
    )
  }
} 