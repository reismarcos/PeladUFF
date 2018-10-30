import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HistoricoPage } from '../pages/historico/historico';
import { PerfilPage } from '../pages/perfil/perfil';
import { CriarPeladaPage } from '../pages/criar-pelada/criar-pelada';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PeladaService } from './pelada.service';

export const firebaseConfig = {
  apiKey: "AIzaSyCotTr78ngNf15QqLGgvrh_MBhre5qQGB8",
  authDomain: "peladuff.firebaseapp.com",
  databaseURL: "https://peladuff.firebaseio.com",
  projectId: "peladuff",
  storageBucket: "peladuff.appspot.com",
  messagingSenderId: "103367465080"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    HistoricoPage,
    PerfilPage,
    CriarPeladaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    HistoricoPage,
    PerfilPage,
    CriarPeladaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PeladaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
