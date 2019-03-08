import { Component, Prop, State } from '@stencil/core';
import { MatchResults} from '@stencil/router';
import { Enseignant } from '../../global/enseignant';

@Component({
    tag: 'ens-supprimer',
    styleUrl: "spi-enseignant.scss"
})
export class EnsSuprimer {
    @Prop() match: MatchResults;
    @State() enseignants: Enseignant;

    deleteData(ens) {
        fetch("https://api-dosispi.cleverapps.io/enseignants", {
            method: "DELETE",
            body: JSON.stringify(ens),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json());
    }

    componentWillLoad() {
        let noEnseignant = this.match.params.noEnseignant;

        console.log(this.match.params);
        return fetch(
            "https://api-dosispi.cleverapps.io/enseignants/" + noEnseignant
        )
            .then(response => response.json())
            .then(data => {
                this.enseignants = data;
            });
    }

    render() {
        return (
            <div>

                <div class="columns is-mobile is-centered">

                    <article class="message is-success ">
                        <div class="message-header is-mobile is-centered">
                            <p>Success</p>
                        </div>
                        <div class="message-body">
                            L'Enseignant numéro  <strong>{this.match.params.noEnseignant}</strong>{this.deleteData(this.enseignants)} est suprimé.
                       </div>
                    </article>
                </div>
            </div>
        );
    }
}