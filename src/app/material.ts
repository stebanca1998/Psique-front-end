import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import {MatRippleModule} from '@angular/material/core';



import {NgModule} from '@angular/core'

@NgModule({
    imports: [
        MatInputModule,
        MatRippleModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule
    ],
    exports:[
        MatInputModule,
        MatRippleModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule
    ]
})

export class MaterialModule {}