import { Component, OnInit } from '@angular/core';

import { Point } from './interfaces';


@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit {
  audioCtx;
  sourceNode;
  analyser;
  array;

  constructor() {
  }

  ngOnInit() {
    this.audioCtx = new AudioContext();
    console.log(this.audioCtx);
    this.sourceNode = this.audioCtx.createMediaElementSource(document.getElementById('player'));
    console.log(this.sourceNode);
    this.analyser = this.audioCtx.createAnalyser();
    this.analyser.fftSize = 256;
    console.log(this.analyser);
    this.sourceNode.connect(this.analyser);
    this.analyser.connect(this.audioCtx.destination);
    this.array = new Uint8Array(this.analyser.frequencyBinCount);
    console.log(this.array);
    this.refresh();
    setInterval(() => this.refresh(), 25);
    let switcher = <HTMLSelectElement>document.getElementById('method');
    setInterval(() => switcher.value == 'Bars' ? switcher.value = "Circular bars" : switcher.value = "Bars", 5000);

    document.body.style.backgroundColor = 'orange';
  }

  onFileChange() {
    const file: File = (<HTMLInputElement>document.querySelector("input[name='file']")).files[0];
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      this.visualize(fileReader.result);
    }

    document.getElementById('visual').scrollIntoView();
  }

  circularBars(ctx, freq, time) {
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;


    const center = {
      x: vw / 2,
      y: vh / 2,
    }

    const radius = vh / 4;

    let startAngle = 0;
    ctx.beginPath();

    let tmp = freq.filter(a => a != 0);
    let stepAngle = Math.PI * 2 / tmp.length;

    for(let i = 0; i < tmp.length; i++) {
      const displacement = (tmp[i]) / 256 * radius;
      ctx.arc(center.x, center.y, radius + displacement, startAngle, startAngle + stepAngle, false);
      startAngle += stepAngle;
    }

    ctx.closePath();
    ctx.fillStyle = '#000';
    ctx.fill();


    startAngle = 0;
    ctx.beginPath();

    tmp = time.filter(a => a != 0);
    stepAngle = Math.PI * 2 / tmp.length;

    for(let i = 0; i < tmp.length; i++) {
      const displacement = (tmp[i]) / 256 * radius / 2;
      ctx.arc(center.x, center.y, (radius / 2) + displacement, startAngle, startAngle + stepAngle, true);
      startAngle += stepAngle;
    }

    ctx.closePath();
    ctx.fillStyle = '#8b008b';
    ctx.fill();
  }

  refresh() {
    const canvas = <HTMLCanvasElement>document.getElementById('visual');

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const array = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(array);

    //console.log(array);

    const timearr = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteTimeDomainData(timearr);

    const method = (<HTMLSelectElement>document.getElementById('method')).value;
    console.log(method);

    switch(method) {
      case 'Circular bars':
        console.log("executing...")
        this.circularBars(ctx, array, timearr);
        break;
      case 'Bars':
        this.bars(ctx, array, timearr);
        break;
    }
  }

  bars(ctx, freq, time) {
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;

    const height = vh / 2;

    let start = 0;

    let tmp = freq.filter(a => a != 0);
    let step = vw / tmp.length;

    const getRandomColor = () => {
      var str = "0123456789ABCDEF";

      var res = '#';
      for(let i = 0; i < 6; i++) {
        res += str[Math.floor(Math.random() * 16)];
      }

      return res;
    }

    for(let i = 0; i < tmp.length; i++) {
      const displacement = (tmp[i]) / 256 * height;
      ctx.fillStyle = getRandomColor();
      ctx.fillRect(start, vh - height - displacement, step, height + displacement);
      start += step;
    }
  }

  visualize(data) {
    // load data in the player
    document.querySelector("audio").src = data;
    const canvas = <HTMLCanvasElement>document.querySelector("#visual");
    canvas.height = document.documentElement.clientHeight;
    canvas.width = document.documentElement.clientWidth;
  }
}
