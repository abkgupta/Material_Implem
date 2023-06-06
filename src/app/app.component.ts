import { Component, OnInit, ViewChild, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
// import { DataSource } from '@angular/cdk/table';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {
  // title = 'material-demo';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']; 
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // displayedColumnsData: string[] = ['position', 'name', 'weight'];
  // dataSource = ELEMENT_DATA;
  @ViewChild(MatSort)
  sort: MatSort | any;
  @ViewChild(MatPaginator)
  paginator: MatPaginator | any;

  constructor() {
    this.dataSource.sort = this.sort; 
    this.dataSource.paginator = this.paginator;   
  }
  // sort: MatSort = new MatSort;
  ngOnInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  logData(row: any) {
    console.log(row)
  }

  applyFilter(event: any) {
    let filterValue = event.target.value || ''
    filterValue = filterValue.trim().toLowerCase(); // MatTableDataSource defaults to lowercase matches
    console.log(filterValue);

    this.dataSource.filter = filterValue;    
  }
  // items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

}
// export class AppComponent{
//    tgyg:number[]= [] ;
//    constructor() {
//     for(let i=0;i<1000;i++)
//     {
//       this.tgyg.push(i);
//     }
//    }
// }