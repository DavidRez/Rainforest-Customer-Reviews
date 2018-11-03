import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import CustomerReviews from './CustomerReviews.jsx';
import CustomerReview from './CustomerReview.jsx';
import ReviewImages from './ReviewImages.jsx';
import Adapter from 'enzyme-adapter-react-16';
import flushPromises from 'flush-promises';
import ReactTestUtils from 'react-dom/test-utils';

Enzyme.configure({adapter : new Adapter()});

jest.mock('../api/getReviews');
jest.mock('../api/getImages');

describe('CustomerReviews component', () => {
    test('renders without prop', async () => {
        const wrapper = shallow(<CustomerReviews />);
        expect(wrapper).toMatchSnapshot();
    });

    test('renders with prop', async () => {
        const wrapper = shallow(<CustomerReviews productId={1}/>);
        await flushPromises();
        expect(wrapper.instance().props.productId).toBe(1);
    });

    test('data received from server is added to state', async () => {
        const wrapper = shallow(<CustomerReviews productId={1}/>);
        await flushPromises();
        expect(wrapper.state().reviews).toHaveLength(1);
    });

    test('passes down info prop to CustomerReview component(s)', async () => {
        const wrapper = mount(<CustomerReviews productId={1}/>);
        await flushPromises();
        let childComponent = ReactTestUtils.findRenderedComponentWithType(wrapper.instance(), CustomerReview);
        expect(childComponent.props.info.id).toEqual(1);
        wrapper.unmount();
    });
});  
describe('CustomerReview component', () => {
    test('renders', async () => {
        const wrapper = shallow(<CustomerReview />);
        expect(wrapper).toMatchSnapshot();
    });

    test('sets state on render', async () => {
        const wrapper = shallow(<CustomerReview info={
            { "id":1,
                    "customer_id":644,
                    "customer_username":"Bobinette Ikins",
                    "review_date":"2017-12-30 07:08:16",
                    "rating":1,
                    "title":"quam sapien varius ut blandit",
                    "body":"at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur",
                    "helpful_count":28,
                    "product_id":9,
                    "product_version":"small"
            }
        }/>);
        expect(wrapper.state().info.id).toEqual(1);
    });

    test('passes down reviewId prop to ReviewImages component', async () => {
        const wrapper = mount(<CustomerReview info={
            { "id":1,
                    "customer_id":644,
                    "customer_username":"Bobinette Ikins",
                    "review_date":"2017-12-30 07:08:16",
                    "rating":1,
                    "title":"quam sapien varius ut blandit",
                    "body":"at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur",
                    "helpful_count":28,
                    "product_id":9,
                    "product_version":"small"
            }
        }/>);
        await flushPromises();
        let childComponent = ReactTestUtils.findRenderedComponentWithType(wrapper.instance(), ReviewImages);
        console.log(childComponent.props);
        await expect(childComponent.props.reviewId).toEqual(1);
        wrapper.unmount();
    });
});
describe('ReviewImages component', () => {
    test('renders', async () => {
        const wrapper = shallow(<ReviewImages reviewId={1}/>);
        await flushPromises();
        expect(wrapper).toMatchSnapshot();
    });

    test('renders with prop and sets state', async () => {
        const wrapper = shallow(<ReviewImages productId={1}/>);
        await flushPromises();
        expect(wrapper.instance().props.productId).toBe(1);
        wrapper.unmount();
    });
});