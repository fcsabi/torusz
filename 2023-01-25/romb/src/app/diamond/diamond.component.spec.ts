/*
* File:
* Author: Farkas Csaba
* Copyright: 2023, Farkas CSaba
* Group: Szoft I/N
* Date: 2023-02-07
* Github: https://github.com/fcsabi/
* Licenc: GNU GPL
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondComponent } from './diamond.component';

describe('DiamondComponent', () => {
  let component: DiamondComponent;
  let fixture: ComponentFixture<DiamondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiamondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
