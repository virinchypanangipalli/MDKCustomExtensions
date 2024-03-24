import { IControl } from 'mdk-core/controls/IControl';
import { BaseObservable } from 'mdk-core/observables/BaseObservable';
import { StackLayout } from '@nativescript/core/ui/layouts/stack-layout';
import { TextField } from '@nativescript/core/ui/text-field';
import { TabView, TabViewItem } from '@nativescript/core/ui/tab-view';
import { Color } from '@nativescript/core/color';

export class MyTabClass extends IControl {
    private _observable: BaseObservable;
    private _tabView: TabView;

    public initialize(props): void {
        super.initialize(props);
        this.createTabView();
    }

    private createTabView(): void {
        this._tabView = new TabView();

        // Create the first tab with input fields
        const tab1 = new TabViewItem();
        tab1.title = "Tab 1";
        tab1.view = this.createInputFields();

        // Create the second tab
        const tab2 = new TabViewItem();
        tab2.title = "Tab 2";
        tab2.view = this.createSecondTabContent();

        this._tabView.items = [tab1, tab2]; // Include both tabs in the TabView
    }

    private createInputFields(): StackLayout {
        const layout = new StackLayout();

        // Create three interactive TextField components for input
        for (let i = 1; i <= 3; i++) {
            const textField = new TextField();
            textField.hint = `Enter Value ${i}`;
            textField.backgroundColor = new Color("#e0e0e0");
            textField.margin = 10;
            layout.addChild(textField);
        }

        return layout;
    }

    private createSecondTabContent(): StackLayout {
        const layout = new StackLayout();
        const textField = new TextField();
        textField.text = "Content of Tab 2";
        textField.editable = false; // Make the TextField read-only
        layout.addChild(textField);

        return layout;
    }

    public view(): TabView {
        return this._tabView;
    }

    public observable(): BaseObservable {
        if (!this._observable) {
            this._observable = new BaseObservable(this, this.definition(), this.page());
        }
        return this._observable;
    }

    public setContainer(container: IControl): void {
        // Optional implementation
    }

    public setValue(value: any, notify: boolean, isTextValue?: boolean): Promise<any> {
        // Optional implementation
        return Promise.resolve();
    }
}
