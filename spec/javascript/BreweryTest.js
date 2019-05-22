import { shallow, mount } from 'enzyme'
import Brewery from '../../app/javascript/react/components/Brewery'

describe('Brewery', () => {
  let wrapper;
  let brewery;
  beforeEach(() => {
    brewery = {
      brewery_type: "micro",
      city: "Florence",
      country: "United States",
      id: 3255,
      latitude: null,
      longitude: null,
      name: "Building 8 Brewing",
      phone: "4132501602",
      postal_code: "01062-2750",
      state: "Massachusetts",
      street: "320 Riverside Dr Ste 8",
      tag_list: [],
      updated_at: "2018-08-11T21:37:39.662Z",
      website_url: "",
    }
    wrapper = shallow(
      <Brewery
      brewery={brewery}
      />
    )
  })

  it('should match passed props', () => {
    expect(wrapper.text()).toMatch(/Building 8 Brewing/);
    expect(wrapper.text()).toMatch(/320 Riverside Dr Ste 8/);
    expect(wrapper.text()).toMatch(/Florence/);
    expect(wrapper.text()).toMatch(/Massachusetts/);
    expect(wrapper.text()).toMatch(/01062-2750/);
    expect(wrapper.text()).not.toMatch(/4132501602/);
  });
});
