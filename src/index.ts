/*abstract class State {
    protected context: Context | undefined

    public setContext(context: Context) {
        this.context = context
    }
    public abstract switchColor(): void
}

class Context {
    private state: State | undefined
    private button: HTMLButtonElement | null = document.querySelector('button')

    constructor(state: State) {
        this.transitionTo(state)
    }

    public transitionTo(state: State): void {
        this.state = state
        this.state.setContext(this)
    }
    public addButtonListener() {
        this.button?.addEventListener('click', () => {
            this.state?.switchColor()
        })
    }
}

class BlackColor extends State {
    public switchColor(): void {
        document.body.classList.remove('red')
        document.body.classList.add('black')
        this.context?.transitionTo(new RedColor())
    }

}

class RedColor extends State {
    public switchColor(): void {
        document.body.classList.remove('black')
        document.body.classList.add('red')
        this.context?.transitionTo(new BlackColor())
    }
}

const context = new Context(new BlackColor())
context.addButtonListener()*/
