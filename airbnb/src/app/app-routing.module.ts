import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'explore', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'rental-details', loadChildren: './rental-details/rental-details.module#RentalDetailsPageModule' },
  { path: 'listing-details', loadChildren: './listing-details/listing-details.module#ListingDetailsPageModule' },
  {path: 'register', loadChildren: './register/register.module#RegisterPageModule'},
  { path: 'booking', loadChildren: './booking/booking.module#BookingPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
