import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ColorPicker} from 'primeng/colorpicker';
import {FormsModule} from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButton } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import {Card} from 'primeng/card';


interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ColorPicker, FormsModule, SplitButton, ToastModule, MultiSelectModule, InputGroup, InputGroupAddon, FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule, Card],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss',
  providers: [MessageService]
})

export class App {
  color: string | undefined;
  items: MenuItem[];
  cities!: City[];
  selectedCities!: City[];

  text1: string | undefined;

  text2: string | undefined;

  number: string | undefined;

  selectedCity: City | undefined;

  steden: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  constructor(private messageService: MessageService) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];

    this.items = [
      {
        label: 'Update',
        command: () => {
          this.update();
        }
      },
      {
        label: 'Delete',
        command: () => {
          this.delete();
        }
      },
      { label: 'Angular.dev', url: 'https://angular.dev' },
      { separator: true },
      { label: 'Upload', routerLink: ['/fileupload'] }
    ];
  }

  save() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
  }

  delete() {
    this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
  }
  protected readonly title = signal('GeoNetwork5FE');
}
