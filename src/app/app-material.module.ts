import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table'; 
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
      MatToolbarModule,
      MatButtonModule, 
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatListModule,
      MatTabsModule,
      MatSidenavModule,
      MatTableModule,
      MatIconModule,
      MatPaginatorModule,
      FlexLayoutModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    FlexLayoutModule
  ]
})

export class AppMaterialModule { }
