import routeData from 'react-router';
test('renders Detail container', () => {
  const mockLocation = {
    pathname: '/detail',
    id: '1'
  }
  beforeEach(() => {
    jest.spyOn(routeData, 'useParams').mockReturnValue(mockLocation)
  })
});