import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<div className="nav1">
				<nav
					class="navbar navbar-expand-lg"
					style={{ opacity: "1", height: "60px" }}
				>
					<div className="container-fluid cc">
						<div
							className="collapse navbar-collapse"
							id="navbarNav"
							style={{ justifyContent: "center" }}
						>
							<ul className="navbar-nav">
								<li className="nav-item ">
									<Link
										className="nav-link active "
										aria-current="page"
										to="/general"
									>
										<span style={{ color: "white" }}>General</span>
									</Link>
								</li>
								<li className="nav-item ">
									<Link
										className="nav-link active "
										aria-current="page"
										to="/business"
									>
										<span style={{ color: "white" }}>Business</span>
									</Link>
								</li>
								<li className="nav-item ">
									<Link
										className="nav-link active "
										aria-current="page"
										to="/entertainment"
									>
										<span style={{ color: "white" }}>Entertainment</span>
									</Link>
								</li>
								<li className="nav-item ">
									<Link
										className="nav-link active "
										aria-current="page"
										to="/health"
									>
										<span style={{ color: "white" }}>Health</span>
									</Link>
								</li>
								<li className="nav-item ">
									<Link
										className="nav-link active "
										aria-current="page"
										to="/science"
									>
										<span style={{ color: "white" }}>Science</span>
									</Link>
								</li>
								<li className="nav-item ">
									<Link
										className="nav-link active "
										aria-current="page"
										to="/sports"
									>
										<span style={{ color: "white" }}>Sports</span>
									</Link>
								</li>
								<li className="nav-item ">
									<Link
										className="nav-link active "
										aria-current="page"
										to="/technology"
									>
										<span style={{ color: "white" }}>Technology</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
