import { Component } from '@angular/core';

import 'audio-decode' as decode;
import 'audio-lena/mp3' as buffer;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'musualizer';

  inputOnChange() {
    let file: File = document.querySelector("input[name='file']").files[0];
    let fileReader: FileReader = new FileReader();
    fileReader.onload = () {
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
