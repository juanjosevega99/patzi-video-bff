import { setFavorite, loginRequest } from '../../actions'
import movieMock from '../../__mocks__/movieMock'

describe('Actions', () => {
  test('set favorite', () => {
    const payload = movieMock
    const excpectedAction = {
      type: 'SET_FAVORITE',
      payload
    }
    expect(setFavorite(payload)).toEqual(excpectedAction)
  })

  test('Login', () => {
    const payload = {
      email: 'test@test.com',
      password: 'password'
    }
    const expectedAction = {
      type: "LOGIN_REQUEST",
      payload
    }
    expect(loginRequest(payload)).toEqual(expectedAction)
  })
})