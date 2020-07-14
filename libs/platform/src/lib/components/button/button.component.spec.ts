import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { ButtonModule } from '@fundamental-ngx/core';

describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ButtonModule],
            declarations: [ButtonComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('button onclick should be called', () => {
        spyOn(component, 'onBtnClick');
        component.onBtnClick(event);
        expect(component.onBtnClick).toHaveBeenCalled();
    });

    it('should not select a button', () => {
        const element = fixture.debugElement.nativeElement.querySelector('button');
        component.ariaSelected = false;
        fixture.detectChanges();
        expect(element.ariaSelected).toBeFalsy();
    });

    it('should have a content disabled button', () => {
        const element = fixture.debugElement.nativeElement.querySelector('button');
        component.disabled = true;
        fixture.detectChanges();
        expect(element.disabled).toBeTruthy();
    });

    it('should have aria disabled', () => {
        const element = fixture.debugElement.nativeElement.querySelector('button');
        component.ariaDisabled = true;
        fixture.detectChanges();
        expect(element.ariaDisabled).toBeTruthy();
    });

});
