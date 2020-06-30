import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnamnesisPage } from './anamnesis.page';

describe('AnamnesisPage', () => {
  let component: AnamnesisPage;
  let fixture: ComponentFixture<AnamnesisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnamnesisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnamnesisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
