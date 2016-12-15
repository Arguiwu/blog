import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="flex-footer">
				<div className="page-scrollTop" data-toggle="tooltip" data-placement="top" title="Top">
					<Link to="javascript:;">
						<div className="arrow"></div>
						<div className="stick"></div>
					</Link>
				</div>
				<footer className="footnote footnote-vinson">
					<div className="container">
						<Link className="foot-item" to="/" target="_blank">
							<span className="octicon octicon-mail"></span>
						</Link>
						<Link className="foot-item" to="/" target="_blank">
							<span className="octicon octicon-mark-github"></span>
						</Link>
						<Link className="foot-item" to="/" target="_blank">
							<span className="octicon octicon-rss"></span>
						</Link>
						<Link className="foot-item" to="/" target="_blank">
							<span className="octicon octicon-link-external"></span>
						</Link>
						<Link to="/">
							<span className="word-keep"> &copy;月桂叶</span>
						</Link>
					</div>
				</footer>
			</div>
		);
	}
};
export default Footer;