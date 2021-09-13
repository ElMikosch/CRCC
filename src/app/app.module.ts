import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AppComponent } from './app.component';
import { AmmunitionTableComponent } from './components/amunition-table/ammunition-table.component';
import { ArmorTableComponent } from './components/armor-table/armor-table.component';
import { BuyYourStuffComponent } from './components/buy-your-stuff/buy-your-stuff.component';
import { GearTableComponent } from './components/gear-table/gear-table.component';
import { LifePathComponent } from './components/life-path/life-path.component';
import { MeleeWeaponsTableComponent } from './components/melee-weapons-table/melee-weapons-table.component';
import { RangedWeaponsTableComponent } from './components/ranged-weapons-table/ranged-weapons-table.component';
import { RoleComponent } from './components/role/role.component';
import { SkillsComponent } from './components/skills/skills.component';
import { StatsComponent } from './components/stats/stats.component';
import { BuyableItemComponent } from './ui/buyable-item/buyable-item.component';
import { SkillInputComponent } from './ui/skill-input/skill-input.component';
import { StatInputComponent } from './ui/stat-input/stat-input.component';
import { CyberwareTableComponent } from './components/cyberware-table/cyberware-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    RoleComponent,
    LifePathComponent,
    StatInputComponent,
    SkillInputComponent,
    SkillsComponent,
    BuyableItemComponent,
    BuyYourStuffComponent,
    MeleeWeaponsTableComponent,
    RangedWeaponsTableComponent,
    ArmorTableComponent,
    GearTableComponent,
    AmmunitionTableComponent,
    CyberwareTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgxExtendedPdfViewerModule,
    MatExpansionModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
