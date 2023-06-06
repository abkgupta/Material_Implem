import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
const MaterialComponents = [MatButtonModule,
MatTableModule,
MatFormFieldModule,
MatSortModule,
MatPaginatorModule,
ScrollingModule
// ChangeDetectionStrategy
// DataSource
];

@NgModule({
  declarations: [], 
  imports: [
    // CommonModule,
   MaterialComponents
  //  MatDialogModule,
  //  MatTableModule,
  //  DataSource
  ],   
  exports: [MaterialComponents]
})
export class MaterialModule { }
