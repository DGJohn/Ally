
import { AdvanceDirectivesPage } from './../pages/advance-directives/advance-directives';
import { QuestionsPage } from "../pages/advance-directives/QuestionsModal/questions";
import { HCIService } from '../services/HCIService';

import { Diagnostic } from '@ionic-native/diagnostic';
import { AppVersion } from '@ionic-native/app-version';
import { ImpressumPage } from './../pages/impressum/impressum';
import { Globalization } from '@ionic-native/globalization';
import { NativeStorage } from '@ionic-native/native-storage';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MidataConnectionService } from '../services/MidataConnectionService';
import { InBrowserBrowser } from '../services/InBrowserBrowser';
import { ChartsModule } from 'ng2-charts';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { TabsPage } from '../pages/tabs/tabs';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { BloodPage } from '../pages/blood/blood';
import { PulseMeasurePage } from '../pages/blood/pulse-measure/pulse-measure';
import { PulseDailyDataPage } from '../pages/blood/pulseDailyData/pulseDailyData';
import { OverviewPage } from '../pages/overview/overview';
import { CommunityPage } from '../pages/community/community';
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
import { GamePage } from '../pages/game/game';
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

import { PinwallPage } from '../pages/pinwall/pinwall';
import { ArticleOnePage } from '../pages/pinwall/articleOne/articleOne';
import { ArticleTwoPage } from '../pages/pinwall/articleTwo/articleTwo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { createTranslateLoader } from '../util';
import { LanguageService } from "../services/languageService/languageService";
import { ParametersService } from '../services/parametersService/parametersService';
import { LoginPage } from '../pages/login/login';

import { SecureStorage } from "@ionic-native/secure-storage";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { Network } from "@ionic-native/network";
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ModalService } from '../services/ModalService';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BloodPage,
    PulseMeasurePage,
    PulseDailyDataPage,
    ImpressumPage,
    LoginPage,
    AdvanceDirectivesPage,
    QuestionsPage,
    ProfilePage,
    OverviewPage,
    CommunityPage,
    IntroductionPage,
    AllergyPage,
    DrugPage,
    FinishPage,
    HeightWeightPage,
    JobPage,
    ReminderTimePage,
    RewardPage,
    TakingDrugPage,
    NewEntryPage,
    DateTimePage,
    ComplaintsPage,
    PhysicalActivityPage,
    MedicationPage,
    TotalPointsPage,
    AdditionalRewardPage,
    TipsPage,
    PollenPage,
    GamePage,
    False1Page,
    False2Page,
    False3Page,
    False4Page,
    Question1Page,
    Question2Page,
    Question3Page,
    Question4Page,
    Right1Page,
    Right2Page,
    Right3Page,
    Right4Page,
    PinwallPage,
    ArticleOnePage,
    ArticleTwoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Zurück',
      monthShortNames: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez' ],
    }),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    ChartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BloodPage,
    PulseMeasurePage,
    PulseDailyDataPage,
    ImpressumPage,
    LoginPage,
    AdvanceDirectivesPage,
    QuestionsPage,
    ProfilePage,
    OverviewPage,
    CommunityPage,
    IntroductionPage,
    AllergyPage,
    DrugPage,
    FinishPage,
    HeightWeightPage,
    JobPage,
    ReminderTimePage,
    RewardPage,
    TakingDrugPage,
    NewEntryPage,
    DateTimePage,
    ComplaintsPage,
    PhysicalActivityPage,
    MedicationPage,
    TotalPointsPage,
    AdditionalRewardPage,
    TipsPage,
    PollenPage,
    GamePage,
    False1Page,
    False2Page,
    False3Page,
    False4Page,
    Question1Page,
    Question2Page,
    Question3Page,
    Question4Page,
    Right1Page,
    Right2Page,
    Right3Page,
    Right4Page,
    PinwallPage,
    ArticleOnePage,
    ArticleTwoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LanguageService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NativeStorage,
    Globalization,
    Diagnostic,
    AppVersion,
    ParametersService,
    SecureStorage,
    Network,
    InAppBrowser,
    InBrowserBrowser,
    MidataConnectionService,
    ModalService,
    Camera,
    BarcodeScanner,
    HCIService
  ]
})
export class AppModule { }
