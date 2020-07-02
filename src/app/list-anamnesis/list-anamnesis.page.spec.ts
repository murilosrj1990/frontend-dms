import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListAnamnesisPage } from './list-anamnesis.page';

describe('ListAnamnesisPage', () => {
  let component: ListAnamnesisPage;
  let fixture: ComponentFixture<ListAnamnesisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAnamnesisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListAnamnesisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
