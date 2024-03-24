import { IControl } from 'mdk-core/controls/IControl';
import { BaseObservable } from 'mdk-core/observables/BaseObservable';
import { StackLayout } from '@nativescript/core/ui/layouts/stack-layout';
import { TextField } from '@nativescript/core/ui/text-field';
import { Label } from '@nativescript/core/ui/label';
import { DatePicker } from '@nativescript/core/ui/date-picker';
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

        const tab1 = new TabViewItem();
        tab1.title = "Tab 1";
        tab1.view = this.createTab1Content();

        const tab2 = new TabViewItem();
        tab2.title = "Tab 2";
        tab2.view = this.createSecondTabContent();

        this._tabView.items = [tab1, tab2];
    }

    private createTab1Content(): StackLayout {
        const layout = new StackLayout();

        // List of fields to create in Tab 1
        const fields = [
            { label: "*Car Numbers" },
            { label: "*Clean Type" },
            { inputType: "text", hint: "Clean Type" },
            { label: "*Number of Cleaners" },
            { inputType: "number", hint: "Number of cleaners" },
            { label: "*Cleaned By" },
            { inputType: "text", hint: "Clean By" },
            { label: "*Completion Date and Time" },
            { inputType: "date" },
            { label: "Comments" },
            { inputType: "text", hint: "Comments" },
        ];

        fields.forEach(field => {
            if (field.label) {
                const label = new Label();
                label.text = field.label;
                layout.addChild(label);
            }

            if (field.inputType === "text") {
                const textField = new TextField();
                textField.hint = field.hint;
                layout.addChild(textField);
            } else if (field.inputType === "number") {
                const textField = new TextField();
                textField.hint = field.hint;
                textField.keyboardType = "number";
                layout.addChild(textField);
            } else if (field.inputType === "date") {
                const datePicker = new DatePicker();
                layout.addChild(datePicker);
            }
        });

        return layout;
    }

    private createSecondTabContent(): StackLayout {
        const layout = new StackLayout();
        const textField = new TextField();
        textField.text = "Content of Tab 2";
        textField.editable = false;
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
}
