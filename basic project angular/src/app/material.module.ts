import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
@NgModule({
    imports:[MatGridListModule, MatButtonModule, MatFormFieldModule, MatCardModule, MatInputModule],
    exports:[MatGridListModule, MatButtonModule, MatFormFieldModule, MatCardModule, MatInputModule]
})

export class MaterialModule{}