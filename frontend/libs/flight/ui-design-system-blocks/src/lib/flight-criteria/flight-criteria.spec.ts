import { By } from '@angular/platform-browser';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FlightCriteria } from './flight-criteria';

describe('FlightCriteriaComponent', () => {
  let component: FlightCriteria;
  let fixture: ComponentFixture<FlightCriteria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightCriteria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightCriteria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function setInput(selector: string, value: string): Promise<void> {
    const input = fixture.debugElement.query(By.css(selector)).nativeElement;
    input.value = value;
    input.dispatchEvent(new Event('input'));
    tick();
    return fixture.whenStable();
  }

  it('shows error hints if form is not correctly filled and search button is disabled', fakeAsync(() => {
    const searchFlightsSpy = jest.spyOn(component.searchFlights, 'emit');;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.disabled).toBeTruthy();
    setInput('input[aria-label=From]', 'Mu');
    setInput('input[aria-label=To]', 'Be');
    fixture.detectChanges();
    const errorHintFrom = fixture.debugElement.query(By.css('p[data-testid=error-hint-from]'));
    const errorHintTo = fixture.debugElement.query(By.css('p[data-testid=error-hint-to]'));
    expect(errorHintFrom).toBeDefined();
    expect(errorHintTo).toBeDefined();
    expect(button.disabled).toBeTruthy();
    expect(searchFlightsSpy).not.toHaveBeenCalledTimes(1);
  }));

});
