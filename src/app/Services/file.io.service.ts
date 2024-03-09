import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { FileIo } from "../common/fileio";
import { Injectable } from "@angular/core";
import { DeleteStatus } from "../common/delete";
import { UploadStatus } from "../common/upload-status";

@Injectable({
  providedIn: 'root'
})
export class FileIoService{
  private baseUrl: string = "https://file.io/"
  constructor(private http:HttpClient) {

  }

  getAllFiles= (token: string): Observable<FileIo>  => {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<FileIo>(this.baseUrl, {headers: headers});
  }

  deleteFile= (token: string, key: string): Observable<DeleteStatus> => {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete<DeleteStatus>(`${this.baseUrl}${key}`, {headers: headers})
  }

  uploadFile(token: string, file: File): Observable<UploadStatus> {
    const formData = new FormData();
    formData.append('file', file);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<UploadStatus>(`${this.baseUrl}`, formData, {headers: headers});
  }
}
