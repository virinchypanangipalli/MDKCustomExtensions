import { IControl } from 'mdk-core/controls/IControl';
import { BaseObservable } from 'mdk-core/observables/BaseObservable';
import { Label, TextField } from '@nativescript/core';
import { Color } from '@nativescript/core/color';
import { StackLayout } from '@nativescript/core/ui/layouts/stack-layout';
import { TabView, TabViewItem } from '@nativescript/core/ui/tab-view';

export class MyTabClass extends IControl {
    private _tabView: TabView;
    private _observable: BaseObservable;

    public view(): any {
        if (!this._tabView) {
            this._tabView = new TabView();
            this._tabView.items = [];

            // Tab 1 setup
            const tabItem1 = new TabViewItem();
            tabItem1.title = "Tab 1";
            const stackLayout1 = new StackLayout(); // Use a StackLayout to arrange inputs vertically

            // Create three TextField inputs
            for (let i = 1; i <= 3; i++) {
                const input = new TextField();
                input.hint = `Input ${i}`;
                input.backgroundColor = new Color('lightgray');
                stackLayout1.addChild(input); // Add each TextField to the StackLayout
            }

            tabItem1.view = stackLayout1; // Set the StackLayout as the view for Tab 1

            // Tab 2 setup
            const tabItem2 = new TabViewItem();
            tabItem2.title = "Tab 2";
            const contentLabel2 = new Label();
            contentLabel2.text = "Content of Tab 2";
            contentLabel2.backgroundColor = new Color('lightblue');
            tabItem2.view = contentLabel2;

            // Add both TabViewItems to the TabView's items array
            this._tabView.items.push(tabItem1, tabItem2);
        }

        return this._tabView;
    }

    public observable() {
        if (!this._observable) {
            this._observable = new BaseObservable(this, this.definition(), this.page());
        }
        return this._observable;
    }
}
