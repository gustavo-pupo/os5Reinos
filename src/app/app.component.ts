import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reinosAng';

    contador:number = 1;
    incomoda:string = 'incomodam ';

    elefanteFdp(){
        while(this.contador<=50){
            if(this.contador == 1){
                alert(`${this.contador} elefante incomoda muita gente.`);
                this.contador++;
            }else{
            alert(this.contador + ' elefantes ' + this.incomoda.repeat(this.contador) +'muito mais.');
            this.contador++;
            alert(`${this.contador} elefantes incomodam muita gente.`);
            this.contador++;
            }
        }
        alert('Parabéns pela paciência');
        alert('Muito obrigado');
    }
}
