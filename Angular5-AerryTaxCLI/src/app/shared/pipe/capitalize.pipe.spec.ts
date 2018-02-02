import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(()=>{
    pipe= new CapitalizePipe();
  });

  it('providing no value returns fallback', () => {
    expect(pipe.transform('vaibhav sharma',[])).toBe('Vaibhav Sharma');
  });

  it('create an instance', () => {
    //const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });
});
