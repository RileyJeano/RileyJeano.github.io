const {collapseDoc} = require('../js/project_dom.js')

describe ('collapseDoc', () => {
	test('should open collapseDoc', () =>{
		const button = document.createElement('button')
		button.classList.add('collapsible')
		const button2 = document.createElement('button')
		button2.classList.add('collapsible')
		const content = document.createElement('div')
		content.classList.add('content')

		//arrange

		//act
		collapseDoc([button, button2], content)
		button.click()


		//assert
		expect(button.classList.contains('active')).toBe(true)
	})
	
})
