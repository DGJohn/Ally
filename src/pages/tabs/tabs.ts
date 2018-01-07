import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PinwallPage} from '../pinwall/pinwall';
import { SettingsPage} from '../settings/settings';
import { UserPage} from '../user/user';
// import { ProfilePage} from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PinwallPage;
  tab3Root = UserPage;
  tab4Root = SettingsPage;
  //tab3Root = ProfilePage;


  constructor() {

  }
}
