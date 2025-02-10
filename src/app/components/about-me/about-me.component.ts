import { Component } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { CommonModule } from '@angular/common';
import { AppConfig } from '../../../enums/app-data';

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
    public assetPaths = AssetPaths;
    public appConfig = AppConfig;
}
