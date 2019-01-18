const initialData = {
  options: {
    'option-1' : {id: 'option-1', title: 'Add lane'},
    'option-2' : {id: 'option-2', title: 'Add bar'}
  },
  lanes: {},
  areas: {
    'options-list': {
      id: 'options-list',
      optionIds: ['option-1', 'option-2']
    },
    'lanes-list': {
      id: 'lanes-list',
      laneIds: []
    }
  }
}

export default initialData;



