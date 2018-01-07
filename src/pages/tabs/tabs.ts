import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PinwallPage} from '../pinwall/pinwall';
import { ImpressumPage} from '../impressum/impressum';
import { UserPage} from '../user/user';
// import { ProfilePage} from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PinwallPage;
  tab3Root = UserPage;
  tab4Root = ImpressumPage;
  //tab3Root = ProfilePage;
  

  constructor() {

  }
}
