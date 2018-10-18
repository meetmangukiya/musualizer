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

  refresh() {
    console.log(this.sourceNode);
    const canvas = <HTMLCanvasElement>document.getElementById('visual');

    const ctx = canvas.getContext('2d');
    const array = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(array);

    console.log(array);

    const timearr = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteTimeDomainData(timearr);

    const divisions = array.length;
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const center = {
      x: vw / 2,
      y: vh / 2,
    }

    const radius = vh / 4;

    let startAngle = 0;
    ctx.beginPath();

    let tmp = array.filter(a => a != 0);
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

    tmp = timearr.filter(a => a != 0);
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

  visualize(data) {
    // load data in the player
    document.querySelector("audio").src = data;
    const canvas = <HTMLCanvasElement>document.querySelector("#visual");
    canvas.height = document.documentElement.clientHeight;
    canvas.width = document.documentElement.clientWidth;
  }
}
