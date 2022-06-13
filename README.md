# What is ngx-mat-table-rich
It is a custom schematics, which allow you to generate scaffolded bunch of code, to reduce the efforts and time in development.
So it will generate the below:

- Entity Module
- Entity Routes Module
- Service for the entity contains the table methods
- Configs class for the entity API's links

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Output File Example](#example)
* [Output Code](#code)

# Installation[](#installation) 
To install the component
```
 npm install ngx-mat-table-rich -s
 npm install ../ngx-mat-table-rich-0.0.0.tgz
 ```
 
 # Usage[](#usage)
```
 ng g ngx-mat-table-rich:ngxMatTableRich module-name
 ng g ngx-mat-table-rich:ngx-mat-table-rich module-name
```

# Output Files Example[](#example)
Suppose we want to create new module called user-registration, you can run the command using the following
```
ng g ngx-mat-table-rich:ngxMatTableRich student-registration
```
the output of the files will be
> CREATE src/app/balance-sheet/balance-sheet-routing.module.ts (265 bytes)
> CREATE src/app/balance-sheet/balance-sheet.module.ts (343 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table/balance-sheet-table.module.ts (2591 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table/components/balance-sheet-table.component.html (7732 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table/components/balance-sheet-table.component.scss (1529 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table/components/balance-sheet-table.component.ts (21230 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table/services/balance-sheet-rich-table-milestone.service.ts (3251 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table/services/balance-sheet-table-data.service.ts (2485 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table-section/balance-sheet-table-section.module.ts (2144 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table-section/components/index.ts (208 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table-section/components/balance-sheet-actions/balance-sheet-actions.module.ts (803 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table-section/components/balance-sheet-actions/components/balance-sheet-actions.component.html (618 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table-section/components/balance-sheet-actions/components/balance-sheet-actions.component.scss (1091 > bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table-section/components/balance-sheet-actions/components/balance-sheet-actions.component.ts (2075 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table-section/components/balance-sheet-card/balance-sheet-card.component.html (3512 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table-section/components/balance-sheet-card/balance-sheet-card.component.scss (107 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table-section/components/balance-sheet-card/balance-sheet-card.component.ts (1514 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table-section/components/balance-sheet-info/balance-sheet-info.component.html (2663 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table-section/components/balance-sheet-info/balance-sheet-info.component.scss (190 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table-section/components/balance-sheet-info/balance-sheet-info.component.ts (2156 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table-section/components/balance-sheet-status/balance-sheet-status.component.html (282 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table-section/components/balance-sheet-status/balance-sheet-status.component.scss (0 bytes)
> CREATE src/app/balance-sheet/components/balance-sheet-table-section/components/balance-sheet-status/balance-sheet-status.component.ts (1389 bytes)
> CREATE src/app/balance-sheet/configs/balance-sheet-api.config.ts (237 bytes)
> CREATE src/app/balance-sheet/enums/balance-sheet-card-status.enum.ts (221 bytes)
> CREATE src/app/balance-sheet/filter/balance-sheet-filter.module.ts (999 bytes)
> CREATE src/app/balance-sheet/filter/components/balance-sheet-filter-content.component.html (108 bytes)
> CREATE src/app/balance-sheet/filter/components/balance-sheet-filter-content.component.scss (113 bytes)
> CREATE src/app/balance-sheet/filter/components/balance-sheet-filter-content.component.ts (2992 bytes)
> CREATE src/app/balance-sheet/filter/services/balance-sheet-filter.service.ts (5113 bytes)
> CREATE src/app/balance-sheet/i18n/ae.ts (188 bytes)
> CREATE src/app/balance-sheet/i18n/en.ts (189 bytes)
> CREATE src/app/balance-sheet/interfaces/index.ts (131 bytes)
> CREATE src/app/balance-sheet/interfaces/Ibalance-sheetCardData.ts (351 bytes)
> CREATE src/app/balance-sheet/interfaces/Ibalance-sheetInfoData.ts (181 bytes)
> CREATE src/app/balance-sheet/interfaces/Ibalance-sheetListViewModel.ts (468 bytes)
> CREATE src/app/balance-sheet/models/Ibalance-sheetFilterPayload.ts (246 bytes)
> CREATE src/app/balance-sheet/models/Ibalance-sheetListViewModel.ts (246 bytes)
> CREATE src/app/balance-sheet/models/balance-sheet-columns-def.ts (5237 bytes)
> CREATE src/app/balance-sheet/services/balance-sheet.service.ts (738 bytes)

# Output Code[](#code)
#### Entity Module

```javascript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegistrationRoutingModule } from './student-registration-routing.module';

@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    StudentRegistrationRoutingModule,
  ],
  exports:[],
  providers:[]
})
export class StudentRegistrationModule {}
```

#### Entity Routing Module
```javascript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceSheetRoutingModule { }

```
#### Entity API's Configs
```javascript
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationApiConfig {
  constructor() { }

  STUDENT_REGISTRATION = (id?: any): string => `/${id}`;
}
```
#### Entity Module
```javascript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceSheetRoutingModule } from './balance-sheet-routing.module';

@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    BalanceSheetRoutingModule],
  exports: [],
  providers: []
})
export class BalanceSheetModule {}

```


### Development commands
1) Schematics project
 a) npm pack

2) Project to install schematics
  a) npm i -D ./projects/ngx-mat-table-rich-1.0.0.tgz 
  b) ng g ngx-mat-table-rich:ngx-mat-table-rich
