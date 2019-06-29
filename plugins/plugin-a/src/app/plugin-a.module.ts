
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    imports: [CommonModule],
    declarations: [MenuComponent],
    entryComponents: [MenuComponent],
    providers: [
        {
            provide: 'menus',
            useValue: [{
                name: 'menu-component',
                component: MenuComponent
            }],
            multi: true
        }
    ]
})
export class PluginAModule { }
