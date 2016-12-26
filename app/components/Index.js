import React from 'react';
import { Link } from 'react-router';
import IndexStore from '../stores/IndexStore';
import IndexActions from '../actions/IndexActions';
class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = IndexStore.getState();
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount() {
		IndexStore.listen(this.onChange);
		IndexActions.getDataList();
	}
	componentWillUnmount() {
		IndexStore.unlisten(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
	render() {
		var articles = this.state.dataList.map((item, index) => 
			<article key={index}>
				<header>
					<Link to="#">
						<span className="octicon octicon-calendar"></span>
						<span>{item.create_at}</span>
					</Link>
				</header>
				<div className="module">
					<Link to="#" className="title">{item.title}</Link>
					<p dangerouslySetInnerHTML={{__html: item.content}} />
					<Link to="#" className="readmore">更多</Link>
					<footer>
						<Link to="#" className="word-keep"><span className="octicon octicon-tag"></span> 标签一</Link>
						<Link to="#" className="word-keep"><span className="octicon octicon-tag"></span> 标签二</Link>
						<Link to="#" className="word-keep"><span className="octicon octicon-tag"></span> 标签三</Link>
						<span className="word-keep pull-right">
							<Link to="#"><span className="octicon octicon-comment"></span> 评论
							</Link>
							<Link to="#"><span className="octicon octicon-file-symlink-file"></span> 分享
							</Link>
						</span>
					</footer>
				</div>
			</article>
		);
		return (
			<div className="main">
				<div className="container">
					<div className="row index">
						<div className="col-sm-10 col-sm-offset-1 col-lg-9 col-lg-offset-1_5">
							<div>
								<section className="category-slice">
									{articles}
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};
export default Index;