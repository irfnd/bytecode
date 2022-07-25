import React from "react";
import { Col } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import styles from "../../Style/Slide.module.css";

import background from "../../assets/icons/Authpict.png";
import peworld from "../../assets/icons/icon1.png";
import WaveLeft from "../../assets/icons/wave-left.svg";
import WaveRight from "../../assets/icons/wave-right.svg";

function Picture() {
	return (
		<Col lg="6" md="4" className="position-fixed h-100 p-0">
			<img src={background} alt="background" className="w-100" />
			<div className="mask h-100 w-100">
				<div className={styles.content}>
					<div className={styles.images}>
						<img src={peworld} alt="Peworld Hire" height={30} />
					</div>
					<div className={styles.banner_text}>
						<h1 className={styles.banner_heading}>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
					</div>
				</div>
				<div className="position-absolute top-0 start-0 m-0">
					<img src={WaveLeft} alt="Icon" className="img-cover" />
				</div>
				<div className="position-absolute top-0 end-0 m-0">
					<img src={WaveRight} alt="Icon" className="img-cover" />
				</div>
			</div>
		</Col>
	);
}

export default Picture;
