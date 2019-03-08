import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
    tag: 'ens-detail',
    styleUrl: "spi-enseignant.scss"
})
export class EnsDetail {
    @Prop() match: MatchResults;
    @State() enseignant: any = [];

    componentWillLoad() {
        fetch(`http://api-dosispi.cleverapps.io/enseignants/` + this.match.params.noEnseignant)
            .then(res => res.json())
            .then(data => { this.enseignant = data })
    }

    render() {
        return (
            <div class="columns is-mobile is-centered">
                <table class="table is-striped is-bordered">
                    <thead>
                        <tr>
                            <th> NO </th>
                            <th> Nom </th>
                            <th> Prenom </th>
                            <th> Adresse </th>
                            <th> H/F </th>
                            <th> Email UBO </th>
                            <th> Email Personnel </th>
                            <th> Num mobile </th>
                            <th> Num Fix </th>
                            <th> Code Postal </th>
                            <th> Ville </th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>{this.enseignant.noEnseignant}</td>
                            <td>{this.enseignant.nom}</td>
                            <td>{this.enseignant.prenom}</td>
                            <td>{this.enseignant.adresse}</td>
                            <td>{this.enseignant.sexe}</td>
                            <td>{this.enseignant.emailUbo}</td>
                            <td>{this.enseignant.emailPerso}</td>
                            <td>{this.enseignant.mobile}</td>
                            <td>{this.enseignant.telephone}</td>
                            <td>{this.enseignant.codePostal}</td>
                            <td>{this.enseignant.ville}</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        );
    }
}