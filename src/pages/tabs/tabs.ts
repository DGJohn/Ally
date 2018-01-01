import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PinwallPage} from '../pinwall/pinwall';
import { ImpressumPage} from '../impressum/impressum';
import { ProfilePage} from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PinwallPage;
  tab3Root = ProfilePage;
  tab4Root = ImpressumPage;

  constructor() {

  }
}
