import { Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
 {path: "upload", component: UploadComponent},
 {path: "", component: HomeComponent},
 {path: "about", component: AboutComponent}
];
