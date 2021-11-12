describe('Form App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

    const nameInput = () => cy.get('input[id="name-input"]');
    const specialInput = () => cy.get('input[name=special]');
    const mushrooms = () => cy.get('input[name=mushrooms]');
    const blackOlives = () => cy.get('input[name=blackOlives]');
    const onions = () => cy.get('input[name=onions]');
    const greenPeppers = () => cy.get('input[name=greenPeppers]');
    const spinach = () => cy.get('input[name=spinach]');
    const zucchini = () => cy.get('input[name=zucchini]');
    const pineapple = () => cy.get('input[name=pineapple]');
    const submitButton = () => cy.get('button[id="order-button"]');
    
    it('Initiation Check', () => {
        nameInput().should('exist');
        specialInput().should('exist');
        mushrooms().should('exist');
        blackOlives().should('exist');
        onions().should('exist');
        greenPeppers().should('exist');
        spinach().should('exist');
        zucchini().should('exist');
        pineapple().should('exist');
        submitButton().should('exist');
    })


    describe('Can add text to text boxes', () => {
        it('Name text box works', () => {
            nameInput().type('Person');
            nameInput().should('have.value', 'Person');
        })

        it('Special request box works', () => {
            specialInput().type('Please send paper plates');
            specialInput().should('have.value', 'Please send paper plates');
        })
    })

    describe('Multiple toppings can be selected', () => {
         it('Can select multiple toppings', () => {
            mushrooms().click();
            blackOlives().click();
            onions().click();
            greenPeppers().click();
            spinach().click();
            zucchini().click();
            pineapple().click();
         })    
    })

    describe('Can submit filled out form', () => {
        it('Fill out form and press submit', () => {
            nameInput().type('Person');
            specialInput().type('Please send paper plates');
            mushrooms().click();
            blackOlives().click();
            onions().click();
            greenPeppers().click();
            spinach().click();
            zucchini().click();
            pineapple().click();
            submitButton().click();
        })
    })

})