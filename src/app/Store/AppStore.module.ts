import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ProductsStoreModule } from './Products/ProductsStore.module';

@NgModule({
    imports: [
      CommonModule,
      ProductsStoreModule,
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
      }),
    ],
    declarations: []
  })
  export class AppStoreModule {}