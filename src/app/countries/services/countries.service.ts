/**
 * Servicio para buscar países utilizando una API externa.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  /**
   * Busca países por su capital.
   * @param term Término de búsqueda.
   * @returns Observable que emite un array de objetos de tipo Country.
   */
  searchCapital( term: string): Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${ term }`;

    return this.http.get<Country[]>(url);
  }
}
