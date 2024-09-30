import { Component, Input } from '@angular/core'
import { ScrollService } from './services/scroll.service'

@Component({
  selector: 'ngx-scroll-progress',
  standalone: true,
  imports: [],
  template: `
    <div class="sticky top-0 h-1 w-full" [style.background]="style.background">
      <div class="h-1" [style.background]="style.foreground" [style.width.%]="progress"></div>
    </div>
  `,
  styles: ``
})
export class NgxScrollProgressComponent {
  @Input() style = { background: '#fff', foreground: '#000' }
  progress: number = 0

  constructor(private _scrollService: ScrollService) {
    this._scrollService.scrolled.subscribe((progress: number) => {
      this.progress = progress
    })
  }
}
