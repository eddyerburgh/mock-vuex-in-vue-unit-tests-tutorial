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
      clicks: state => state.clicks,
      inputValue: state => state.inputValue,
    };
    state = {
      clicks: 2,
      inputValue: 'input',
    };
    store = new Vuex.Store({
      state,
      getters,
    });
  });

  it('Renders state.inputValue in first p ta', () => {
    const wrapper = mount(Actions, { store });
    const p = wrapper.find('p')[0];
    expect(p.text()).to.equal(state.inputValue);
  });

  it('Renders state.clicks in second p ta', () => {
    const wrapper = mount(Actions, { store });
    const p = wrapper.find('p')[1];
    expect(p.text()).to.equal(state.clicks.toString());
  });
});
