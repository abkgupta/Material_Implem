import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MaterialModule } from './material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import { ScrollingComponent } from './components/cdk/scrolling/scrolling.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    ScrollingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    ScrollingModule,
    MatPaginatorModule,
    MatSortModule
    // ChangeDetectionStrategy
    // MatTableDataSource
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
