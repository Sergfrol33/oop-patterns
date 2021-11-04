import {Button, Checkbox, GUIFactory} from './types'

class WinButton implements Button {
    paint(): void {
        const button = document.createElement('button')
        button.innerText = 'win button'
        document.body.append(button)
    }
}

class MacButton implements Button {
    paint(): void {
        const button = document.createElement('button')
        button.innerText = 'mac button'
        document.body.append(button)
    }
}

class WinCheckbox implements Checkbox {
    paint(): void {
        const checkbox = document.createElement('input')
        const label = document.createElement('label')
        checkbox.type = 'checkbox'
        label.innerText = 'win checkbox'
        document.body.append(checkbox, label)
    }
}

class MacCheckbox implements Checkbox {
    paint(): void {
        const checkbox = document.createElement('input')
        const label = document.createElement('label')
        checkbox.type = 'checkbox'
        label.innerText = 'mac checkbox'
        document.body.append(checkbox, label)
    }
}

class WinFactory implements GUIFactory {
    createButton(): Button {
        return new WinButton();
    }

    createCheckbox(): Checkbox {
        return new WinCheckbox();
    }
}

class MacFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton();
    }

    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

class Application {
    private checkbox: Checkbox | undefined
    private button: Button | undefined
    private factory: GUIFactory | undefined
    constructor(factory: GUIFactory | undefined) {
        this.factory = factory
    }

    createUI(): void {
        this.button = this.factory?.createButton()
        this.checkbox = this.factory?.createCheckbox()
    }

    paint(): void {
        this.button?.paint()
        this.checkbox?.paint()
    }
}

class ApplicationConfigurator {
    typeFactory: GUIFactory | undefined
    constructor() {
        this.main()
    }
    main() {
        let config = navigator.userAgent
        if (/Win/.test(config)) {
            this.typeFactory = new WinFactory()
        } else {
            this.typeFactory = new MacFactory()
        }
        return this.typeFactory
    }
}

const appConfig = new ApplicationConfigurator()
const factory = appConfig.typeFactory
const app = new Application(factory)
app.createUI()
app.paint()

