import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aumentar-reducir';
  public cantidad: number = 0;

  public aumentar() {
    this.cantidad = this.cantidad + 100;
  }

  public reducir() {
    this.cantidad = this.cantidad - 100;
  }
}