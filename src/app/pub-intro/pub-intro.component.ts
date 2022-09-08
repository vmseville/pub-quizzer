import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'qzr-pub-intro',
  templateUrl: './pub-intro.component.html',
  styleUrls: ['./pub-intro.component.scss'],
})
export class PubIntroComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToSetup() {
    this.router.navigateByUrl('/setup');
  }
}
