import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
    imports:[MatGridListModule, MatButtonModule, MatFormFieldModule, MatCardModule],
    exports:[MatGridListModule, MatButtonModule, MatFormFieldModule, MatCardModule]
})

export class MaterialModule{}