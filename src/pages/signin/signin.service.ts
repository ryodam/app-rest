import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class SigninService {
    constructor(private http: HttpClient) { }

    createUser(usuario: string, password: string): Observable<any> {
        return this.http.post<any>('http://localhost:3000/users', {
            usuario: usuario,
            password: password
        });
    }
}