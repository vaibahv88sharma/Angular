import { SharedSectionModule } from './shared-section.module';

describe('SharedSectionModule', () => {
  let sharedSectionModule: SharedSectionModule;

  beforeEach(() => {
    sharedSectionModule = new SharedSectionModule();
  });

  it('should create an instance', () => {
    expect(sharedSectionModule).toBeTruthy();
  });
});
