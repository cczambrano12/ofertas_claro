import * as OfertaActions from './oferta.actions';

describe('Oferta', () => {
  it('should create an instance', () => {
    expect(new OfertaActions.LoadOfertas()).toBeTruthy();
  });
});
