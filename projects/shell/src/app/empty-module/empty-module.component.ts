import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'she-empty-module',
  templateUrl: './empty-module.component.html',
  styleUrls: ['./empty-module.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
