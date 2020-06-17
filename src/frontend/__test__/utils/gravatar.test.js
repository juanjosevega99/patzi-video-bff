import gravatar from '../../utils/gravatar'

test('Gravatar function test', () => {
  const email = 'juanvega.tech@gmail.com'
  const gravatarUrl = 'https://gravatar.com/avatar/e6ce4ca2d1e2243f09789cbadfeb133f'
  expect(gravatarUrl).toEqual(gravatar(email))
})