import 'babel-polyfill';
import avoriaz, { mount } from 'avoriaz';
import { expect } from 'chai';
import Vuex from 'vuex';
import Actions from '../../../src/components/Getters';

avoriaz.use(Vuex);

describe('Getters.vue', () => {
  let state;
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      clicks: () => 2,
      inputValue: () => 'input',
    };

    store = new Vuex.Store({
      getters,
    });
  });

  it('Renders state.inputValue in first p tag', () => {
    const wrapper = mount(Actions, { store });
    const p = wrapper.find('p')[0];
    expect(p.text()).to.equal(getters.inputValue());
  });

  it('Renders state.clicks in second p tag', () => {
    const wrapper = mount(Actions, { store });
    const p = wrapper.find('p')[1];
    expect(p.text()).to.equal(getters.clicks().toString());
  });
});
