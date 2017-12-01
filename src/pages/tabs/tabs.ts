import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { BloodPage} from '../blood/blood';
import { ImpressumPage} from '../impressum/impressum';
import { ProfilePage} from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BloodPage;
  tab3Root = ProfilePage;
  tab4Root = ImpressumPage;

  constructor() {

  }
}
