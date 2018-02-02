import { MainNavigationModule } from './main-navigation.module';

describe('MainNavigationModule', () => {
  let mainNavigationModule: MainNavigationModule;

  beforeEach(() => {
    mainNavigationModule = new MainNavigationModule();
  });

  it('should create an instance', () => {
    expect(mainNavigationModule).toBeTruthy();
  });
});
