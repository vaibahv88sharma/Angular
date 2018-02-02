import { UselessPipePipe } from './useless-pipe.pipe';

describe('UselessPipePipe', () => {

  let pipe: UselessPipePipe;
  
    beforeEach(()=>{
      pipe= new UselessPipePipe();
    });
  
    it('providing no value returns fallback', () => {
      expect(pipe.transform('vaibhav sharma','hello', 'Good Morning'))
      .toBe('hello vaibhav sharma Good Morning');
    });

  it('create an instance', () => {
    //const pipe = new UselessPipePipe();
    expect(pipe).toBeTruthy();
  });
});
