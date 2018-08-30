import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CiderComponent } from './components/cider/cider.component';
import { CiderListComponent } from './components/cider/cider-list/cider-list.component';
import { CiderDetailsComponent } from './components/cider/cider-details/cider-details.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { JukeboxComponent } from './components/jukebox/jukebox.component'
import { MenuComponent } from './components/menu/menu.component';
import { MenuListComponent } from './components/menu/menu-list/menu-list.component';
import { MenuDetailsComponent } from './components/menu/menu-details/menu-details.component';
import { AdminComponent } from './components/admin/admin.component';
import { PublishCommentComponent } from './components/admin/admin-comments/publish-comment/publish-comment.component';
import { AuthService } from './services/auth.service';
import { AdminGuard } from './guards/admin.guard';
import { GameComponent } from './components/game/game.component';
import { CommentsCarouselComponent } from './components/comments-carousel/comments-carousel.component';
import { UserListComponent } from './components/admin/admin-users/user-list/user-list.component';
import { UserDetailsComponent } from './components/admin/admin-users/user-details/user-details.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { AdminCidersComponent } from './components/admin/admin-ciders/admin-ciders.component';
import { AdminCommentsComponent } from './components/admin/admin-comments/admin-comments.component';
import { AdminMerchComponent } from './components/admin/admin-merch/admin-merch.component';
import { AdminMenuComponent } from './components/admin/admin-menu/admin-menu.component';
import { AdminCidersListComponent } from './components/admin/admin-ciders/admin-ciders-list/admin-ciders-list.component';
import { AdminCidersDetailsComponent } from './components/admin/admin-ciders/admin-ciders-details/admin-ciders-details.component';
import { AdminCidersCreateComponent } from './components/admin/admin-ciders/admin-ciders-create/admin-ciders-create.component';
import { AdminMenuCreateComponent } from './components/admin/admin-menu/admin-menu-create/admin-menu-create.component';
import { AdminMenuDetailsComponent } from './components/admin/admin-menu/admin-menu-details/admin-menu-details.component';
import { AdminMenuListComponent } from './components/admin/admin-menu/admin-menu-list/admin-menu-list.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  projectId: masterFirebaseConfig.projectId,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    SubscribeFormComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CiderComponent,
    CiderListComponent,
    CiderDetailsComponent,
    JukeboxComponent,
    MenuComponent,
    MenuListComponent,
    MenuDetailsComponent,
    AdminComponent,
    PublishCommentComponent,
    GameComponent,
    CommentsCarouselComponent,
    UserListComponent,
    UserDetailsComponent,
    AdminUsersComponent,
    AdminCidersComponent,
    AdminCommentsComponent,
    AdminMerchComponent,
    AdminMenuComponent,
    AdminCidersListComponent,
    AdminCidersDetailsComponent,
    AdminCidersCreateComponent,
    AdminMenuCreateComponent,
    AdminMenuDetailsComponent,
    AdminMenuListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    Angular2FontawesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule
  ],
  providers: [AuthService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
