import expect from 'expect';
import * as productActions from '../../actions/productActions';
import * as types from '../../actions/actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe ('Async product Actions', () => {

    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_PRODUCT_SUCCESS when loading products', (done) => {
        const expectedActions = [
            {type: types.BEGIN_AJAX_CALL},
            {type: types.LOAD_PRODUCT_SUCCESS, body: {product: {id: '1001', identifier: {}}}}
        ];

        const store = mockStore({product: {}}, expectedActions);
        store.dispatch(productActions.loadProduct('22804')).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_PRODUCT_SUCCESS);
            done();
        });

    });

});

