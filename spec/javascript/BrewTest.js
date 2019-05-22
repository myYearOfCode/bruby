import fetchMock from 'fetch-mock'
import { shallow, mount } from 'enzyme'

import Brew from '../../app/javascript/react/components/Brew'

describe('Brew', () => {
  let wrapper;

  beforeEach(() => {
    const setRedirect = () => { console.log('setRedirect')}
    const sessions = {
      "025": [
        {
          "id": 130,
          "uid": "f91dc3e8cfa484a6d37911d951ac0a72",
          "sesId": "025",
          "wort": 0,
          "therm": 0,
          "step": "Finishing Brew",
          "error": 0,
          "sesType": 0,
          "timeLeft": 100,
          "shutScale": "0.24",
          "brew_id": 2,
          "created_at": "2019-05-18T01:41:50.836Z",
          "updated_at": "2019-05-18T01:41:50.836Z",
          "event": null
        },
        {
          "id": 131,
          "uid": "f91dc3e8cfa484a6d37911d951ac0a72",
          "sesId": "025",
          "wort": 195,
          "therm": 220,
          "step": "Finishing Brew",
          "error": 0,
          "sesType": 0,
          "timeLeft": 1,
          "shutScale": "0.24",
          "brew_id": 2,
          "created_at": "2019-05-18T01:42:44.528Z",
          "updated_at": "2019-05-18T01:42:44.528Z",
          "event": null
        },
        {
          "id": 132,
          "uid": "f91dc3e8cfa484a6d37911d951ac0a72",
          "sesId": "025",
          "wort": 195,
          "therm": 220,
          "step": "Finishing Brew",
          "error": 0,
          "sesType": 0,
          "timeLeft": 1,
          "shutScale": "0.24",
          "brew_id": 2,
          "created_at": "2019-05-19T01:29:56.642Z",
          "updated_at": "2019-05-19T01:29:56.642Z",
          "event": null
        }
      ]
    }
    wrapper = shallow(
      <Brew
        setRedirect={setRedirect}
        sessions={sessions}
        sessionId={"025"}
        you={sessions["025"]}
      />
    )
    let mockBody = {
      brew: {
        created_at: "2019-05-11T02:01:41.340Z",
        data: null,
        description: "This came out great. Would brew again. After the stout, of course",
        id: 17,
        rating: "5",
        recipe_id: 17,
        updated_at: "2019-05-15T15:49:19.287Z",
        user_id: 1,
      },
      recipe: {
        created_at: "2019-05-11T02:01:41.333Z",
        description: "Color: Pale to golden↵Clarity: Appearance should be clear. Chill haze should not be present↵Perceived Malt Aroma & Flavor: Malt aroma and ﬂavor are pronounced. Low levels of yeast-produced sulfur aromas and ﬂavors may be present. Malt character is sometimes bready and suggestive of lightly toasted malted barley. There should be no caramel character.↵Perceived Hop Aroma & Flavor: Hop aroma is not present to low. Hop ﬂavor is very low to low, derived from noble-type hops.↵Perceived Bitterness: Low, derived from European noble-type hops.↵Fermentation Characteristics: Fruity esters, DMS and diacetyl should not be present. A very low level of sulfur attributes may be present in balance with other attributes.↵Body: Medium↵Additional notes: Many beer brands known as Austrian-Style Maerzen are nearly indistinguishable from Munich-Style Helles and are appropriately categorized here.↵",
        id: 17,
        name: "Dunkel Helles",
        profile_photo: null,
        s1Temp: 0,
        s1Time: 0,
        s2Temp: 0,
        s2Time: 0,
        s3Temp: 0,
        s3Time: 0,
        s4Temp: 0,
        s4Time: 0,
        s5Temp: 0,
        s5Time: 0,
        s6Temp: 0,
        s6Time: 0,
        s7Temp: 0,
        s7Time: 0,
        s8Temp: 0,
        s8Time: 0,
        s9Temp: 0,
        s9Time: 0,
        s10Temp: 0,
        s10Time: 0,
        style: "Helles",
        updated_at: "2019-05-15T15:14:14.124Z",
        yeast: "",
      }
    }
    fetchMock.get('/api/v1/brews/2', {
      status: 200,
      body: mockBody
    });
  });

  afterEach(() => fetchMock.restore)

  it('should mount', (done) => {
    setTimeout(() => {
      expect(wrapper.find('.brewRecipeName')).toBePresent();
      expect(wrapper.text()).toMatch(/2019-05-18/);
      done()
    },0)
  });
});
