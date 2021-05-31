import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreensizeService } from 'src/app/services/screensize.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  isDesktop: boolean;

  constructor(private screensizeService: ScreensizeService,
              public router: Router) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      if (this.isDesktop && !isDesktop) {
        window.location.reload();
      }
      this.isDesktop = isDesktop;
    });
  }

  ngOnInit() { }

}
