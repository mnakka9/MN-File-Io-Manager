import { Component, OnDestroy, OnInit } from '@angular/core';
import { FileIo, Node } from '../common/fileio';
import { FileIoService } from '../Services/file.io.service';
import { FormsModule } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgxSpinner, NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, NgxSpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  public getFiles$!: Observable<FileIo>;
  token?: string;
  private deleteFileSub: Subscription = new Subscription;

  constructor(private fileService: FileIoService, private spinner: NgxSpinnerService) {

  }
  ngOnDestroy(): void {
    this.deleteFileSub.unsubscribe();
  }

  onGetAllFileClick(): void {
    this.spinner.show();
    this.getFiles$ = this.fileService.getAllFiles(this.token!);
    this.spinner.hide();
  }

  deleteFile(file: Node){
    this.spinner.show();
    this.deleteFileSub = this.fileService.deleteFile(this.token!, file.key).pipe().subscribe(value => {
      console.log(value);
      if(value.success){
        this.getFiles$ = this.fileService.getAllFiles(this.token!);
        this.spinner.hide();
      }
    });

    this.spinner.hide();
  }

  ngOnInit(): void {
  }
}
