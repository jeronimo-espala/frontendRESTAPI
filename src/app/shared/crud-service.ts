import { delay, tap, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export class CrudService<T> {

    constructor(protected http: HttpClient, private API_URL){}


    list(){
        return this.http.get<T[]>(this.API_URL)
        .pipe(
          delay(2000),
          tap(console.log)
        );
      }
    
      loadByID(id) {
        return this.http.get<T>(`${this.API_URL}detalhes/${id}`).pipe(take(1));
      }
    
      
    
      private create(record: T) {
    
        return this.http.post(this.API_URL, record).pipe(take(1));
    
      }
    
      private update(record: T) {
    
        return this.http.put(`${this.API_URL}`, record).pipe(take(1));
        
      }
    
      save(record: T) {
        if(record['id']) {
          return this.update(record);
        }
    
        return this.create(record);
      }
    
      remove(matricula) {
    
        return this.http.delete(`${this.API_URL}${matricula}`).pipe(take(1));
    
      }
}
