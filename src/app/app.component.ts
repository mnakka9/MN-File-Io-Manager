import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FileIoService } from './Services/file.io.service';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [FileIoService, HttpClient],
    imports: [HttpClientModule,
      NgxSpinnerModule,
      RouterOutlet,
      NavigationComponent,
      CommonModule,
      RouterLink,
    ]
})
export class AppComponent {
  title = 'MN File Io';
}
