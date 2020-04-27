import { Component } from '@angular/core';


// <span class="created-by">With ♥ to <b><a href="http://Vencealvirus.org" target="_blank">Vencealvirus.org</a></b> 2020</span>

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">With ♥ to <b><a href="https://euvsvirus.org/" target="_blank">#EUvsVirus</a></b> 2020</span>
    <!-- <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div> -->
  `,
})
export class FooterComponent {
}
