import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'musualizer';

  inputOnChange() {
    let file: File = (<HTMLInputElement>document.querySelector("input[name='file']")).files[0];
    let fileReader: FileReader = new FileReader();
    fileReader.onload = () => {
      let contents = fileReader.result;
      this.performAnalysis(contents);
    }

    fileReader.readAsBinaryString(file);
  }

  performAnalysis(content) {
    let p = document.createElement("p");
    p.innerHTML = content;
    document.getElementsByTagName("body")[0].appendChild(p);

    console.log(content);
  }
}
