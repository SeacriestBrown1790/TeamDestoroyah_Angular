import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    
    
    
    formdata.append('file', file);

    formdata.append('name',JSON.parse(sessionStorage.getItem("user")).username+this.random());
    formdata.append('userid',JSON.parse(sessionStorage.getItem("user")).user_id);

    
    console.log(file);

    const req = new HttpRequest('POST', 'http://localhost:8080/TeamDestoroyah/upload.app', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  random(){
    let count = Math.random();
  
    return count;
  }

  // pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
  //   const formdata: FormData = new FormData();
  //   formdata.append('inputStream', file,);
  //   formdata.append('fileType', file.type,);
  //   formdata.append('name',file.name);
    
  //   console.log(file);

  //   const req = new HttpRequest('POST', 'http://localhost:8080/TeamDestoroyah/davin.app', formdata, {
  //     reportProgress: true,
  //     responseType: 'text'
  //   });

  //   return this.http.request(req);
  // }

  getFiles(): Observable<any> {
    return this.http.get('http://localhost:8080/all.app');
  }
}
