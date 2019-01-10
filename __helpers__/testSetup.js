import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

jest.mock('history', () => ({ createBrowserHistory: () => ({}) }));

Enzyme.configure({ adapter: new Adapter() });
