import { Component } from '@angular/core';
import { FileIoService } from '../Services/file.io.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [FormsModule, CommonModule, NgxSpinnerModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  files!: FileList;
  token: string = '';

  constructor(private fileService: FileIoService, private spinner: NgxSpinnerService) { }

  onFileSelected(event: any): void {
    this.files = event.target.files;
  }

  uploadFiles(): void {
    this.spinner.show();
    if (this.files) {
      for (let i = 0; i < this.files.length; i++) {
        this.fileService.uploadFile(this.token, this.files[i]).subscribe(x => {
          console.log(x);
          this.spinner.hide();
        });
      }
    }

    this.spinner.hide();
  }
}
