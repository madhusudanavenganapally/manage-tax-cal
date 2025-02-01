import { MaxLength10Directive } from './max-length10-directive.directive';

describe('MaxLength10DirectiveDirective', () => {
  it('should create an instance', () => {
    const elRefMock = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    const directive = new MaxLength10Directive(elRefMock);
    expect(directive).toBeTruthy();
  });
});
