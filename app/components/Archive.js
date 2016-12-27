import React from 'react';
import { Link } from 'react-router';
import Tool from '../Tool';
import ArchiveStore from '../stores/ArchiveStore';
import ArchiveActions from '../actions/ArchiveActions';
class Archive extends React.Component {
	constructor(props) {
		super(props);
		this.state = ArchiveStore.getState();
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount() {
		ArchiveStore.listen(this.onChange);
		ArchiveActions.getDataList();
	}
	componentWillUnmount() {
		ArchiveStore.unlisten(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
	render() {
		var Archives = this.state.dataList.map((item, index) => 
			<div className="cd-timeline-block" key={item.id}>
				<div className="cd-timeline-img cd-picture">
					<img src="/images/icon-picture.svg" alt="Picture" />
				</div>
				<div className="cd-timeline-content">
					<Link to={ "/article/" + item.id }>
						<h4>{item.title}</h4>
					</Link>
					<span className="cd-date">{Tool.formatDate(item.create_at)}</span>
				</div>
			</div>
		);
		return (
			<div className="main">
				<div className="container">
					<div className="row">
						<div className="sheet">
							<header><h1>档案</h1></header>
							<hr className="boundary" />
							<article>
								<section id="cd-timeline" className="cd-container">
									{Archives}
								</section>
							</article>
						</div>
					</div>
				</div>
			</div>
		);
	}
};
export default Archive;