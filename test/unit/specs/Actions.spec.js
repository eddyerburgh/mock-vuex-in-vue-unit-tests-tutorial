import { mount } from 'avoriaz';
import Vue from 'vue';
import sinon from 'sinon';
import { expect } from 'chai';
import Vuex from 'vuex';
import 'babel-polyfill';
import Actions from '../../../src/components/Actions';

Vue.use(Vuex);

describe('Actions.vue', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      actionClick: sinon.stub(),
      actionInput: sinon.stub(),
    };
    store = new Vuex.Store({
      state: {},
      actions,
    });
  });

  it('calls store action actionInput when input value is input and an input even is fired', () => {
    const wrapper = mount(Actions, { store });
    const input = wrapper.find('input')[0];
    input.element.value = 'input';
    input.simulate('input');
    expect(actions.actionInput.calledOnce).to.equal(true);
  });

  it('does not call store action actionInput when input value is not input and an input even is fired', () => {
    const wrapper = mount(Actions, { store });
    const input = wrapper.find('input')[0];
    input.element.value = 'not input';
    input.simulate('input');
    expect(actions.actionInput.calledOnce).to.equal(false);
  });

  it('calls store action actionClick when button is clicked', () => {
    const wrapper = mount(Actions, { store });
    wrapper.find('button')[0].simulate('click');
    expect(actions.actionClick.calledOnce).to.equal(true);
  });
});
