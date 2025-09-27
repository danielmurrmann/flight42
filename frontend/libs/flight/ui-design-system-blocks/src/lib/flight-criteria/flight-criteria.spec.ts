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

    it('should emit searchTap event if form is entered correctly and search is pressed', fakeAsync(async () => {
    const searchFlightsSpy = jest.spyOn(component.searchFlights, 'emit');
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.disabled).toBeTruthy();
    setInput('input[aria-label=From]', 'Munich');
    setInput('input[aria-label=To]', 'Berlin');
    fixture.detectChanges();
    const errorHintFrom = fixture.debugElement.query(By.css('p[data-testid=error-hint-from]'));
    const errorHintTo = fixture.debugElement.query(By.css('p[data-testid=error-hint-to]'));
    button.click();
    tick();
    fixture.detectChanges();
    expect(errorHintFrom).toBeDefined();
    expect(errorHintTo).toBeDefined();
    expect(component._from()).toEqual('Munich');
    expect(component._to()).toEqual('Berlin');
    expect(button.disabled).toBeFalsy();
    expect(searchFlightsSpy).toHaveBeenCalledTimes(1);
  }));

});
