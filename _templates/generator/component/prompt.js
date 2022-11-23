module.exports = [
  /**
   * やりたい：atomic に'custom'を追加し、ディレクトリ名を入力して指定できるようにしたい
   */
  {
    type: 'select',
    name: 'atomic',
    message: 'Please select directory',
    choices: [ 'components/layouts', 'components/utils' ]
  },
  {
    type: 'input',
    name: 'componentName',
    message: 'Please enter a component name',
    validate: input => input !== ''
  },
  {
    type: 'confirm',
    name: 'isProps',
    message: 'Use Props ?',
    choices: [ 'Yes', 'No' ],
    initial: 'Yes'
  },
  {
    type: 'confirm',
    name: 'isEmit',
    message: 'Use Emit ?',
    choices: [ 'Yes', 'No' ],
    initial: 'Yes'
  }
]
