interface Button {
    onClick(listener: () => void): void
    customizeButton(options: ButtonOptions): void
}

interface ButtonOptions {
    text: string
    classNames?: string
}

class WindowsButton implements Button {
    private button: HTMLButtonElement = document.createElement('button')

    constructor(parent: HTMLElement | null) {
        this.render(parent)
    }

    onClick(listener: (e: MouseEvent) => void): void {
        this.button.addEventListener('click', listener)
    }

    customizeButton(options: ButtonOptions) {
        this.button.innerText = options.text
        if (options.classNames) this.button.className = options.classNames
    }

    private render(parent: HTMLElement | null): void {
        parent?.append(this.button)
    }
}

class HTMLButton implements Button {
    private button: HTMLButtonElement = document.createElement('button')

    constructor(parent: HTMLElement | null) {
        this.render(parent)
    }

    onClick(listener: (e: MouseEvent) => void): void {
        this.button.addEventListener('click', listener)
    }

    customizeButton(options: ButtonOptions) {
        this.button.innerText = options.text
        if (options.classNames) this.button.className = options.classNames
    }

    private render(parent: HTMLElement | null): void {
        parent?.append(this.button)
    }
}

abstract class Dialog {
    createButton(parent: HTMLElement | null) {}
}

class WindowsDialog extends Dialog {
    createButton(parent: HTMLElement | null) {
        return new WindowsButton(parent)
    }
}

class WebDialog extends Dialog {
    createButton(parent: HTMLElement | null) {
        return new HTMLButton(parent)
    }
}

const webButton = new WebDialog().createButton(document.querySelector('.wrapper'))
webButton.customizeButton({text: 'HTMl Button', classNames: 'red'})
webButton.onClick(() => console.log('click'))

