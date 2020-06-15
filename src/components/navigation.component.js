import {Component} from "../core/component";

function tabClickHandler(event) {
    event.preventDefault();
    if (event.target.classList.contains("tab")) {
        Array.from(this.$el.querySelectorAll('.tab'))
            .forEach(tab => {
                return tab.classList.remove('active');
            });
        event.target.classList.add('active');

        const activeTab = this.tabs.find(tab => tab.name === event.target.dataset.name);
        this.tabs.forEach(tab => tab.component.hide());
        activeTab.component.show();
    }
}

export class NavigationComponent extends Component {
    constructor(id) {
        super(id);
        this.tabs = [];
    }

    init() {
        this.$el.addEventListener('click', tabClickHandler.bind(this));
    }

    registerTabs(tabs) {
        this.tabs = tabs;
    }
}
