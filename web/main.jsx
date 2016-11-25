const { connect, Provider } = ReactRedux;
const { createStore, compose } = Redux;
const { Component } = React;
const { sortable } = Sortable;

function wishlist(state = [], action) {
  switch (action.type) {
    case 'ADD_WISHLIST':
      return state.concat([{ title: action.title, author: action.author }]);
    default:
      return state;
  }
}

function createBook(title, author) {
  return {
    title: title,
    author: author,
    type: 'ADD_WISHLIST',
  };
}

let store = createStore(wishlist, [
  { author: 'God', title: 'The Bible' },
  { author: 'Linus Torvalds', title: 'Linux' },
  { author: 'Me', title: 'How to write bad React' },
]);

class App extends Component {
  render() {
    return (<div>
              <WishlistInputComponent />
              <WishlistItemsComponent />
            </div>);
  }
}

class Container extends Component {
  render() {
    return (<Provider store={store}>
              <App />
            </Provider>);
  }
}

class WishlistInput extends Component {
  click() {
    if (this.state.title && this.state.author) {
      this.props.addBook(this.state.title, this.state.author);
      this.setState(this.defaultState());
    }
  }

  constructor(props) {
    super(props);
    this.state = this.defaultState();
  }

  defaultState() {
    return { title: '', author: '' };
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    return (<form action="javascript:void(0);">
             <div className="form-group">
               <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                onChange={this.handleTitleChange.bind(this)}
                ref={ (input) => { this.titleInput = input; } }
                value={this.state.title} />
             </div>
             <div className="form-group">
               <input
                type="text"
                className="form-control"
                id="author"
                placeholder="Author"
                onChange={this.handleAuthorChange.bind(this)}
                ref={ (input) => { this.authorInput = input; } }
                value={this.state.author} />
             </div>
             <button
              type="submit"
              className="btn btn-primary"
              onClick={this.click.bind(this)}>
                Submit
              </button>
           </form>);
  }
}

const WishlistInputComponent = connect(
  () => ({}),
  (dispatch, ownProps) => ({
    addBook: (title, author) => {
      dispatch(createBook(title, author));
    },
  }
))(WishlistInput);

class ListItem extends Component {
  render() {
    return (<div {...this.props} className="list-group-item">{this.props.children}</div>);
  }
}

let SortableListItem = sortable(ListItem);

class WishlistItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggingIndex: null,
      items: props.items,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      draggingIndex: null,
      items: nextProps.items,
    });
    console.log(this.state);
  }

  updateState(newState) {
    this.setState(newState);
  }

  render() {
    return (<div className="items list-group">
             {
               this.state.items.map((item, i) =>
                (<SortableListItem
                  key={i}
                  updateState={this.updateState.bind(this)}
                  draggingIndex={this.state.draggingIndex}
                  items={this.state.items}
                  sortId={i}
                  outline="list"
                  >
                   <h4 className="list-group-item-heading">{item.title}</h4>
                   <p className="list-group-item-text">{item.author}</p>
                  </SortableListItem>))
             }
           </div>);
  }
}

const WishlistItemsComponent = connect(
  (state, ownProps) => ({ items: state })
)(WishlistItems);

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);
