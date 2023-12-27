(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    class HtmlElement {

        constructor(
            public id: string,
            public type: HtmlType
        ) {
            this.id = id;
            this.type = type;
        }
    }

    class InputAttributes {

        constructor(
            public value: string,
            public placeholder: string
        ) {
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    class InputEvents {

        constructor() { }

        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }


    //? Idea para la nueva clase InputElement
    class InputElement {
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;

        constructor(
            name: string,
            placeholder: string,
            id: string
        ) {
            this.htmlElement = new HtmlElement(id, 'input');
            this.inputAttributes = new InputAttributes(name, placeholder);
            this.inputEvents = new InputEvents();
        }

    }

    const nameField = new InputElement('Jimmy Salto', 'Enter first name', 'txtName');

    console.log({ nameField });

})()