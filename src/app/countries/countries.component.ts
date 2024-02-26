import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  MyCountries: CountryInfo[] = [];
  constructor(public apiCaller: HttpClient) {
    //alert('Constructor')
  }

  ngOnInit(): void {
    // alert('Initi')
    // fetch('https://restcountries.com/v3.1/all')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     for (let i = 0; i < json.length; i++) {
    //       let c = new CountryInfo ();
    //       //console.log(json[i]);
    //       c.name = json[i].name.common;
    //       c.flag = json[i].flags.png;
    //       c.population = json[i].population;
    //       this.MyCountries.push(c);
    //     }
    //     //alert(this.MyCountries.length);
    //   });

    //this.getData();
    this.getDataV2();
  }

  getDataV2() {
    this.apiCaller
      .get('https://restcountries.com/v3.1/all')
      .subscribe((json: any) => {
        for (let i = 0; i < json.length; i++) {
          let c = new CountryInfo();
          //console.log(json[i]);
          c.name = json[i].name.common + 'x';
          c.flag = json[i].flags.png;
          c.population = json[i].population;
          this.MyCountries.push(c);
        }
      });
  }

  getData() {
    //alert('Initi')
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((json) => {
        for (let i = 0; i < json.length; i++) {
          let c = new CountryInfo();
          //console.log(json[i]);
          c.name = json[i].name.common;
          c.flag = json[i].flags.png;
          c.population = json[i].population;
          this.MyCountries.push(c);
        }
        //alert(this.MyCountries.length);
      });
  }
}

class CountryInfo {
  flag: string = '';
  name: string = '';
  population: number = 0;
}
