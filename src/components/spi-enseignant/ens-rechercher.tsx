import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Enseignant } from '../../global/enseignant';

@Component({
    tag: 'ens-rechercher',
    styleUrl: "spi-enseignant.scss"
})
export class EnsRechercher {
    @Prop() match: MatchResults;
    @State() enseignant: Enseignant[];
    
    componentWillLoad() {
        return fetch("https://api-dosispi.cleverapps.io/enseignants/nom/"+this.match.params.nom)
          .then(response => response.json())
          .then(data => {
            this.enseignant = data;});
    }
     
    render() {
        return (
            <div><br><br></br></br><br><br></br></br><br><br></br></br>{
                this.enseignant.map((ens) =>
                  <div class="pricing-table">
                    <div class="pricing-plan">
                      <div class="plan-header">
                      </div>
                      
                      <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency"> </span>{ens.nom} {ens.prenom}</span></div>
                      <div class="plan-items">
                        <div class="plan-item">{ens.emailUbo}</div>
                        <div class="plan-item">{ens.mobile}</div>
                        <div class="plan-item">{ens.pays}</div>
                        <div class="plan-item">{ens.ville}</div>
                      </div>
      
                    </div>
                </div>)}</div>
       )
        
}}