
import { AdvanceDirectivesPage } from './../pages/advance-directives/advance-directives';
import { ImpressumPage } from './../pages/impressum/impressum';
import { LanguageService } from './../services/languageService/languageService';
import { ParametersService } from './../services/parametersService/parametersService';
import { Component, ViewChild } from '@angular/core';
import { LoadingController, Nav, NavParams, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../pages/home/home';
import { BloodPage } from '../pages/blood/blood';
import { LoginPage } from "../pages/login/login";
import { ProfilePage } from "../pages/profile/profile";
import { MidataConnectionService } from "../services/MidataConnectionService";
import { Network } from "@ionic-native/network";

@Component({
  selector: 'page-app',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


  rootPage: any = LoginPage;

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
                this.nav.setRoot(LoginPage, undefined, undefined, () => {
                  loading.dismiss().catch();
                })
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
