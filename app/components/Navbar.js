import React from 'react';
import { Link } from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = NavbarStore.getState();
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount() {
		NavbarStore.listen(this.onChange);
		NavbarActions.getPathname();
	}
	componentWillUnmount() {
		NavbarStore.unlisten(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
	handleLink(event) {
		console.log(event.target)
	}
	render() {
		return (
			<header>
				<nav className="navbar navbar-vinson rectangle" role="navigation">
					<div className="container">
						<div className="navbar-header">
							<button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" type="button">
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<Link to="/" className="navbar-brand"> 月桂叶的博客</Link>
							<small className="navbar-text"> 爱编程爱生活</small>
						</div>
						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav navbar-right" onClick={this.handleLink.bind(this)}>
								<li className={this.state.pathname == '/' ? 'active' : ''}>
									<Link className="word-keep" to="/"><span className="octicon octicon-book">
										</span> 博文
									</Link>
								</li>
								<li className={this.state.pathname == '/archive' ? 'active' : ''}>
									<Link className="word-keep" to="/archive"><span className="octicon octicon-repo">
										</span> 档案
									</Link>
								</li>
								<li className={this.state.pathname == '/category' ? 'active' : ''}>
									<Link className="word-keep" to="/category"><span className="octicon octicon-list-unordered">
										</span> 分类
									</Link>
								</li>
								<li className={this.state.pathname == '/tag' ? 'active' : ''}>
									<Link className="word-keep" to="/tag"><span className="octicon octicon-tag">
										</span> 标签
									</Link>
								</li>
								<li>
									<Link to="#stq=" className="search-button">
										<span className="octicon octicon-search"></span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		);
	}
};
export default Navbar;