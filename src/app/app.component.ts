import { ChangeDetectionStrategy, Component } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const nw: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // eslint-disable-next-line no-underscore-dangle
  public isNwjsRunning: boolean = typeof nw === 'object';

  public close() {
    window.close();
  }
}
