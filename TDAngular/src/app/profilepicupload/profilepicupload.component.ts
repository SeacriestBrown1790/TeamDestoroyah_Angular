import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload/upload-file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'profilepicupload',
  templateUrl: './profilepicupload.component.html',
  styleUrls: ['./profilepicupload.component.scss']
})
export class ProfilepicuploadComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: UploadFileService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
 
  upload() {
    this.progress.percentage = 0;
 
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
 
    this.selectedFiles = undefined;
  }
}
