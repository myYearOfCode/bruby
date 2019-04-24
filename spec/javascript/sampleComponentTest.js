import Sample from '../../app/javascript/react/components/Sample'

describe('Sample react component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Sample />
    )
  })

  it('should mount', () => {

    expect(wrapper.find('h3')).toBePresent();
    expect(wrapper.find('h3').text()).toBe('This Is A React Component.')
  });
});
