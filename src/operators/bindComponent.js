export function bindComponent(component) {
    return (source) => source.lift(new BindComponentOperator(component));
}
class BindComponentOperator {
    constructor(component) {
        this.component = component;
    }
    call(subscriber, source) {
        const subscription = source.subscribe(subscriber);
        if (!this.component.bindComponentSubscriptions) {
            this.component.bindComponentSubscriptions = [];
            const originalWillUnmount = this.component.componentWillUnmount;
            this.component.componentWillUnmount = () => {
                this.component.bindComponentSubscriptions.forEach((s) => {
                    s.unsubscribe();
                });
                originalWillUnmount && originalWillUnmount();
            };
        }
        this.component.bindComponentSubscriptions.push(subscription);
        return subscription;
    }
}