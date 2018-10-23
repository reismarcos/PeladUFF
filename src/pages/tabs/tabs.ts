import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { HistoricoPage } from '../historico/historico';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PerfilPage;
  tab3Root = HistoricoPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
