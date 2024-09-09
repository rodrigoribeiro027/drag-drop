import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, 
    CommonModule, 
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    DragDropModule
  ],
})
export class HomePage implements AfterViewInit {
  annotations: { comment: string; top: number; left: number }[] = [];
  selectedAnnotation?: { comment: string; top: number; left: number };

  @ViewChild('imageContainer', { static: true }) imageContainer!: ElementRef;
  @ViewChild('image', { static: true }) image!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    if (this.imageContainer && this.image) {
      console.log('Elementos ViewChild carregados:', this.imageContainer, this.image);
    }
  }

  addAnnotation() {
    const newAnnotation = {
      comment: 'Novo comentário',
      top: 10, 
      left: 10, 
    };
    this.annotations.push(newAnnotation);
    console.log('Anotação adicionada:', newAnnotation);
  }

  onDragEnded(event: CdkDragEnd, annotation: any) {
    const position = event.source.getFreeDragPosition();
    annotation.top = position.y;
    annotation.left = position.x;
    console.log('Anotação movida para:', annotation);
  }

  selectAnnotation(annotation: any) {
    this.selectedAnnotation = annotation;
    console.log('Anotação selecionada:', annotation);
  }
}
