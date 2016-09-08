import immutable from 'seamless-immutable'

export const state = immutable({
  user: {
    name: 'foo',
    gender: 'bar',
  },
})
export const props = {
  item: { id: 'bar' },
  title: 'strawberry',
}
