import { Component } from "@stencil/core";
import {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        <spi-header />

        <main class="container">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/formation" component="spi-formation" exact={true} />
              <stencil-route url="/candidat" component="spi-candidat" exact={true} />
              <stencil-route url="/enseignant" component="spi-enseignant" exact={true} />
              <stencil-route url='/enseignant/supprimer/:noEnseignant' component='ens-supprimer' exact={true} />
              <stencil-route url='/enseignant/rechercher/:nom' component='ens-rechercher' />
              <stencil-route url='/enseignant/detail/:noEnseignant' component='ens-detail' exact={true} />
              <stencil-route url='/enseignant/ajouter' component='ens-ajouter' exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
