import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsComponent } from './authors.component';
import {By} from '@angular/platform-browser';

import { NgxJsonapiModule } from 'ngx-jsonapi';
import {AuthorsService} from './authors.service';

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxJsonapiModule.forRoot({
        url: '//jsonapiplayground.reyesoft.com/v2/'
      })],
      declarations: [AuthorsComponent],
      providers: [AuthorsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
      const titleElements = fixture.debugElement.queryAll(By.css('h1'));
      expect(titleElements.length).toBe(1);
      expect(titleElements[0].nativeElement.innerHTML).toBe('authors works!');
    });

  it('show all the authors', async () =>  {
      // tslint:disable-next-line:no-debugger
      debugger;
      fixture.detectChanges();
      await new Promise(resolve => setTimeout(resolve, 1500));
      fixture.detectChanges();
      const authorElements = fixture.debugElement.queryAll(By.css('.author'));
      expect(authorElements.length).toBeGreaterThan(3);
    });
});


