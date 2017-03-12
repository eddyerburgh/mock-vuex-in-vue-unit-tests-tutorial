import avoriaz, { mount } from 'avoriaz';
import sinon from 'sinon';
import { expect } from 'chai';
import Vuex from 'vuex';
import 'babel-polyfill';
import Modules from '../../../src/components/Modules';
import module from '../../../src/store/module';

avoriaz.use(Vuex);

describe('Modules.vue', () => {
  let actions;
  let state;
  let store;

  beforeEach(() => {
    state = {
      module: {
        clicks: 2,
      },
    };

    actions = {
      moduleActionClick: sinon.stub(),
    };

    store = new Vuex.Store({
      state,
      actions,
      getters: module.getters,
    });
  });

  it('calls store action moduleActionClick when button is clicked', () => {
    const wrapper = mount(Modules, { store });
    const button = wrapper.find('button')[0];
    button.simulate('click');
    expect(actions.moduleActionClick.calledOnce).to.equal(true);
  });

  it('Renders state.inputValue in first p tag', () => {
    const wrapper = mount(Modules, { store });
    const p = wrapper.find('p')[0];
    expect(p.text()).to.equal(state.module.clicks.toString());
  });
});
