
import { AdvanceDirectivesPage } from './../pages/advance-directives/advance-directives';
import { ImpressumPage } from './../pages/impressum/impressum';
import { LanguageService } from './../services/languageService/languageService';
import { ParametersService } from './../services/parametersService/parametersService';
import { Component, ViewChild } from '@angular/core';
import { LoadingController, Nav, NavParams, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { HCIService } from '../services/HCIService';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { BloodPage } from '../pages/blood/blood';
import { LoginPage } from "../pages/login/login";
import { ProfilePage } from "../pages/profile/profile";
import { IntroductionPage } from '../pages/introduction/introduction';
import { AllergyPage } from '../pages/introduction/allergy/allergy';
import { DrugPage } from '../pages/introduction/drug/drug';
import { FinishPage } from '../pages/introduction/finish/finish';
import { HeightWeightPage } from '../pages/introduction/heightweight/heightweight';
import { JobPage } from '../pages/introduction/job/job';
import { ReminderTimePage } from '../pages/introduction/remindertime/remindertime';
import { RewardPage } from '../pages/introduction/reward/reward';
import { TakingDrugPage } from '../pages/introduction/takingdrug/takingdrug';
import { NewEntryPage } from '../pages/newEntry/newEntry';
import { DateTimePage } from '../pages/newEntry/dateTime/dateTime';
import { ComplaintsPage } from '../pages/newEntry/complaints/complaints';
import { PhysicalActivityPage } from '../pages/newEntry/physicalActivity/physicalActivity';
import { MedicationPage } from '../pages/newEntry/medication/medication';
import { TotalPointsPage } from '../pages/newEntry/totalPoints/totalPoints';
import { AdditionalRewardPage } from '../pages/newEntry/additionalReward/additionalReward';
import { TipsPage } from '../pages/newEntry/tips/tips';
import { PollenPage } from '../pages/pollen/pollen';
import { MidataConnectionService } from "../services/MidataConnectionService";
import { Network } from "@ionic-native/network";

import { False1Page } from '../pages/game/false1/false1';
import { False2Page } from '../pages/game/false2/false2';
import { False3Page } from '../pages/game/false3/false3';
import { False4Page } from '../pages/game/false4/false4';

import { Right1Page } from '../pages/game/right1/right1';
import { Right2Page } from '../pages/game/right2/right2';
import { Right3Page } from '../pages/game/right3/right3';
import { Right4Page } from '../pages/game/right4/right4';

import { Question1Page } from '../pages/game/question1/question1';
import { Question2Page } from '../pages/game/question2/question2';
import { Question3Page } from '../pages/game/question3/question3';
import { Question4Page } from '../pages/game/question4/question4';

import { GamePage } from '../pages/game/game';
import { UserPage } from '../pages/user/user';

import { PinwallPage } from '../pages/pinwall/pinwall';
import { ArticleOnePage } from '../pages/pinwall/articleOne/articleOne';
import { ArticleTwoPage } from '../pages/pinwall/articleTwo/articleTwo';

@Component({
  selector: 'page-app',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


  rootPage: any = TabsPage;

  pages: Array<{ title: string, component: any, icon: string }>;

  profilePage: any = [];

  constructor(public platform: Platform,
    public modalCtrl: ModalController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private midataConnectionService: MidataConnectionService,
    private network: Network,
    private loadingCtrl: LoadingController,
    private languageService: LanguageService,
    private parametersService: ParametersService,
    private translate: TranslateService) {

    this.translate.stream(['BLOOD.TITLE', 'IMPRESSUM.TITLE']).subscribe(value => {
      this.pages = [
        { title: 'Home', component: HomePage, icon: 'home' },
        { title: value['BLOOD.TITLE'], component: BloodPage, icon: 'pulse' },
        { title: 'Advance Directives', component: AdvanceDirectivesPage, icon: 'paper' },
        { title: 'Profile', component: ProfilePage, icon: 'person' },
        { title: 'Logout', component: LoginPage, icon: 'finger-print' },
        { title: value['IMPRESSUM.TITLE'], component: ImpressumPage, icon: 'apps' },
        { title: 'Tabs', component: TabsPage, icon: 'apps'}
      ];
    });
    this.initializeApp();
  }

  initializeApp() {

    let loading = this.loadingCtrl.create({
      content: 'Please wait'
    });

    this.translate.get("COMMON.PLEASEWAIT").subscribe(value => {
      loading.setContent(value);
    });

    this.platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.parametersService.init().then(() => {
        this.languageService.init();

        loading.present().catch();

        this.network.onConnect().subscribe(() => {
          // TODO: If client was already successfully authenticated, push corresponding site (or HomePage)
          this.midataConnectionService.setConnectionState(true);
        });

        this.network.onDisconnect().subscribe(() => {
          this.midataConnectionService.setConnectionState(false);
        });

        this.platform.pause.subscribe(() => {
          this.midataConnectionService.syncSecureStorage()
            .catch((error) => {
              console.log(error);
            })
        });

        this.platform.resume.subscribe(() => {
          if (this.midataConnectionService.getConnectionState() && this.midataConnectionService.getAutoLogin()) {
            this.midataConnectionService.refresh()
              .catch(() => {
                console.log("NOT AUTHENTICATED ANYMORE! REDIRECTING BACK TO LOGIN PAGE");
                //this.nav.setRoot(LoginPage, undefined, undefined, () => {
                  //loading.dismiss().catch();
                //})
              });
          } else {
            console.log("NO INTERNET CONNECTION, NO REFRESH ON RESUME");
          }
        });
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }).then(() => {
        this.saveLogin().then(() => {
          loading.dismiss().catch();
        }).catch(() => {
          loading.dismiss().catch();
        });
      });
    }).catch(()=>{
      // TODO: display a standard message box to the user
      console.log("No parameter Service available");
    })
  }

  saveLogin(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.midataConnectionService.getConnectionState()) {
        this.midataConnectionService.getConnection().fetchFHIRConformanceStatement()
          .then(() => {
            return this.midataConnectionService.refresh()
          })
          .then(() => {
            this.nav.setRoot(HomePage, undefined, undefined, () => {
              console.log("SUCCESS, LOGGING IN...");
            });
          })
          .then(() => {
            resolve();
          })
          .catch(() => {
            reject();
          })
      } else {
        reject();
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openModal(page) {
    const nModal = this.modalCtrl.create(page, {});
    nModal.present();
  }

}
