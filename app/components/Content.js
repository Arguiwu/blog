import React from 'react';
import { Link } from 'react-router';
import Tool from '../Tool';
import ContentStore from '../stores/ContentStore';
import ContentActions from '../actions/ContentActions';
class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = ContentStore.getState();
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount() {
		ContentStore.listen(this.onChange);
		ContentActions.getDataList(this.props.params.id);
	}
	componentWillUnmount() {
		ContentStore.unlisten(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
	render() {
		return (
			<div className="main">
				<div className="container">
					<div className="row">
						<div className="content col-lg-9">
							<div className="sheet post">
								<header>
									<h2>{this.state.contentData.title}</h2>
									<p className="post-meta">
										<span className="octicon octicon-clock"></span>&nbsp;
										<span>{Tool.formatDate(this.state.contentData.create_at)}</span>
									</p>
									<p className="post-tag">
										<span>
											<Link to="/"><span className="octicon octicon-tag">标签</span></Link>
										</span>
									</p>
								</header>
								<hr className="boundary" />
								<article dangerouslySetInnerHTML={{__html: this.state.contentData.content}} />
								<div id="post-share" className="bdsharebuttonbox">
									<Link to="/" className="bds_more" data-cmd="more"></Link>
									<Link to="/" className="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></Link>
									<Link to="/" className="bds_weixin" data-cmd="weixin" title="分享到微信"></Link>
									<Link to="/" className="bds_douban" data-cmd="douban" title="分享到豆瓣网"></Link>
									<Link to="/" className="bds_fbook" data-cmd="fbook" title="分享到Facebook"></Link>
									<Link to="/" className="bds_copy" data-cmd="copy" title="分享到复制网址"></Link>
								</div>
							</div>
						</div>
						<div className="content-navigation col-lg-3">
							<div className="shadow-bottom-center">
								<div className="content-navigation-toc">
									<div className="content-navigation-header">
										<span className="octicon octicon-list-unordered"></span>&nbsp;Toc
									</div>
									<div className="content-navigation-list toc">
										<ul>
											<li>
												<Link to="/" id="markdown-toc-section1">词法作用域</Link>
											</li>
											<li>
												<Link to="/" id="markdown-toc-section2">词法作用域</Link>
											</li>
											<li>
												<Link to="/" id="markdown-toc-section3">词法作用域</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="content-navigation-tag">
									<div className="content-navigation-toc">
										<div className="content-navigation-header">
											<span className="octicon octicon-list-unordered"></span>&nbsp;Toc
										</div>
										<div className="content-navigation-list toc">
											<ul>
												<li>
													<Link to="/" id="markdown-toc-section1">词法作用域</Link>
												</li>
												<li>
													<Link to="/" id="markdown-toc-section2">词法作用域</Link>
												</li>
												<li>
													<Link to="/" id="markdown-toc-section3">词法作用域</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="content-navigation-related">
									<div className="content-navigation-toc">
										<div className="content-navigation-header">
											<span className="octicon octicon-list-unordered"></span>&nbsp;Related
										</div>
										<div className="content-navigation-list toc">
											<ul>
												<li>
													<Link to="/" id="markdown-toc-section1">词法作用域</Link>
												</li>
												<li>
													<Link to="/" id="markdown-toc-section2">词法作用域</Link>
												</li>
												<li>
													<Link to="/" id="markdown-toc-section3">词法作用域</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};
export default Content;