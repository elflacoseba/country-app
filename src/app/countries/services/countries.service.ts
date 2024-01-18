/**
 * Servicio para buscar países utilizando una API externa.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  private getCountriesRequest( url: string ) {
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( error => of([]) ),
        delay( 2000 )
       );
  }

  /**
   * Busca países por código.
   * @param term Término de búsqueda.
   * @returns Observable que emite un array de objetos de tipo Country.
   */
  searchCountryByAplhaCode( code: string ):Observable<Country | null> {
    const url = `${ this.apiUrl }/alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null),
        catchError( error => of(null) )
       );
  }

  /**
   * Busca países por su capital.
   * @param term Término de búsqueda.
   * @returns Observable que emite un array de objetos de tipo Country.
   */
  searchCapital( term: string): Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${ term }`;

    return this.getCountriesRequest( url );
  }

  /**
   * Busca países por nombre.
   * @param term Término de búsqueda.
   * @returns Observable que emite un array de objetos de tipo Country.
   */
  searchCountry( term: string): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ term }/?fullText=false`;

    return this.getCountriesRequest( url );
  }

  /**
   * Busca países por región.
   * @param term Término de búsqueda.
   * @returns Observable que emite un array de objetos de tipo Country.
   */
  searchRegion( term: string): Observable<Country[]> {

    const url = `${ this.apiUrl }/region/${ term }`;

    return this.getCountriesRequest( url );
  }
}
